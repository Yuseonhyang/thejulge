interface Props {
  width: string;
  height: string;
  className: string;
}
export default function WageComparedToPrev({ width, height, className }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 16.6675H7.50001V10.0009H3.46667L10 3.46753L16.5333 10.0009H12.5V16.6675Z"
        fill="currentColor"
        className={className}
      />
    </svg>
  );
}
