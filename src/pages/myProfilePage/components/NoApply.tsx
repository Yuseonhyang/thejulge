import { useNavigate } from 'react-router-dom';
import Button from '../../../components/common/Button';
import { MYPAGE_BUTTON } from '../../../constants/button';
import { PATHS } from '../../../constants/path';

export default function NoApply() {
  const navigate = useNavigate();

  return (
    <div className="border-gray20 flex w-full flex-col items-center justify-center gap-6 rounded-xl border-1 py-15">
      <p className="text-md-rg md:text-lg-rg">아직 신청 내역이 없어요.</p>
      <div className="h-12 w-27 md:w-86.5">
        <Button variant="primary" size="parent-dependent" onClick={() => navigate(PATHS.NOTICES)}>
          {MYPAGE_BUTTON.noApply}
        </Button>
      </div>
    </div>
  );
}
