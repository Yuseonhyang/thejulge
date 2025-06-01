import { useNavigate } from 'react-router-dom';
import Button from '../../../components/common/Button';
import { STORE_BUTTON } from '../../../constants/button';
import { PATHS } from '../../../constants/path';

export default function NoStore() {
  const navigate = useNavigate();

  return (
    <div className="border-gray20 flex w-full flex-col items-center justify-center gap-6 rounded-xl border-1 py-15">
      <p className="text-md-rg md:text-lg-rg">내 가게를 소개하고 공고도 등록해 보세요.</p>
      <div className="h-12 w-27 md:w-86.5">
        <Button
          variant="primary"
          size="parent-dependent"
          onClick={() => navigate(PATHS.STORE_REGISTER)}
        >
          {STORE_BUTTON.noStore}
        </Button>
      </div>
    </div>
  );
}
