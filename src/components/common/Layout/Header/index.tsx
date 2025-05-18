import { Link } from 'react-router-dom';
import InputField from '../../InputField';
import NotificationDropdown from '../../Dropdown/NotificationDropdown';
import { PLACEHOLDERS } from '../../../../constants/placeholders';

export function Header() {
  //받아오는 데이터에 따라 텍스트가 내가게 or 내 프로필

  return (
    <div className="fixed top-0 left-0 flex h-[102px] w-full flex-col items-center justify-center gap-4 bg-white px-5 py-2.5 md:h-[70px] md:px-8 md:py-[15px]">
      <div className="flex h-full w-full max-w-255 items-center justify-between">
        <div className="flex items-center gap-8.75 lg:gap-10">
          <img
            src="src/public/images/logo.png"
            alt="thejulge 로고"
            className="h-3.75 w-20.5 lg:h-5 lg:w-27.25"
          />
          <div className="hidden h-10 w-86 md:block">
            <InputField
              inputType="search"
              onChange={() => {}}
              leftSlot={<img src="src/public/icons/search-icon.svg" />}
              placeholder={PLACEHOLDERS.search}
            />
          </div>
        </div>
        <div className="text-lg-bold flex items-center gap-4 md:gap-3 lg:gap-10">
          <Link to={'/'}>텍스트</Link>
          <p>로그아웃</p>
          <NotificationDropdown
            notifications={['']}
            hasNewNotification={false}
            onMarkAsRead={() => {}}
            statement="right-0"
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
