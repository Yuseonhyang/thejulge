import { useNavigate } from 'react-router-dom';
import Button from '../../../components/common/Button';
import { SHOP_BUTTON } from '../../../constants/button';
import { PATHS } from '../../../constants/path';
import { useEffect, useState } from 'react';

export default function NoNotices({ shopId }: { shopId: number }) {
  const [id, setId] = useState(shopId);
  const navigate = useNavigate();

  useEffect(() => {
    if (shopId) setId(shopId);
  }, [shopId]);

  if (!id) return;
  return (
    <div className="border-gray20 flex w-full flex-col items-center justify-center gap-6 rounded-xl border-1 py-15">
      <p className="text-md-rg md:text-lg-rg">공고를 등록해 보세요.</p>
      <div className="h-12 w-27 md:w-86.5">
        <Button
          size="parent-dependent"
          variant="primary"
          onClick={() => navigate(`${PATHS.NOTICE_REGISTER}?shopId=${id}`)}
        >
          {SHOP_BUTTON.noNotices}
        </Button>
      </div>
    </div>
  );
}
