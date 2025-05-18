import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/common/Button';
import { STORE_BUTTON } from '../../../../constants/button';

export default function NoRecruit() {
  const navigate = useNavigate();

  return (
    <div className="border-gray20 flex w-full flex-col items-center justify-center gap-6 rounded-xl border-1 py-15">
      <p className="text-md-rg md:text-lg-rg">공고를 등록해 보세요.</p>
      <div className="h-12 w-27 md:w-86.5">
        <Button
          size="parent-dependent"
          variant="primary"
          onClick={() => navigate('/mystore/store/register')}
        >
          {STORE_BUTTON.noRecruit}
        </Button>
      </div>
    </div>
  );
}
