import { useEffect, useState } from 'react';
import { getApplications } from '../../api/applications';
import DetailNoticeSection from '../../components/DetailNoticeSection';
import Table from '../../components/Table';
import { useLocation } from 'react-router-dom';
import { ApplicationsData } from './types/applications';

export default function NoticePage() {
  const [applications, setApplications] = useState<ApplicationsData>();
  const segments = useLocation().pathname.split('/');
  const noticeId = segments[2];
  const shopId = 'a35f13a5-588c-4603-a4ce-5b624a39f608';

  const fetchApplications = async () => {
    const data = await getApplications(shopId, noticeId);
    setApplications(data);
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className="flex w-full flex-col gap-20">
      <DetailNoticeSection />
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-3xl-bold">신청자 목록</h1>
        <Table data={applications} />
      </section>
    </div>
  );
}
