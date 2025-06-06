import DetailNoticeSection from '../../components/DetailNoticeSection';
import Table from '../../components/Table';

export default function NoticePage() {
  return (
    <div className="flex w-full flex-col gap-20">
      <DetailNoticeSection />
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-3xl-bold">신청자 목록</h1>
        <Table />
      </section>
    </div>
  );
}
