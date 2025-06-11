import InputField from '../../../InputField';

interface Props {
  startsAtGte: Date;
  filterUpdate: (key: string, value: any) => void;
}
export default function StartsAtSection({ startsAtGte, filterUpdate }: Props) {
  return (
    <section className="flex w-full">
      <InputField
        inputType="input"
        label="시작일"
        placeholder="입력"
        gapSize="12"
        value={String(startsAtGte)}
        type="date"
        name="startsAtGte"
        onChange={(e) => {
          filterUpdate('startsAtGte', e.currentTarget.value);
        }}
      />
    </section>
  );
}
