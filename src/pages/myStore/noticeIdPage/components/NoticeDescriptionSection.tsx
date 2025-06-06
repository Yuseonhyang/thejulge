interface Props {
  description: string;
}

export default function NoticeDescriptionSection({ description }: Props) {
  return (
    <section className="bg-gray10 flex h-fit flex-col gap-2 rounded-xl px-5 py-5 md:px-8 md:py-8">
      <h4 className="text-md-bold">공고 설명</h4>
      <p className="text-md-rg">{description}</p>
    </section>
  );
}
