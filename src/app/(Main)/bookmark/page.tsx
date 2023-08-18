import PhotoList from '../feed/components/PhotoList';
import EmptyCase from '../feed/components/EmptyCase';

export default function BookmarkPage() {
  return (
    <>
      <EmptyCase
        title={'포즈를 보관해 보세요!'}
        text={`북마크 버튼으로 포즈를 보관할 수 있어요.\n포즈피드에서 멋진 포즈를 찾아 보관해 보세요.`}
        button={'포즈피드 바로가기'}
        path={'/feed'}
      />
      <PhotoList />
    </>
  );
}
