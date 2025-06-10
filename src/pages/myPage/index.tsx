import Table from '../../components/Table';
import MyProfile from './_myPage/components/MyProfile';

export default function MyPage() {
  return (
    <div className="flex flex-col gap-20">
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-3xl-bold">내 프로필</h1>
        <MyProfile />
      </section>
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-3xl-bold">신청내역</h1>
        <Table data={undefined} />
      </section>
    </div>
  );
}
