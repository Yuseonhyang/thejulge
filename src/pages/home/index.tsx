// import NotificationDropdown from '../../components/common/Dropdown/NotificationDropdown';
// import SelectDropdown from '../../components/common/Dropdown/SelectDropdown';
// import useModalContext from '../../components/common/Modal/core/useModalContext';
// import Modal from '../../components/common/Modal';
// import ModalPortal from '../../components/common/Modal/core/ModalPortal';
import InputField from '../../components/common/InputField';

export default function Home() {
  // const options = ['테스트', '테스트2', '테스트3'];
  // const { openModal } = useModalContext();

  return (
    <div>
      <InputField inputType="search" onChange={() => {}} leftSlot={<div>슬롯</div>} />
    </div>
  );
}
