import clsx from 'clsx';
import Dropdown from '..';
import { defaultContainerStyle } from '../style';
import Button from '../../Button';
import { ButtonText } from '../../../../constants/button';
import { useState } from 'react';
import InputField from '../../InputField';
import XIcon from '../../../../assets/icons/XIcon';
import DistrictsTags from './DistrictsTags';

interface Props {
  placement?: string;
  containerWidth?: string;
}
/**
 * @todo
 * 1. button 스타일 바꾸기
 */
export default function FilterDropdown({ containerWidth = '375', ...props }: Props) {
  const [filterCount, setFilterCount] = useState(0);
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);

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
            'flex h-full w-[375px] flex-col gap-6 px-3 py-6 md:max-h-211 md:w-[390px]'
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
              <div>서울시 어쩌구</div>
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
                onChange={() => {}}
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
                    onChange={() => {}}
                  />
                </div>
                <p>이상부터</p>
              </div>
            </section>
            <section className="flex w-full gap-2">
              <Button size="small" variant="secondary-red">
                {ButtonText.reset}
              </Button>
              <Button size="medium" variant="primary">
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
