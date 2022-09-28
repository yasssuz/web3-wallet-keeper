// react or any other library related conten

// styles
import { Container } from "./styles";

// components

// services and utils
import { getStoredNetworks } from "../../../utils/network";
import NetworkData from "./network-data";

// images

// types

// interfaces

function WalletData() {
  return (
    <>
      <Container>
        {getStoredNetworks()?.map(network => (
          <NetworkData {...network} key={network.name} />
        ))}
      </Container>
    </>
  );
}

export default WalletData;
