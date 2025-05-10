import InputField from '../../components/common/InputField';

export default function Home() {
  return (
    <div className="w-full">
      <div className="text-red40">페이지</div>
      <InputField label="라벨" inputType="input" placeholder="플레이스 홀더" onChange={() => {}} />
      <InputField
        label="라벨"
        inputType="textarea"
        placeholder="플레이스 홀더"
        onChange={() => {}}
      />
      <InputField label="라벨" inputType="image" placeholder="플레이스 홀더" onChange={() => {}} />
    </div>
  );
}
