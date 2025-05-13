import clsx from 'clsx';
import Dropdown from '.';
import { defaultContainerStyle } from './style';
import NotificationIcon from '../../../assets/icons/NotificationIcon';
import Notification from './Notification';

/**
 * //@todo notifications 타입 수정
//hasNewNotification 의 처리 수정
 */

interface Props {
  notifications: string[];
  onMarkAsRead: (option: string) => void;
  hasNewNotification: boolean;

  containerWidth?: string;
  statement?: string;
}

export default function NotificationDropdown({
  notifications = [],
  hasNewNotification,
  statement = 'right-0 left-0',
  containerWidth = '368',
  ...props
}: Props) {
  const handleSelectOption = (notification: string) => {
    props.onMarkAsRead(notification);
  };

  return (
    <Dropdown trigger={<NotificationIcon hasNewNotification={hasNewNotification} />}>
      {({ close: _unused }) => (
        <div
          className={clsx(
            defaultContainerStyle,
            statement,
            'bg-red10 flex max-h-[419px] min-h-50 flex-col gap-4 px-5 py-6'
          )}
          style={{ width: `${containerWidth}px` }}
        >
          <h2 className="text-xl-bold">알림 {notifications.length}개</h2>
          <ul className="flex flex-col items-center gap-2 overflow-scroll">
            {notifications.length < 1 ? (
              <h4 className="text-gray50">아직 알림이 없습니다.</h4>
            ) : (
              <>
                {notifications.map((notification, idx) => (
                  <div
                    key={notification + idx}
                    onClick={() => {
                      handleSelectOption(notification);
                    }}
                  >
                    <Notification notification={notification} />
                  </div>
                ))}
              </>
            )}
          </ul>
        </div>
      )}
    </Dropdown>
  );
}
