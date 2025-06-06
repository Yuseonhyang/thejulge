import clsx from 'clsx';
import Dropdown from '.';
import { defaultContainerStyle } from './style';
import NotificationIcon from '../../../assets/icons/NotificationIcon';
import Notification from './Notification';
import { NotificationType } from '../Layout/Header/types/notificationType';

/**
 * //@todo
//hasNewNotification 의 처리 수정
 */

interface Props {
  notifications: NotificationType[];
  onMarkAsRead: (notification: NotificationType) => void;
  hasNewNotification: boolean;

  containerWidth?: string;
  placement?: string;
}

export default function NotificationDropdown({
  notifications = [],
  hasNewNotification,
  placement = 'right-0 left-0',
  containerWidth = '368',
  ...props
}: Props) {
  const handleSelectOption = (notification: NotificationType) => {
    props.onMarkAsRead(notification);
  };

  return (
    <Dropdown trigger={<NotificationIcon hasNewNotification={hasNewNotification} />}>
      {({ close: _unused }) => (
        <div
          className={clsx(
            defaultContainerStyle,
            placement,
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
                {notifications.map((notification) => (
                  <div
                    key={notification.item.id}
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
