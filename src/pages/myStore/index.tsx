import MyStore from './_myStorePage/components/MyStore';
import { INITIAL_STORE } from './_myStorePage/value/initiail-value';

export default function MyStorePage() {
  //내가게 정보 조회 후에 nostore 처리

  return (
    <div>
      <h1 className="text-3xl-bold">내 가게</h1>
      <MyStore store={INITIAL_STORE} />
    </div>
  );
}
