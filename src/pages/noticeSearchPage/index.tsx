import Pagination from '../../components/Table/Pagination';

export default function NoticeSearchPage() {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-3xl-bold">
          <span className="text-primary">''</span>에 대한 공고 목록
        </h1>
        <div>필터 들어갈 부분</div>
      </div>
      <section className="flex flex-col gap-4 md:gap-8">
        <div className="grid grid-cols-2 lg:grid-cols-3">{}</div>
        <Pagination count={1} hasNext={true} />
      </section>
    </div>
  );
}
