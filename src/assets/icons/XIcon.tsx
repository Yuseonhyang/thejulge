interface Props {
  width: string;
  height: string;
  className: string;
}
export default function XIcon({ ...props }: Props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_16355_6276)">
        <path
          d="M18.3002 6.21022C17.9102 5.82022 17.2802 5.82022 16.8902 6.21022L12.0002 11.0902L7.11022 6.20021C6.72022 5.81021 6.09021 5.81021 5.70021 6.20021C5.31021 6.59021 5.31021 7.22022 5.70021 7.61022L10.5902 12.5002L5.70021 17.3902C5.31021 17.7802 5.31021 18.4102 5.70021 18.8002C6.09021 19.1902 6.72022 19.1902 7.11022 18.8002L12.0002 13.9102L16.8902 18.8002C17.2802 19.1902 17.9102 19.1902 18.3002 18.8002C18.6902 18.4102 18.6902 17.7802 18.3002 17.3902L13.4102 12.5002L18.3002 7.61022C18.6802 7.23022 18.6802 6.59022 18.3002 6.21022Z"
          fill="currentColor"
          className={props.className}
        />
      </g>
      <defs>
        <clipPath id="clip0_16355_6276">
          <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}
