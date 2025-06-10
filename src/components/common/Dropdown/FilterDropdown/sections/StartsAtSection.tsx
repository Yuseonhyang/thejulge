import { SelectedFilterType } from '../types';
import InputField from '../../../InputField';

interface Props {
  filter: SelectedFilterType;
  filterUpdate: (key: string, value: any) => void;
}
export default function StartsAtSection({ filter, filterUpdate }: Props) {
  return (
    <section className="flex w-full">
      <InputField
        inputType="input"
        label="시작일"
        placeholder="입력"
        gapSize="12"
        value={String(filter.startsAtGte)}
        type="date"
        name="startsAtGte"
        onChange={(e) => {
          filterUpdate('startsAtGte', e.currentTarget.value);
        }}
      />
    </section>
  );
}
