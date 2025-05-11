import Dropdown from '../../components/common/Dropdown';

export default function Home() {
  return (
    <div>
      <Dropdown trigger={<div>이거</div>}>
        {({ close }) => <div className="w-full">열렸나</div>}
      </Dropdown>
    </div>
  );
}
