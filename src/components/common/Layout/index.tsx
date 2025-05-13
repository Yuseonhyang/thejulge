import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="flex h-dvh w-dvw items-center justify-center">
      <div className="w-full px-3 py-10 md:px-8 md:py-15 lg:max-w-[965px]">
        <Outlet />
      </div>
    </div>
  );
}
