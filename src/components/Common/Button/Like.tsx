import styled from '@emotion/styled';
import { changeRem, flexbox } from '@styles/mixin';

interface 인터페이스_좋아요 {
  count: number;
}

function Like(props: 인터페이스_좋아요) {
  // const { count, position, top, left, right, bottom } = props;
  const { count } = props;

  return (
    // <LikeContainter position={position} top={top} left={left} right={right} bottom={bottom}>
    <LikeContainter>
      <svg
        width="19"
        height="16"
        viewBox="0 0 19 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        css={{
          marginRight: changeRem(8),
        }}>
        <mask id="path-1-inside-1_369_602" fill="white">
          <path d="M9.59151 15.4084C9.59151 15.4084 18.2504 11.7769 18.2504 6.07014C18.2504 2.69829 16.2924 0.882568 13.877 0.882568C12.7171 0.882568 11.6047 1.33346 10.7845 2.13607L10.2841 2.62581C9.90572 2.99606 9.27729 2.99606 8.89894 2.62581L8.39848 2.13607C7.57831 1.33347 6.46591 0.882568 5.30602 0.882568C2.85681 0.882568 0.932617 2.69829 0.932617 6.07014C0.932617 11.7769 9.59151 15.4084 9.59151 15.4084Z" />
        </mask>
        <path
          d="M9.59151 15.4084C9.59151 15.4084 18.2504 11.7769 18.2504 6.07014C18.2504 2.69829 16.2924 0.882568 13.877 0.882568C12.7171 0.882568 11.6047 1.33346 10.7845 2.13607L10.2841 2.62581C9.90572 2.99606 9.27729 2.99606 8.89894 2.62581L8.39848 2.13607C7.57831 1.33347 6.46591 0.882568 5.30602 0.882568C2.85681 0.882568 0.932617 2.69829 0.932617 6.07014C0.932617 11.7769 9.59151 15.4084 9.59151 15.4084Z"
          fill="#098D42"
        />
        <path
          d="M9.59151 15.4084L4.95045 26.4746C7.91923 27.7196 11.2638 27.7196 14.2326 26.4746L9.59151 15.4084ZM8.39848 2.13607L16.7914 -6.44058L16.7914 -6.44059L8.39848 2.13607ZM10.7845 2.13607L2.39162 -6.44059L2.39162 -6.44059L10.7845 2.13607ZM8.89894 2.62581L0.506027 11.2025L0.506031 11.2025L8.89894 2.62581ZM10.2841 2.62581L1.89115 -5.95084L1.89115 -5.95084L10.2841 2.62581ZM0.00555992 10.7127L0.506027 11.2025L17.2919 -5.95084L16.7914 -6.44058L0.00555992 10.7127ZM18.677 11.2025L19.1774 10.7127L2.39162 -6.44059L1.89115 -5.95084L18.677 11.2025ZM13.877 -11.1174C9.61734 -11.1174 5.48121 -9.46398 2.39162 -6.44059L19.1774 10.7127C17.7282 12.1309 15.8169 12.8826 13.877 12.8826V-11.1174ZM30.2504 6.07014C30.2504 2.06977 29.0586 -2.30974 25.871 -5.83564C22.6299 -9.42066 18.2078 -11.1174 13.877 -11.1174V12.8826C11.9616 12.8826 9.72618 12.0937 8.06794 10.2595C6.46316 8.48438 6.2504 6.69867 6.2504 6.07014H30.2504ZM5.30602 12.8826C3.36616 12.8826 1.4548 12.1309 0.00556151 10.7127L16.7914 -6.44059C13.7018 -9.46398 9.56567 -11.1174 5.30602 -11.1174V12.8826ZM12.9326 6.07014C12.9326 6.64379 12.7422 8.4359 11.1238 10.2357C9.43366 12.1152 7.17155 12.8826 5.30602 12.8826V-11.1174C0.991284 -11.1174 -3.45753 -9.44224 -6.72207 -5.81188C-9.91491 -2.26125 -11.0674 2.12464 -11.0674 6.07014H12.9326ZM9.59151 15.4084C14.2326 4.34219 14.2356 4.34344 14.2385 4.34469C14.2395 4.34509 14.2424 4.34633 14.2443 4.34712C14.2481 4.34872 14.2518 4.35027 14.2554 4.35178C14.2625 4.35479 14.2692 4.35761 14.2754 4.36025C14.2878 4.36552 14.2984 4.37004 14.3072 4.37384C14.3248 4.38142 14.3355 4.3861 14.3396 4.38793C14.3478 4.39153 14.3308 4.38412 14.2923 4.36616C14.2136 4.32945 14.0576 4.25451 13.8517 4.14556C13.4106 3.91211 12.8969 3.60497 12.4554 3.27434C11.9649 2.90695 11.917 2.77408 12.0691 2.98822C12.2552 3.25021 12.9326 4.33641 12.9326 6.07014H-11.0674C-11.0674 15.0196 -4.59426 20.4899 -1.93132 22.4843C-0.208066 23.7748 1.44294 24.7322 2.62537 25.358C3.23129 25.6787 3.75178 25.9321 4.14661 26.1162C4.34488 26.2087 4.51391 26.2849 4.6489 26.3445C4.71648 26.3743 4.77575 26.4001 4.82615 26.4217C4.85135 26.4326 4.87436 26.4424 4.89509 26.4512C4.90546 26.4556 4.91526 26.4598 4.92449 26.4636C4.92911 26.4656 4.93358 26.4675 4.93791 26.4693C4.94007 26.4702 4.94321 26.4715 4.94429 26.472C4.94739 26.4733 4.95045 26.4746 9.59151 15.4084ZM6.2504 6.07014C6.2504 4.33641 6.92785 3.25021 7.11392 2.98822C7.26601 2.77408 7.21813 2.90695 6.72757 3.27434C6.2861 3.60497 5.77239 3.91211 5.33127 4.14556C5.12542 4.25451 4.96944 4.32945 4.89073 4.36616C4.85224 4.38412 4.83523 4.39153 4.84339 4.38793C4.84755 4.3861 4.8582 4.38142 4.87583 4.37384C4.88465 4.37004 4.89523 4.36552 4.90764 4.36025C4.91385 4.35761 4.92051 4.35479 4.92765 4.35178C4.93121 4.35027 4.9349 4.34872 4.9387 4.34712C4.9406 4.34633 4.94354 4.34509 4.94449 4.34469C4.94745 4.34344 4.95045 4.34219 9.59151 15.4084C14.2326 26.4746 14.2356 26.4733 14.2387 26.472C14.2398 26.4715 14.2429 26.4702 14.2451 26.4693C14.2494 26.4675 14.2539 26.4656 14.2585 26.4636C14.2678 26.4598 14.2776 26.4556 14.2879 26.4512C14.3087 26.4424 14.3317 26.4326 14.3569 26.4217C14.4073 26.4001 14.4665 26.3743 14.5341 26.3445C14.6691 26.2849 14.8381 26.2087 15.0364 26.1162C15.4312 25.9321 15.9517 25.6787 16.5576 25.358C17.7401 24.7322 19.3911 23.7748 21.1143 22.4843C23.7773 20.4899 30.2504 15.0196 30.2504 6.07014H6.2504ZM0.506031 11.2025C5.54877 16.1372 13.6342 16.1372 18.677 11.2025L1.89115 -5.95084C6.17719 -10.1451 13.0058 -10.1451 17.2919 -5.95084L0.506031 11.2025Z"
          fill="#098D42"
          mask="url(#path-1-inside-1_369_602)"
        />
      </svg>
      <span>{count}</span>
    </LikeContainter>
  );
}

export default Like;

const LikeContainter = styled.div`
  ${flexbox('row', 'right', 'center')};
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translate3d(0 -50%, 0);
  color: ${props => props.theme.colors.primaryGreen};
  & span {
    font-size: ${changeRem(14)};
  }
`;
