// Import from React
import { useContext } from "react";

// Import Hook Context From srs
import { useGlobal } from "../contexts/GlobalContext";

import { Outlet } from "react-router";

import AppFooter from "../components/AppFooter/AppFooter";
import AppHeader from "../components/AppHeader/AppHeader";

export default function DefaultLayout() {

  // Destructuring object from useGlobal
  const { theme, toggleTheme } = useGlobal();

  return (
    <>
      <div className="default-body" data-bs-theme={theme}>
        <AppHeader />

        <main className="bg-body text-body">
          <Outlet />
        </main>

        <AppFooter />
      </div>
    </>
  )
}