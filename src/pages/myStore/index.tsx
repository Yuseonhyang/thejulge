import NoShop from './components/NoStore';
import NoRecruit from './components/NoNotices';
import { useUserInfoQuery } from '../../hooks/queries/useUserInfoQuery';
import MyShop from './components/MyShop';
import { useEffect, useState } from 'react';
import axiosInstance from '../../lib/instance';
import { Notices } from './types/notice';
import { INITIAL_NOTICES } from './values/initial-value';
import MyNotices from './components/MyNotices';

export default function MyStorePage() {
  const [shopId, setShopId] = useState(0);
  const [notices, setNotices] = useState<Notices>(INITIAL_NOTICES);
  const { data, isLoading } = useUserInfoQuery();
  const shop = data?.data.item.shop.item;

  const fetchNotices = async () => {
    const { data } = await axiosInstance(`/shops/${shopId}/notices`);
    console.log(data);
    // setNotices(res);
  };

  useEffect(() => {
    if (shop) {
      setShopId(shop.id);
      fetchNotices();
    }
  }, [shop]);
  return (
    <div className="flex w-full flex-col gap-20">
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-3xl-bold">내 가게</h1>
        {!shop ? <NoShop /> : <MyShop shop={shop} />}
      </section>

      {shop && (
        <section className="flex flex-col gap-4 md:gap-8">
          <h1 className="text-3xl-bold">내 공고</h1>
          {notices.count < 1 ? <NoRecruit /> : <MyNotices />}
        </section>
      )}
    </div>
  );
}
