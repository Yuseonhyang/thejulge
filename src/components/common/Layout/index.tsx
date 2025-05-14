import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function Layout() {
  return (
    <div className="flex h-dvh w-dvw items-center justify-center">
      <div className="w-full px-3 py-10 md:px-8 md:py-15 lg:max-w-[965px]">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
