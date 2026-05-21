
import { Outlet } from "react-router";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";

export default function DefaultLayout() {

  return (
    <>
      <AppHeader />

      <main>
        <Outlet />
      </main>

      <AppFooter />
    </>
  )
}