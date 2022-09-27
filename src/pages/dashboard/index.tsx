// react or any other library related content
import { useState } from "react";

// styles
import { DashboardContainer } from "./styles";

// components

// services and utils

// images

// types

// interfaces
interface DashboardProps {
  index?: boolean;
}

function Dashboard({ index }: DashboardProps) {
  const [addressList, setaddressList] = useState<string[]>([]);

  return (
    <DashboardContainer
      isCentralized={!addressList?.length || !!index}
    ></DashboardContainer>
  );
}

export default Dashboard;
