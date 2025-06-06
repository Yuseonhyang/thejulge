import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { UpsertMode } from '../../../types/upsertMode';
import { PATHS } from '../../../constants/path';
import NoticeUpsertForm from './components/NoticeUpsertForm';

export default function NoticeUpsertPage() {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const [searchParams] = useSearchParams();

  const mode: UpsertMode = pathname === PATHS.NOTICE_REGISTER ? 'register' : 'edit';
  const title = mode === 'register' ? '공고 등록' : '공고 수정';
  const shopId = searchParams.get('shopId');
  if (!shopId) return;
  return (
    <div className="flex w-full flex-col gap-6 md:gap-8">
      <div className="flex justify-between">
        <h1 className="text-xl-bold md:text-3xl-bold">{title}</h1>
        <img
          src="/src/public/icons/close.svg"
          className="size-6 md:size-8"
          alt="닫기버튼"
          onClick={() => navigate(PATHS.MYSTORE)}
        />
      </div>
      <NoticeUpsertForm mode={mode} shopId={shopId} />
    </div>
  );
}
