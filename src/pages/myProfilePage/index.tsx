import Table from '../../components/Table';
import ProfileCard from './components/ProfileCard';

export default function MyProfilePage() {
  return (
    <div className="flex flex-col gap-20">
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-3xl-bold">내 프로필</h1>
        <ProfileCard />
      </section>
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-3xl-bold">신청내역</h1>
        <Table data={undefined} />
      </section>
    </div>
  );
}
