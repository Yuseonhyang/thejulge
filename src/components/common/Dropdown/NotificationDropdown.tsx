import clsx from 'clsx';
import Dropdown from '.';
import { defaultContainerStyle } from './style';
import NotificationIcon from '../../../assets/icons/NotificationIcon';
import Notification from './Notification';
import { NotificationsType } from '../Layout/Header/types/notificationType';

/**
 * //@todo
//notification 읽음처리 수정 - 지금은 알림이 없음
 */

interface Props {
  notifications: NotificationsType | undefined;
}

export default function NotificationDropdown({ notifications }: Props) {
  if (!notifications) return;

  const { count, hasNext, items } = notifications;

  const onMarkAsReadNotification = async (notificationId: string) => {
    await onMarkAsReadNotification(notificationId);
  };

  return (
    <Dropdown trigger={<NotificationIcon hasNewNotification={hasNext} />}>
      {({ close: _unused }) => (
        <div
          className={clsx(
            defaultContainerStyle,
            'right-0 flex max-h-[419px] w-85 flex-col gap-4 bg-white px-5 py-6 md:w-92'
          )}
        >
          <h2 className="text-xl-bold">알림 {count}개</h2>
          <ul className="flex flex-col items-center gap-2 overflow-scroll">
            {hasNext ? (
              <h4 className="text-gray50">아직 알림이 없습니다.</h4>
            ) : (
              <>
                {items.map((notification) => (
                  <div
                    key={notification.item.id}
                    onClick={() => {
                      onMarkAsReadNotification(notification.item.id);
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
