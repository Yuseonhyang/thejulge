import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function Layout() {
  return (
    <div className="h-dvh w-dvw items-center justify-center">
      <Header />
      <div className="mt-[102px] w-full px-3 py-10 md:mt-[70px] md:px-8 md:py-15 lg:max-w-[965px]">
        <Outlet />
      </div>
    </div>
  );
}
