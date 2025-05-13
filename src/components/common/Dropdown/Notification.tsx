import StatusColorChip from '../../../assets/icons/StatusColorChip';

interface Props {
  notification: string;
}

/**
 * @todo
 * notification 타입 수정
 */
export default function Notification({ notification }: Props) {
  const time = '1분전';
  const status = 'pending';

  return (
    <div className="flex h-[105px] w-full flex-col gap-1 px-3 py-4">
      <StatusColorChip status={status} />
      <div>{notification}</div>
      <p>{time}</p>
    </div>
  );
}
