import NotificationDropdown from '../../components/common/Dropdown/NotificationDropdown';
import SelectDropdown from '../../components/common/Dropdown/SelectDropdown';
import useModalContext from '../../components/common/Modal/core/useModalContext';
import Modal from '../../components/common/Modal';
import ModalPortal from '../../components/common/Modal/core/ModalPortal';

export default function Home() {
  const options = ['테스트', '테스트2', '테스트3'];
  const { openModal } = useModalContext();

  return (
    <div>
      <SelectDropdown
        containerWidth="300"
        options={options}
        onSelect={() => {}}
        triggerWidth="500"
      />
      <NotificationDropdown notifications={[]} hasNewNotification={true} onMarkAsRead={() => {}} />

      <div>
        <div onClick={() => openModal('test')}>id로 열림 버튼</div>
        <ModalPortal modalId="test">
          <Modal modalId="test">
            <div>컨텐츠</div>
          </Modal>
        </ModalPortal>
      </div>
    </div>
  );
}
