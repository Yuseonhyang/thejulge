import { useState } from 'react';
import XIcon from '../../../../assets/icons/XIcon';

interface DistrictsTagsProps {
  selectedDistrict: string[];
}
export default function DistrictsTags({ selectedDistrict }: DistrictsTagsProps) {
  const [selectedDistricts, setSelectedDistricts] = useState(selectedDistrict);

  const deleteDistrictTag = (removingDistrict: string) => {
    const filteredDistricts = selectedDistricts.filter((district) => district !== removingDistrict);
    setSelectedDistricts(filteredDistricts);
  };
  return (
    <div className="flex w-full flex-wrap gap-2">
      {selectedDistricts.map((district) => {
        return (
          <DistrictTag
            district={district}
            key={district}
            onClick={() => {
              deleteDistrictTag(district);
            }}
          />
        );
      })}
    </div>
  );
}

interface DistrictsTagProps {
  district: string;
  onClick: () => void;
}
function DistrictTag({ district }: DistrictsTagProps) {
  return (
    <div className="bg-red10 flex w-fit gap-1 rounded-[20px] px-2.5 py-1.5">
      <p className="text-md-bold text-primary">{district}</p>
      <XIcon width="24" height="24" className="bg-black" />
    </div>
  );
}
