import { SelectedFilterType } from '../types';
import InputField from '../../../InputField';

interface Props {
  filter: SelectedFilterType;
  filterUpdate: (key: string, value: any) => void;
}
export default function HourlyPaySection({ filter, filterUpdate }: Props) {
  return (
    <section className="flex w-full flex-col gap-3">
      <label>금액</label>
      <div className="flex items-center gap-3">
        <div className="w-[169px]">
          <InputField
            inputType="input"
            placeholder="입력"
            gapSize="12"
            value={filter.hourlyPayGte}
            type="number"
            step="100"
            min="0"
            name="hourlyPayGte"
            onChange={(e) => {
              filterUpdate('hourlyPayGte', e.currentTarget.value);
            }}
          />
        </div>
        <p>이상부터</p>
      </div>
    </section>
  );
}
