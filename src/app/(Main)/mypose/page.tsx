import EmptyCase from '@/components/Feed/EmptyCase';

export default function Page() {
  return (
    <EmptyCase
      title={'나만의 포즈를 추가해 보세요!'}
      text={'포즈피드에 네컷사진을 업로드할 수 있어요'}
      button={'포즈 등록하기'}
      path={'/feed'}
    />
  );
}
