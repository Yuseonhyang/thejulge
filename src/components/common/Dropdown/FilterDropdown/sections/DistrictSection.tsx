import { SEOUL_DISTRICTS } from '../value/seoul-districts-data';
import DistrictsTags from '../DistrictsTags';

interface Props {
  districts: string[];
  filterUpdate: (key: string, value: any) => void;
}
export default function DistrictSection({ districts, filterUpdate }: Props) {
  const deleteDistrictTag = (removingDistrict: string) => {
    const filteredDistricts = districts.filter((district) => district !== removingDistrict);
    filterUpdate('districts', filteredDistricts);
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
                filterUpdate('districts', district);
              }}
            >
              {district}
            </p>
          );
        })}
      </div>
      {districts.length > 0 && (
        <DistrictsTags selectedDistricts={districts} onDeleteTag={deleteDistrictTag} />
      )}
    </section>
  );
}
