// react or any other library related conten
import { useEffect } from "react";
import { useParams } from "react-router-dom";

// styles
import { Container } from "./styles";

// components

// services and utils
import { getStoredNetworks } from "../../../utils/network";
import { getStoredEncryptedWalletsAddress } from "../../../utils/wallet";
import NetworkData from "./network-data";

// images

// types

// interfaces

function WalletData() {
  const { address } = useParams();

  useEffect(() => {
    const storedAddresses = getStoredEncryptedWalletsAddress();

    if (!storedAddresses.find(storedAddress => storedAddress === address))
      return;
  }, [address]);

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
