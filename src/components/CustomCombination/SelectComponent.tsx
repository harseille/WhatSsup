import SelectCombination from '@components/CustomCombination/SelectCombination';
import NextStepButton from '@components/CustomCombination/NextStepButton';
import CombinationRegistration from '@components/CustomCombination/CombinationRegistration';

import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';

import { 인터페이스_꿀조합 } from '@typings/ISandwich';

type 타입_재료선택_속성 = {
  customCombination: 인터페이스_꿀조합;
  currentStep: number;
  onChange: (선택한재료: 인터페이스_꿀조합) => void;
  onNextStep: () => void;
};

function SelectComponent(props: 타입_재료선택_속성) {
  const {
    currentStep: 현재진행도,
    onNextStep: 다음_선택지로_이동하기,
    onChange: 체인지핸들러_나만의_조합_수정,
    customCombination: 나만의_조합,
  } = props;

  return (
    <SelectWrap>
      {현재진행도 <= 4 ? (
        <>
          <SelectCombination
            currentStep={현재진행도}
            customCombination={나만의_조합}
            onChange={체인지핸들러_나만의_조합_수정}
          />
          <NextStepButton currentStep={현재진행도} onNextStep={다음_선택지로_이동하기} />
        </>
      ) : (
        <CombinationRegistration />
      )}
    </SelectWrap>
  );
}

export default SelectComponent;
const SelectWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  min-height: ${changeRem(510)};
`;
