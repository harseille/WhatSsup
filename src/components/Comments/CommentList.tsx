import CommentItem from '@components/Comments/CommentItem';
import { 인터페이스_댓글_읽기 } from '@typings/IComment';

function CommentList({
  commentList,
  commentsCount,
  target,
}: {
  commentList: 인터페이스_댓글_읽기[];
  commentsCount: number;
  target: (node: HTMLLIElement) => void;
}) {
  const 댓글목록 = commentList.map((댓글, 순서) => (
    <li key={댓글.댓글id} ref={순서 === commentList.length - 1 ? target : null}>
      <CommentItem comment={댓글} />
    </li>
  ));

  return <ul>{댓글목록}</ul>;
}

export default CommentList;
