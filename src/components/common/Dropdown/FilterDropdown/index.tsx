import clsx from 'clsx';
import Dropdown from '..';
import { defaultContainerStyle } from '../style';
import Button from '../../Button';
import { FILTER_BUTTON } from '../../../../constants/button';
import { useState } from 'react';
import InputField from '../../InputField';
import XIcon from '../../../../assets/icons/XIcon';
import { SelectedFilterType } from './types';
import { INITIAL_FILTER } from './value/initial-value';
import DistrictSection from './sections/DistrictSection';
import StartsAtSection from './sections/StartsAtSection';
import HourlyPaySection from './sections/HourlyPaySection';

interface Props {
  placement?: string;
  containerWidth?: string;
  onSelectFilter: (filter: SelectedFilterType) => void;
  selectedFilter: SelectedFilterType;
}

export default function FilterDropdown({
  containerWidth = '375',
  onSelectFilter,
  selectedFilter,
  ...props
}: Props) {
  const [filterCount, setFilterCount] = useState(0);
  const [filter, setFilter] = useState<SelectedFilterType>(selectedFilter);

  const applyFilter = () => {
    onSelectFilter(filter);
    setFilterCount((prev) => ++prev);
  };

  const filterUpdate = (key: string, value: any) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilter = () => {
    setFilter(INITIAL_FILTER);
  };

  return (
    <Dropdown
      trigger={
        <div className="h-[30px] w-fit">
          <Button size="parent-dependent" variant="primary" className="px-3 py-1.5">
            {`${FILTER_BUTTON.filter} (${filterCount})`}
          </Button>
        </div>
      }
    >
      {({ close: _unused }) => (
        <div
          className={clsx(
            defaultContainerStyle,
            props.placement,
            'flex h-fit w-[375px] flex-col gap-6 bg-white px-3 py-6 md:max-h-211 md:w-[390px]'
          )}
          style={{ width: `${containerWidth}px` }}
        >
          <div className="flex w-full justify-between">
            <h2 className="text-xl-bold">{FILTER_BUTTON.filter}</h2>
            <XIcon width="24" height="24" className="bg-black" />
          </div>
          <div className="flex flex-col gap-6">
            <DistrictSection filter={filter} filterUpdate={filterUpdate} />
            <div className="bg-gray10 h-0.5 w-full" />
            <StartsAtSection filter={filter} filterUpdate={filterUpdate} />
            <div className="bg-gray10 h-0.5 w-full" />
            <HourlyPaySection filter={filter} filterUpdate={filterUpdate} />
            <section className="flex w-full items-center gap-2">
              <Button size="medium" variant="secondary-red" onClick={resetFilter}>
                {FILTER_BUTTON.reset}
              </Button>
              <Button size="medium" variant="primary" onClick={applyFilter}>
                {FILTER_BUTTON.apply}
              </Button>
            </section>
            <div />
          </div>
        </div>
      )}
    </Dropdown>
  );
}
