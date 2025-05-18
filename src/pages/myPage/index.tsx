import MyProfile from './_myPage/components/MyProfile';

export default function MyPage() {
  return (
    <div>
      <section>
        <h1 className="text-3xl-bold">내 프로필</h1>
        <MyProfile />
      </section>
      <section>
        <h1 className="text-3xl-bold">신청내역</h1>
      </section>
    </div>
  );
}
