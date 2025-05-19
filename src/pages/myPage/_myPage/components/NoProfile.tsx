import { useNavigate } from 'react-router-dom';
import { MYPAGE_BUTTON } from '../../../../constants/button';
import Button from '../../../../components/common/Button';
import { PATHS } from '../../../../constants/path';

export default function NoProfile() {
  const navigate = useNavigate();

  return (
    <div className="border-gray20 flex w-full flex-col items-center justify-center gap-6 rounded-xl border-1 py-15">
      <p className="text-md-rg md:text-lg-rg">내 프로필을 등록하고 원하는 가게에 지원해 보세요.</p>
      <div className="h-12 w-27 md:w-86.5">
        <Button
          variant="primary"
          size="parent-dependent"
          onClick={() => navigate(PATHS.profileRegister)}
        >
          {MYPAGE_BUTTON.noProfile}
        </Button>
      </div>
    </div>
  );
}
