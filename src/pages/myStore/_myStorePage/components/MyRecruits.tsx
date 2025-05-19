import RecruitCard from './RecruitCard';

export default function MyRecruits() {
  return (
    <div className="grid h-full w-full grid-cols-2 gap-6 rounded-xl lg:grid-cols-3">
      <RecruitCard />
      <RecruitCard />
      <RecruitCard />
      <RecruitCard />
      <RecruitCard />
    </div>
  );
}
