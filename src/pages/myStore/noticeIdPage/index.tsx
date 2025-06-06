import Table from '../../myPage/_myPage/components/Table';
import { INITIAL_NOTICE } from '../values/initial-value';
import DetailNoticeCard from './components/DetailNoticeCard';
import NoticeDescriptionSection from './components/noticeDescriptionSection';

export default function NoticePage() {
  const text = '어쩌구 저쩌구 샬라샬라';

  return (
    <div className="flex w-full flex-col gap-20">
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-3xl-bold">내 가게</h1>
        <div>
          <DetailNoticeCard notice={INITIAL_NOTICE} name={''} address1={''} image={''} />
          <NoticeDescriptionSection description={text} />
        </div>
      </section>

      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-3xl-bold">신청자 목록</h1>
        <Table />
      </section>
    </div>
  );
}
