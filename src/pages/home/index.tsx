import Modal from '../../components/common/Modal';
import ModalPortal from '../../components/common/Modal/core/modalPortal';
import useModalContext from '../../components/common/Modal/core/useModalContext';

export default function Home() {
  const { openModal } = useModalContext();
  return (
    <div>
      <div onClick={() => openModal('test')}>id로 열림 버튼</div>
      <ModalPortal modalId="test">
        <Modal modalId="test">
          <div>컨텐츠</div>
        </Modal>
      </ModalPortal>
    </div>
  );
}
