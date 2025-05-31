import XIcon from '../../../../assets/icons/XIcon';

interface DistrictsTagsProps {
  selectedDistricts: string[];
  onDeleteTag: (removingDistrict: string) => void;
}

export default function DistrictsTags({ selectedDistricts, onDeleteTag }: DistrictsTagsProps) {
  return (
    <div className="flex w-full flex-wrap gap-2">
      {selectedDistricts.map((district) => {
        return (
          <DistrictTag
            district={district}
            key={district}
            onClick={() => {
              onDeleteTag(district);
            }}
          />
        );
      })}
    </div>
  );
}

interface DistrictsTagProps {
  district: string;
  onClick: (district: string) => void;
}

function DistrictTag({ district, onClick }: DistrictsTagProps) {
  return (
    <div
      className="bg-red10 flex w-fit gap-1 rounded-[20px] px-2.5 py-1.5"
      onClick={() => onClick(district)}
    >
      <p className="text-md-bold text-primary">{district}</p>
      <XIcon width="24" height="24" className="bg-black" />
    </div>
  );
}
