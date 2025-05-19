// import useModalContext from '../../components/common/Modal/core/useModalContext';
// import Modal from '../../components/common/Modal';
// import ModalPortal from '../../components/common/Modal/core/ModalPortal';

import FilterDropdown from '../../components/common/Dropdown/FilterDropdown';
import { INITIAL_FILTER } from '../../components/common/Dropdown/FilterDropdown/value/initial-value';

export default function Home() {
  // const options = ['테스트', '테스트2', '테스트3'];
  // const { openModal } = useModalContext();

  return (
    <div>
      <FilterDropdown onSelectFilter={() => {}} selectedFilter={INITIAL_FILTER} />
    </div>
  );
}
