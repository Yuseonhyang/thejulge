import NoShop from './components/NoStore';
import { useUserInfoQuery } from '../../hooks/queries/useUserInfoQuery';
import MyShop from './components/MyShop';
import { useEffect, useState } from 'react';
import axiosInstance from '../../lib/instance';
import { Notices } from './types/notice';
import { INITIAL_NOTICES } from './values/initial-value';
import MyNotices from './components/MyNotices';
import NoNotices from './components/NoNotices';
import { Shop } from './types/store';

export default function MyStorePage() {
  const [notices, setNotices] = useState<Notices>(INITIAL_NOTICES);
  const [shopId, setShopId] = useState('');
  const [shop, setShop] = useState<Shop>();
  const { data, isLoading } = useUserInfoQuery();

  const fetchNotices = async (shopId: string) => {
    if (!shopId) return;
    const { data } = await axiosInstance(`/shops/${shopId}/notices`);
    setNotices(data);
  };

  useEffect(() => {
    if (data) {
      setShop(data?.item.shop.item);
      fetchNotices(data?.item.shop.item.id);
      setShopId(data?.item.shop.item.id);
    }
  }, [data]);

  return (
    <div className="flex w-full flex-col gap-20">
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-3xl-bold">내 가게</h1>
        {!shop ? <NoShop /> : <MyShop shop={shop} />}
      </section>

      {shop && (
        <section className="flex flex-col gap-4 md:gap-8">
          <h1 className="text-3xl-bold">내 공고</h1>
          {notices.count < 1 ? (
            <NoNotices shopId={shopId} />
          ) : (
            <MyNotices notices={notices} shop={shop} />
          )}
        </section>
      )}
    </div>
  );
}
