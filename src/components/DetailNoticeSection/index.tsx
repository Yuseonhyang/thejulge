import { INITIAL_NOTICE } from '../../pages/myStore/values/initial-value';
import DetailNoticeCard from './DetailNoticeCard';
import DetailNoticeDescription from './DetailNoticeDescription';

export default function DetailNoticeSection() {
  const text = '어쩌구 저쩌구 샬라샬라';

  return (
    <section className="flex flex-col gap-4 md:gap-8">
      <h1 className="text-3xl-bold">내 가게</h1>
      <div className="flex flex-col gap-3 md:gap-6">
        <DetailNoticeCard notice={INITIAL_NOTICE} storeDescription={''} address1={''} image={''} />
        <DetailNoticeDescription description={text} />
      </div>
    </section>
  );
}
