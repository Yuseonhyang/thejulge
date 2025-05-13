import SelectDropdown from '../../components/common/Dropdown/SelectDropdown';

export default function Home() {
  const options = ['테스트', '테스트2', '테스트3'];
  return (
    <SelectDropdown optionsWidth="300" options={options} onSelect={() => {}} triggerWidth="500" />
  );
}
