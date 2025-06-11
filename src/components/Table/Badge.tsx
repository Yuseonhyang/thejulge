import clsx from 'clsx';
import { ApplicationStatus } from '../../pages/noticeIdPage/types/applications';

interface Props {
  status: ApplicationStatus;
}
export default function Badge({ status }: Props) {
  const text = status === 'accepted' ? '승인 완료' : '대기중';
  const bgColor = status === 'accepted' ? 'bg-blue10' : 'bg-green10';
  const textColor = status === 'accepted' ? 'text-blue20' : 'text-green20';

  return (
    <div
      className={clsx(
        'md:text-md-bold text-xs-rg w-fit rounded-[20px] px-2.5 py-1.5',
        bgColor,
        textColor
      )}
    >
      {text}
    </div>
  );
}
