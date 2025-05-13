import clsx from 'clsx';
import Dropdown from '.';
import { defaultOptionsStyle, defaultOptionStyle } from './style';
import NotificationIcon from '../../../assets/icons/NotificationIcon';

//@todo notifications 타입 수정
//hasNewNotification 의 처리 수정

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
  containerWidth = '400',
  ...props
}: Props) {
  const handleSelectOption = (notification: string) => {
    props.onMarkAsRead(notification);
  };

  return (
    <div>
      <Dropdown trigger={<NotificationIcon hasNewNotification={hasNewNotification} />}>
        {({ close: _unused }) => (
          <ul
            className={clsx(defaultOptionsStyle, statement)}
            style={{ width: `${containerWidth}px` }}
          >
            <h2>알림 {notifications.length}개</h2>
            {notifications.length < 1 ? (
              <div>알림이 없습니다.</div>
            ) : (
              <>
                {notifications.map((notification, idx) => (
                  <li
                    key={notification + idx}
                    onClick={() => {
                      handleSelectOption(notification);
                    }}
                  >
                    {notification}
                  </li>
                ))}
              </>
            )}
          </ul>
        )}
      </Dropdown>
    </div>
  );
}
