import { useNavigate } from 'react-router-dom';
import Button from '../../../components/common/Button';

export default function MyStore() {
  const navigate = useNavigate();

  return (
    <div className="border-gray20 flex w-full flex-col items-center justify-center gap-6 rounded-xl border-1 py-15">
      <p className="text-md-rg md:text-lg-rg">내 가게를 소개하고 공고도 등록해 보세요.</p>
      <div className="w-27 md:w-86.5">
        <Button
          size="parent-dependent"
          variant="primary"
          onClick={() => navigate('/mystore/store/register')}
        >
          가게 등록하기
        </Button>
      </div>
    </div>
  );
}
