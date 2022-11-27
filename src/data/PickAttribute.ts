import { 인터페이스_꿀조합선택페이지_속성선택 } from '@typings/ISandwich';

const 꿀조합속성: 인터페이스_꿀조합선택페이지_속성선택[] = [
  {
    이름: '맛',
    속성목록: [
      { id: 'F1', 이름: '달콤' },
      { id: 'F2', 이름: '새콤' },
      { id: 'F3', 이름: '고소' },
      { id: 'F4', 이름: '짭짤' },
      { id: 'F5', 이름: '상큼' },
      { id: 'F6', 이름: '향긋' },
      { id: 'F7', 이름: '매콤' },
    ],
    최대선택개수: 3,
  },
  {
    이름: '재료',
    속성목록: [
      { id: 'I1', 이름: '돼지고기' },
      { id: 'I2', 이름: '소고기' },
      { id: 'I3', 이름: '닭고기' },
      { id: 'I4', 이름: '해산물' },
      { id: 'I5', 이름: '햄' },
      { id: 'I6', 이름: '소세지' },
      { id: 'I7', 이름: '에그마요' },
      { id: 'I8', 이름: '야채' },
    ],
    최대선택개수: 1,
  },
  {
    이름: '추가사항',
    속성목록: [
      { id: 'A1', 이름: '고기러버' },
      { id: 'A2', 이름: '치즈 폭탄' },
      { id: 'A3', 이름: '저칼로리' },
      { id: 'A4', 이름: '숲속의 버터' },
      { id: 'A5', 이름: '폭신폭신' },
      { id: 'A6', 이름: '피자토핑' },
      { id: 'A7', 이름: '더블업' },
    ],
    최대선택개수: 3,
  },
];

export default 꿀조합속성;
