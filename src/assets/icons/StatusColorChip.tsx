interface Props {
  status: 'pending' | 'accepted' | 'rejected';
}

export default function StatusColorChip({ status }: Props) {
  let color;
  switch (status) {
    case 'pending':
      color = 'black';
      break;
    case 'accepted':
      color = 'blue20';
      break;
    case 'rejected':
      color = 'red40';
      break;
    default:
      break;
  }

  return (
    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2.5" cy="2.5" r="2.5" fill={`var(--color-${color})`} />
    </svg>
  );
}
