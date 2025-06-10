interface Props {
  hasNewNotification: boolean;
}
export default function NotificationIcon({ hasNewNotification }: Props) {
  const color = hasNewNotification ? 'primary' : 'black';

  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_323_44474)">
        <path
          d="M15.525 6.45C17.1655 6.45 18.5 5.1155 18.5 3.475C18.5 1.8345 17.1655 0.5 15.525 0.5C13.8845 0.5 12.55 1.8345 12.55 3.475C12.55 5.1155 13.8845 6.45 15.525 6.45ZM16.8 13.25V7.9715C16.375 8.0905 15.95 8.15 15.525 8.15C15.3805 8.15 15.2445 8.15 15.1 8.15V13.25C15.1 14.661 13.961 15.8 12.55 15.8H5.75C4.339 15.8 3.2 14.661 3.2 13.25V6.45C3.2 5.039 4.339 3.9 5.75 3.9H10.85C10.85 3.764 10.85 3.6195 10.85 3.475C10.85 3.05 10.9095 2.625 11.0285 2.2H5.75C3.404 2.2 1.5 4.104 1.5 6.45V13.25C1.5 15.596 3.404 17.5 5.75 17.5H12.55C14.896 17.5 16.8 15.596 16.8 13.25Z"
          fill="black"
        />
        <path
          d="M18.4988 3.475C18.4988 5.1155 17.1643 6.45 15.5238 6.45C13.8833 6.45 12.5488 5.1155 12.5488 3.475C12.5488 1.8345 13.8833 0.5 15.5238 0.5C17.1643 0.5 18.4988 1.8345 18.4988 3.475Z"
          fill={`var(--color-${color})`}
        />
      </g>
      <defs>
        <clipPath id="clip0_323_44474">
          <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}
