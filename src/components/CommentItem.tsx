import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
// ! : @types 안먹힘
import { 인터페이스_댓글프로퍼티 } from '../types/IComment';
// export interface 리뷰프로퍼티 {
//   id?: string;
//   작성자: string;
//   프로필이미지?: string;
//   등록날짜: string;
//   본문: string;
// }

// const 리뷰: 리뷰프로퍼티 = {
//   id:'r1'
//   작성자: 'test',
//   프로필이미지: '아마 경로',
//   등록날짜: '2시간',
//   본문: '고소~고소~ 짭짤~짭짤~ 매워~매워~',
// };

function CommentItem(props: { comment: 인터페이스_댓글프로퍼티 }) {
  const {
    comment: { 작성자이름, 내용, 작성일 },
    // comment: { 꿀조합id, 작성자id, 작성자이름, 작성자프로필이미지, 내용, 작성일 },
  } = props;
  return (
    <Wrapper>
      <UserInfoWrapper>
        <ProfileImg />
        <UserName>{작성자이름}</UserName>
        <CreatedTime>{작성일}</CreatedTime>
      </UserInfoWrapper>
      <Comment>{내용}</Comment>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 8px;
  padding-bottom: 16px;
  border-bottom: 1px solid #eee;
`;

const UserInfoWrapper = styled.div`
  margin-bottom: 20px;

  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;

const ProfileImg = styled.div`
  float: left;
  width: ${changeRem(40)};
  height: ${changeRem(40)};
  margin-right: 8px;
  border-radius: 50%;
  background: #ccc;
`;

const UserName = styled.div`
  float: left;
  width: ${`calc(100% - ${changeRem(48)})`};
  margin: 2px 0;
  font-size: ${changeRem(16)};
  font-weight: bold;
  line-height: 1.25;
`;

const CreatedTime = styled.span`
  float: left;
  width: ${`calc(100% - ${changeRem(48)})`};
  font-size: ${changeRem(12)};
  line-height: 1.25;
  color: #979797;
`;

const Comment = styled.div`
  font-size: ${changeRem(14)};
  line-height: 1.25;
`;

export default CommentItem;
