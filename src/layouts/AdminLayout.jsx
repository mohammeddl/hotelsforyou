
import {  Outlet } from "react-router-dom";
import Nav from "../components/dashboard/Nav";

export default function AdminLayout() {
  return (
    <>
      <header className='flex items-center h-16 px-4 border-b shrink-0 md:px-6'>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
