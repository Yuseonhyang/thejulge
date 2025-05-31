import { useState } from 'react';
import { SEOUL_DISTRICTS } from '../value/seoul-districts-data';
import { SelectedFilterType } from '../types';
import DistrictsTags from '../DistrictsTags';

interface Props {
  filter: SelectedFilterType;
  filterUpdate: (key: string, value: any) => void;
}
export default function DistrictSection({ filter, filterUpdate }: Props) {
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>(filter.districts);

  const deleteDistrictTag = (removingDistrict: string) => {
    const filteredDistricts = selectedDistricts.filter((district) => district !== removingDistrict);
    setSelectedDistricts(filteredDistricts);
  };
  return (
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
        <DistrictsTags selectedDistricts={selectedDistricts} onDeleteTag={deleteDistrictTag} />
      )}
    </section>
  );
}
