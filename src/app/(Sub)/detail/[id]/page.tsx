import DetailSection from './DetailSection';

export default function DetailPage({ params }: { params: { id: number } }) {
  const { id } = params;

  return (
    <div>
      <DetailSection poseId={id} />
    </div>
  );
}
