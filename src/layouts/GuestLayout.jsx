import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function GuestLayout() {
  return (
    <>
      <header >
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
