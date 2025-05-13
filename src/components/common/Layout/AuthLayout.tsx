import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="flex h-dvh w-dvw items-center justify-center">
      <div className="w-87.5">
        <Outlet />
      </div>
    </div>
  );
}
