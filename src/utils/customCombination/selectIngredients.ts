import { 인터페이스_생성단계_꿀조합, 인터페이스_선택된_재료 } from '@typings/ISandwich';

type TProps = {
  나만의_조합: 인터페이스_생성단계_꿀조합;
  체인지핸들러_나만의_조합_수정: (선택한재료: 인터페이스_생성단계_꿀조합) => void;
  재료정보: 인터페이스_선택된_재료;
  changeModalType: (type: string) => void;
};

const 나만의_조합_샌드위치_수정 = (props: TProps) => {
  const { 재료정보, 나만의_조합, 체인지핸들러_나만의_조합_수정: 나만의_조합_수정 } = props;
  나만의_조합_수정({ ...나만의_조합, 베이스샌드위치: 재료정보.이름 });
};

const 나만의_조합_토스팅_수정 = (props: TProps) => {
  const { 재료정보, 나만의_조합, 체인지핸들러_나만의_조합_수정: 나만의_조합_수정 } = props;
  나만의_조합_수정({ ...나만의_조합, 토스팅: 재료정보.이름 });
};

const 나만의_조합_추가재료_수정 = (props: TProps) => {
  const { 재료정보, 나만의_조합, 체인지핸들러_나만의_조합_수정: 나만의_조합_수정 } = props;
  const isSelected = 나만의_조합.선택재료.find(선택재료 => 선택재료.이름 === 재료정보.이름 && 선택재료.추가재료여부);

  const 새로운_선택재료 = 나만의_조합.선택재료.filter(
    선택재료 => 선택재료.이름 !== 재료정보.이름 || (선택재료.이름 === 재료정보.이름 && !선택재료.추가재료여부)
  );

  나만의_조합_수정({
    ...나만의_조합,
    선택재료: isSelected ? [...새로운_선택재료] : [...나만의_조합.선택재료, { ...재료정보, 추가재료여부: true }],
  });
};

const 나만의_조합_선택_재료_수정 = (props: TProps) => {
  const { 재료정보, 나만의_조합, 체인지핸들러_나만의_조합_수정: 나만의_조합_수정, changeModalType } = props;
  const isLimited = 재료정보.카테고리 === '빵' || 재료정보.카테고리 === '치즈';

  if (isLimited) {
    const 새로운_선택재료 = 나만의_조합.선택재료.filter(선택재료 => 선택재료.카테고리 !== 재료정보.카테고리);
    const isSelectedCheese =
      재료정보.카테고리 === '치즈' && 나만의_조합.선택재료.find(선택재료 => 선택재료.이름 === 재료정보.이름);

    나만의_조합_수정({
      ...나만의_조합,
      선택재료: isSelectedCheese ? [...새로운_선택재료] : [...새로운_선택재료, { ...재료정보, 추가재료여부: false }],
    });
  } else {
    const isSelected = 나만의_조합.선택재료.find(선택재료 => 선택재료.이름 === 재료정보.이름 && !선택재료.추가재료여부);

    const 새로운_선택재료 = 나만의_조합.선택재료.filter(
      선택재료 => 선택재료.이름 !== 재료정보.이름 || (선택재료.이름 === 재료정보.이름 && 선택재료.추가재료여부)
    );
    const 소스_개수 = 새로운_선택재료.filter(선택재료 => 선택재료.카테고리 === 재료정보.카테고리).length;

    if (재료정보.카테고리 === '소스' && 소스_개수 >= 3) return changeModalType('Limited');

    나만의_조합_수정({
      ...나만의_조합,
      선택재료: isSelected ? [...새로운_선택재료] : [...나만의_조합.선택재료, { ...재료정보, 추가재료여부: false }],
    });
  }
};

const selectIngredients = (props: TProps) => {
  const { 재료정보 } = props;

  if (재료정보.카테고리 === '샌드위치') 나만의_조합_샌드위치_수정(props);
  else if (재료정보.카테고리 === '토스팅') 나만의_조합_토스팅_수정(props);
  else if (재료정보.카테고리 === '추가재료') 나만의_조합_추가재료_수정(props);
  else 나만의_조합_선택_재료_수정(props);
};

export default selectIngredients;
