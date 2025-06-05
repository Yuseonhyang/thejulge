import NoShop from './components/NoStore';
import NoRecruit from './components/NoRecruit';
import { useUserInfoQuery } from '../../hooks/queries/useUserInfoQuery';
import MyShop from './components/MyShop';

export default function MyStorePage() {
  const { data, isLoading } = useUserInfoQuery();
  const shop = data?.data.item.shop.item;

  return (
    <div className="flex w-full flex-col gap-20">
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-3xl-bold">내 가게</h1>
        {!shop ? <NoShop /> : <MyShop shop={shop} />}
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
