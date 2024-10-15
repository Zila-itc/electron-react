import { Outlet } from '@umijs/max';

export default function Layout() {
  return (
    <div className='p-10'>
      <Outlet />
    </div>
  );
}
