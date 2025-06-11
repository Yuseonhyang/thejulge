import InputField from '../../../InputField';

interface Props {
  hourlyPayGte: number;
  filterUpdate: (key: string, value: any) => void;
}
export default function HourlyPaySection({ hourlyPayGte, filterUpdate }: Props) {
  return (
    <section className="flex w-full items-center gap-3">
      <InputField
        inputType="input"
        placeholder="입력"
        gapSize="12"
        value={hourlyPayGte}
        type="number"
        step="100"
        min="0"
        name="hourlyPayGte"
        onChange={(e) => {
          filterUpdate('hourlyPayGte', e.currentTarget.value);
        }}
        label="금액"
        rightSlot={<span className="text-gray30">원 이상부터</span>}
      />
    </section>
  );
}
