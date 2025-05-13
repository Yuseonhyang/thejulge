import NotificationDropdown from '../../components/common/Dropdown/NotificationDropdown';
import SelectDropdown from '../../components/common/Dropdown/SelectDropdown';

export default function Home() {
  const options = ['테스트', '테스트2', '테스트3'];
  return (
    <div>
      <SelectDropdown
        containerWidth="300"
        options={options}
        onSelect={() => {}}
        triggerWidth="500"
      />
      <NotificationDropdown notifications={[]} hasNewNotification={true} onMarkAsRead={() => {}} />
    </div>
  );
}
