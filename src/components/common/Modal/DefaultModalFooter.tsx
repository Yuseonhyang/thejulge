import Button from '../Button';

interface Props {
  defaultFooterText: string;
}
export default function DefaultModalFooter({ defaultFooterText = '확인' }: Props) {
  const modalClose = () => {
    //모달 닫힘 구현
  };

  return (
    <Button size="large" variant="primary" onClick={modalClose}>
      {defaultFooterText}
    </Button>
  );
}
