import NoticeDescriptionSection from './components/noticeDescriptionSection';

export default function NoticePage() {
  const text = '어쩌구 저쩌구 샬라샬라';

  return (
    <div>
      <div>노티스 페이지</div>
      <NoticeDescriptionSection description={text} />
    </div>
  );
}
