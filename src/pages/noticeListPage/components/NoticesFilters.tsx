import FilterDropdown from '../../../components/common/Dropdown/FilterDropdown';
import { SelectedFilterType } from '../../../components/common/Dropdown/FilterDropdown/types';
import { INITIAL_FILTER } from '../../../components/common/Dropdown/FilterDropdown/value/initial-value';
import SortDropdown from '../../../components/common/Dropdown/SortDropdown';
import { SORT_OPTIONS } from '../../../constants/dropdown';

interface Props {
  onSelectSort: (sortOption: string) => void;
  onSelectFilter: (filters: SelectedFilterType) => void;
}
export default function NoticesFilters({ onSelectSort, onSelectFilter }: Props) {
  return (
    <div className="flex items-center gap-[10px]">
      <SortDropdown
        options={SORT_OPTIONS}
        onSelect={(sortOption: string) => {
          onSelectSort(sortOption);
        }}
        placement="top-[calc(100%+8px)]"
        currentOption={SORT_OPTIONS[0].label}
      />

      <FilterDropdown
        onSelectFilter={(filters) => {
          onSelectFilter(filters);
        }}
        selectedFilter={INITIAL_FILTER}
        placement="top-[calc(100%+8px)] right-0"
      />
    </div>
  );
}
