import StatusColorChip from '../../../assets/icons/StatusColorChip';

interface Props {
  notification: string;
}

/**
 * @todo
 * notification 타입 수정
 * 안에 컨텐츠 내용 수정
 */
export default function Notification({ notification }: Props) {
  const time = '1분전';
  const status = 'pending';

  return (
    <div className="border-gray20 flex h-[105px] w-full min-w-82 flex-col gap-1 rounded-[5px] border-1 bg-white px-3 py-4">
      <StatusColorChip status={status} />
      <div className="text-sm-rg">{notification}</div>
      <p className="text-xs-rg text-gray40">{time}</p>
    </div>
  );
}
