import clsx from 'clsx';
import Dropdown from '..';
import { defaultContainerStyle } from '../style';
import Button from '../../Button';
import { ButtonText } from '../../../../constants/button';
import { useState } from 'react';
import InputField from '../../InputField';
import XIcon from '../../../../assets/icons/XIcon';
import DistrictsTags from './DistrictsTags';
import { SEOUL_DISTRICTS } from './value/seoul-districts-data';
import { SelectedFilterType } from './types';

interface Props {
  placement?: string;
  containerWidth?: string;
  onSelectFilter: (filter: SelectedFilterType) => void;
  selectedFilter: SelectedFilterType;
}
/**
 * @todo
 * 1. button 스타일 바꾸기
 * 2. onSelectFilter 수정
 */

export default function FilterDropdown({
  containerWidth = '375',
  onSelectFilter,
  selectedFilter,
  ...props
}: Props) {
  const [filterCount, setFilterCount] = useState(0);
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);
  const [filter, setFilter] = useState<SelectedFilterType>(selectedFilter);

  const onSelectFilterUpdate = () => {
    onSelectFilter(filter);
    setFilterCount((prev) => ++prev);
  };

  const filterUpdate = (key: string, value: string) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Dropdown
      trigger={
        <div className="h-[30px] w-fit">
          <Button size="fill" variant="primary" className="px-3 py-1.5">
            `${ButtonText.filter} (${filterCount})`
          </Button>
        </div>
      }
    >
      {({ close: _unused }) => (
        <div
          className={clsx(
            defaultContainerStyle,
            props.placement,
            'flex h-full w-[375px] flex-col gap-6 bg-white px-3 py-6 md:max-h-211 md:w-[390px]'
          )}
          style={{ width: `${containerWidth}px` }}
        >
          <div className="flex w-full justify-between">
            <h2 className="text-xl-bold">{ButtonText.filter}</h2>
            <XIcon width="24" height="24" className="bg-black" />
          </div>
          <div className="flex flex-col gap-6">
            <section className="flex w-full flex-col gap-3">
              <label>위치</label>
              <div className="border-gray20 grid h-[258px] w-full grid-cols-2 gap-x-[61px] gap-y-5 overflow-scroll rounded-md border-1 px-7 py-5">
                {SEOUL_DISTRICTS.map((district) => {
                  return (
                    <p
                      key={district}
                      onClick={() => {
                        setSelectedDistricts((prev) => [...prev, district]);
                        filterUpdate('districts', district);
                      }}
                    >
                      {district}
                    </p>
                  );
                })}
              </div>
              {selectedDistricts.length > 1 && (
                <DistrictsTags selectedDistrict={selectedDistricts} />
              )}
            </section>
            <div className="bg-gray10 h-0.5 w-full" />
            <section className="flex w-full">
              <InputField
                inputType="input"
                label="시작일"
                placeholder="입력"
                gapSize="12"
                // value={}
                // name='startDate'
                onChange={() => {
                  filterUpdate('startsAtGte', 'value');
                }}
              />
            </section>
            <div className="bg-gray10 h-0.5 w-full" />
            <section className="flex w-full flex-col gap-3">
              <label>금액</label>
              <div className="flex items-center gap-3">
                <div className="w-[169px]">
                  <InputField
                    inputType="input"
                    placeholder="입력"
                    gapSize="12"
                    onChange={() => {
                      filterUpdate('hourlyPayGte', 'value');
                    }}
                  />
                </div>
                <p>이상부터</p>
              </div>
            </section>
            <section className="flex w-full items-center gap-2">
              <Button size="small" variant="secondary-red">
                {ButtonText.reset}
              </Button>
              <Button size="medium" variant="primary" onClick={onSelectFilterUpdate}>
                {ButtonText.apply}
              </Button>
            </section>
            <div />
          </div>
        </div>
      )}
    </Dropdown>
  );
}
