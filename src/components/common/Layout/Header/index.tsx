import { Link } from 'react-router-dom';
import InputField from '../../InputField';
import NotificationDropdown from '../../Dropdown/NotificationDropdown';
import { PLACEHOLDERS } from '../../../../constants/placeholders';
import { PATHS } from '../../../../constants/path';
import { UserType } from '../../../../types/userType';
import { useEffect, useState } from 'react';
import getUserInfo from '../../../../api/auth';
import decodeJWT from '../../../../utils/decode-jwt';
import useHeaderHandler from '../../../../hooks/useSearchBar';
import axiosInstance from '../../../../lib/instance';
import { NotificationType } from './types/notificationType';

export function Header() {
  const [userType, setUserType] = useState<UserType>('employee');
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const { handleChangeKeyword, keyword, handleSubmitKeyword } = useHeaderHandler();

  const mypageLinkText = userType === 'employee' ? '내 프로필' : '내가게';
  const mypageLink = userType === 'employee' ? PATHS.MYPROFILE : PATHS.MYSTORE;
  const { userId } = decodeJWT();

  const fetchUser = async () => {
    const userInfo = await getUserInfo(userId);
    setUserType(userInfo.type);
  };

  const fetchNotification = async () => {
    const { data } = await axiosInstance(`/users/${userId}/alerts`);
    setNotifications(data.items);
  };

  useEffect(() => {
    fetchUser();
    fetchNotification();
  }, [userId]);

  return (
    <div className="fixed top-0 left-0 flex h-[102px] w-full flex-col items-center justify-center gap-4 bg-white px-5 py-2.5 md:h-[70px] md:px-8 md:py-[15px]">
      <div className="flex h-full w-full max-w-255 items-center justify-between">
        <div className="flex items-center gap-8.75 lg:gap-10">
          <img
            src="/src/public/images/logo.png"
            alt="thejulge 로고"
            className="h-3.75 w-20.5 lg:h-5 lg:w-27.25"
          />
          <div className="hidden h-10 w-86 md:block">
            <InputField
              inputType="search"
              onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                handleChangeKeyword(e.target.value)
              }
              onSubmit={handleSubmitKeyword}
              value={keyword}
              leftSlot={<img src="src/public/icons/search-icon.svg" />}
              placeholder={PLACEHOLDERS.search}
              id="search"
              className="placeholder:text-gray50"
            />
          </div>
        </div>
        <div className="text-lg-bold flex items-center gap-4 md:gap-3 lg:gap-10">
          <Link to={mypageLink} className="w-fit">
            <p className="text-md-bold md:text-lg-bold">{mypageLinkText}</p>
          </Link>
          <p className="text-md-bold md:text-lg-bold w-fit">로그아웃</p>
          <NotificationDropdown
            notifications={notifications}
            hasNewNotification={false}
            onMarkAsRead={() => {}}
            placement="right-0"
          />
        </div>
      </div>
      <div className="block h-10 w-full md:hidden">
        <InputField
          inputType="search"
          onChange={() => {}}
          leftSlot={<img src="src/public/icons/search-icon.svg" />}
          placeholder={PLACEHOLDERS.search}
        />
      </div>
    </div>
  );
}
