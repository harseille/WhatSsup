import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getFilteredBestCombination from '@api/getFilteredBestCombination';
import NotFoundBestCombinationList from '@components/BestCombinationList/NotFoundBestCombinationList';
import SandwichInfoCard from '@components/Common/Cards/SandwichInfoCard';
import styled from '@emotion/styled';
import { flexbox } from '@styles/mixin';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';
import LoadingSpinner from '@components/Common/LoadingSpinner';

function BestCombinationList() {
  const [꿀조합_목록, 꿀조합_목록_수정] = useState<인터페이스_꿀조합[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { state } = useLocation();

  useEffect(() => {
    (async () => {
      await getFilteredBestCombination(꿀조합_목록_수정, state);
      setIsLoading(false);
    })();
  }, [state]);

  if (꿀조합_목록?.length === 0) return <NotFoundBestCombinationList />;

  return (
    <>
      {isLoading && (
        <LoadingWrap>
          <LoadingSpinner />
        </LoadingWrap>
      )}
      <ListWrap>
        {꿀조합_목록?.map(sandwich => (
          <SandwichInfoCard key={sandwich.id} sandwich={sandwich} />
        ))}
      </ListWrap>
    </>
  );
}

export default BestCombinationList;

const ListWrap = styled.ul`
  width: 100%;
  display: flex;
  ${flexbox('column', 'center', 'center')}
  gap: 16px;
`;

const LoadingWrap = styled.div`
  position: fixed;
  top: 50%;
  transform: translate(0, -50%);
`;
