import DetailHeader from './components/DetailHeader';
import DetailSection from './components/DetailSection';

export default function DetailPage() {
  return (
    <div>
      <DetailHeader />
      <div className="text-subtitle-2 flex h-26 justify-center text-tertiary">↗이미지 출처</div>
      <DetailSection />
    </div>
  );
}
