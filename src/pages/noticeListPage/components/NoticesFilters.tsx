import FilterDropdown from '../../../components/common/Dropdown/FilterDropdown';
import { INITIAL_FILTER } from '../../../components/common/Dropdown/FilterDropdown/value/initial-value';
import SelectDropdown from '../../../components/common/Dropdown/SelectDropdown';

export default function NoticesFilters() {
  return (
    <div className="flex items-center gap-[10px]">
      <SelectDropdown options={[]} onSelect={() => {}} />
      <FilterDropdown onSelectFilter={() => {}} selectedFilter={INITIAL_FILTER} />
    </div>
  );
}
