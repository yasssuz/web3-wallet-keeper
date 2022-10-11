// react or any other library related content
import { Global } from "@emotion/react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

// components
import BaseLayout from "./layouts/base-layout";
import Dashboard from "./pages/dashboard";
import { WalletsProvider } from "./contexts/wallets";

// services and utils
import { globalStyles } from "./utils/global";
import {
  generateAndStoreBaseNetworks,
  getStoredNetworks,
} from "./utils/network";

// images

// types

// interfaces

function App() {
  useEffect(() => {
    const currentTheme = localStorage.getItem("data-theme"),
      storedNetworks = getStoredNetworks();

    // handle theme
    document.body.setAttribute(
      "data-theme",
      (currentTheme === "dark" && "dark") ||
        (currentTheme === "light" && "light") ||
        "light"
    );
    if (currentTheme === "dark") {
      const themeSwitcherElement = document.getElementById(
        "themeSwitcher"
      ) as HTMLInputElement;

      if (themeSwitcherElement) themeSwitcherElement.checked = true;
    }

    // handle networks
    if (
      !storedNetworks || // check if exists
      storedNetworks?.[0]?.isInfura // check if deprecated version
    )
      generateAndStoreBaseNetworks();
  }, []);

  return (
    <>
      <Global styles={globalStyles} />
      <WalletsProvider>
        <Routes>
          <Route path='/dashboard' element={<BaseLayout />}>
            <Route index element={<Dashboard index />} />
            <Route path='/dashboard/:address' element={<Dashboard />} />
          </Route>
          {/* in case of different base path, redirect to dashboard path */}
          <Route path='*' element={<Navigate replace to='/dashboard' />} />
        </Routes>
      </WalletsProvider>
    </>
  );
}

export default App;
