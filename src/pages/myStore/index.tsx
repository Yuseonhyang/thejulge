import { INITIAL_STORE } from './values/initiail-value';
import { getUserInfo } from '../../hooks/use-Tanstack-query';
import NoStore from './components/NoStore';
import MyStore from './components/MyStore';
import NoRecruit from './components/NoRecruit';

export default function MyStorePage() {
  const data = getUserInfo();
  const shop = data?.item.shop;

  return (
    <div className="flex w-full flex-col gap-20">
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-3xl-bold">내 가게</h1>
        {!shop ? <NoStore /> : <MyStore store={INITIAL_STORE} />}
      </section>

      {shop && (
        <section className="flex flex-col gap-4 md:gap-8">
          <h1 className="text-3xl-bold">내 공고</h1>
          <NoRecruit />
        </section>
      )}
    </div>
  );
}
