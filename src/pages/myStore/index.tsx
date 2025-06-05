import NoStore from './components/NoStore';
import MyStore from './components/MyStore';
import NoRecruit from './components/NoRecruit';
import { useUserInfoQuery } from '../../hooks/queries/useUserInfoQuery';

export default function MyStorePage() {
  const data = useUserInfoQuery();
  const shop = data?.item.shop;

  return (
    <div className="flex w-full flex-col gap-20">
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-3xl-bold">내 가게</h1>
        {!shop ? <NoStore /> : <MyStore store={shop} />}
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
