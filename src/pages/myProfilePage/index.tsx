import { useEffect, useState } from 'react';
import Table from '../../components/Table';
import axiosInstance from '../../lib/instance';
import decodeJWT from '../../utils/decode-jwt';
import ProfileCard from './components/ProfileCard';
import { ProfileType } from './types/profile';
import NoProfile from './components/NoProfile';
import { ApplicationsData } from '../noticeIdPage/types/applications';
import NoApply from './components/NoApply';

export default function MyProfilePage() {
  const [profile, setProfile] = useState<ProfileType>();
  const [applications, setApplications] = useState<ApplicationsData>();

  const { userId } = decodeJWT();

  const fetchProfile = async () => {
    if (!userId) return;
    const { data } = await axiosInstance(`users/${userId}`);
    setProfile(data.item);
  };

  const fetchApplications = async () => {
    if (!userId) return;
    const { data } = await axiosInstance(`/users/${userId}/applications`);
    setApplications(data);
  };

  useEffect(() => {
    fetchProfile();
    fetchApplications();
  }, []);

  return (
    <div className="flex flex-col gap-20">
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-3xl-bold">내 프로필</h1>
        {profile?.name ? <ProfileCard profile={profile} /> : <NoProfile />}
      </section>
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-3xl-bold">신청내역</h1>
        {applications && applications?.count > 0 ? <Table data={applications} /> : <NoApply />}
      </section>
    </div>
  );
}
