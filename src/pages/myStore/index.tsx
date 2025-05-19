import MyRecruits from './_myStorePage/components/MyRecruits';
import MyStore from './_myStorePage/components/MyStore';
import { INITIAL_STORE } from './_myStorePage/value/initiail-value';

export default function MyStorePage() {
  //내가게 정보 조회 후에 noStore , noRecruit처리

  return (
    <div className="flex flex-col gap-20">
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-3xl-bold">내 가게</h1>
        <MyStore store={INITIAL_STORE} />
      </section>
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-3xl-bold">내 공고</h1>
        <MyRecruits />
      </section>
    </div>
  );
}
