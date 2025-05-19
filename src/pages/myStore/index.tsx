import MyRecruits from './_myStorePage/components/MyRecruits';
import MyStore from './_myStorePage/components/MyStore';
import { INITIAL_STORE } from './_myStorePage/value/initiail-value';
import { getUserInfo } from '../../hooks/use-Tanstack-query';
import NoStore from './_myStorePage/components/NoStore';
import NoRecruit from './_myStorePage/components/NoRecruit';

export default function MyStorePage() {
  const data = getUserInfo();
  const shop = data?.item.shop;

  return (
    <div className="flex flex-col gap-20">
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-3xl-bold">내 가게</h1>
        {!shop ? <NoStore /> : <MyStore store={INITIAL_STORE} />}
      </section>
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-3xl-bold">내 공고</h1>
        {!shop ? <NoRecruit /> : <MyRecruits />}
      </section>
    </div>
  );
}
