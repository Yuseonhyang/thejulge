import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../constants/path';
import StoreUpsertForm from './components/StoreUpsertForm';

export default function StoreUpsertPage() {
  const navigate = useNavigate();
  const mode = 'register';

  return (
    <div className="flex w-full flex-col gap-6 md:gap-8">
      <div className="flex justify-between">
        <h1 className="text-xl-bold md:text-3xl-bold">가게 정보</h1>
        <img
          src="/src/public/icons/close.svg"
          className="size-6 md:size-8"
          alt="닫기버튼"
          onClick={() => navigate(PATHS.MYSTORE)}
        />
      </div>
      <StoreUpsertForm mode={mode} />
    </div>
  );
}
