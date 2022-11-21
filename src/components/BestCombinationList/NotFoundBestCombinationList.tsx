import { useNavigate } from 'react-router-dom';
import Button from '@components/UI/Button';
import cryingDanji from '@assets/images/cryingDanji.png';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';

function NotFoundBestCombinationList() {
  const navigate = useNavigate();
  const 페이지_뒤로가기 = () => navigate(-1);

  return (
    <>
      <Title>꿀조합 찾기 실패</Title>
      <ImgWrap>
        <img src={cryingDanji} alt="cryingDanji" />
      </ImgWrap>
      <Desc>검색하신 샌드위치를 찾을 수 없습니다.</Desc>
      <Desc>꿀 조합을 다시 선택해주세요.</Desc>
      <Button
        onClick={페이지_뒤로가기}
        designType="primaryYellow"
        width={changeRem(330)}
        height={changeRem(50)}
        marginTop="40px">
        다시 찾기
      </Button>
    </>
  );
}

export default NotFoundBestCombinationList;

const ImgWrap = styled.div`
  max-width: 250px;

  & img {
    width: 100%;
    height: 100%;
  }

  ${mediaQuery} {
    max-width: 750px;
    min-width: 300px;
  }
`;

const Title = styled.p`
  padding-top: 60px;
  font-weight: 700;
  font-size: ${changeRem(24)};
  text-align: center;

  ${mediaQuery} {
    max-width: 750px;
    min-width: 300px;
  }
`;

const Desc = styled.p`
  font-size: ${changeRem(14)};
  margin-bottom: 4px;
  color: rgb(65, 65, 65);
`;
