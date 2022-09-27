// react or any other library related content
import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";

// styles

// components
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

// services and utils

// images

// types

// interfaces

function BaseLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const { address } = useParams();

  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} currentAddress={address} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        currentAddress={address}
      />
      <Outlet />
    </>
  );
}

export default BaseLayout;
