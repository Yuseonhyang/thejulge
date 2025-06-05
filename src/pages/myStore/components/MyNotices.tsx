import NoticesCard from './NoticesCard';

export default function MyNotices({}) {
  return (
    <div className="grid h-full w-full grid-cols-2 gap-6 rounded-xl lg:grid-cols-3">
      <NoticesCard />
      <NoticesCard />
      <NoticesCard /> <NoticesCard />
    </div>
  );
}
