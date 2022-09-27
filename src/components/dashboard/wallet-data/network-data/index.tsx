// react or any other library related conten
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

// styles
import { Circle, Container, NetworkDataTopArea } from "./styles";

// components
import Heading from "../../../shared/typography/heading";
import Text from "../../../shared/typography/text";

// services and utils
import { Network, WalletInfo } from "../../../../utils/types";
import { getWalletInfo } from "../../../../utils/wallet";

// images

// types

// interfaces

interface NetworkDataProps extends Network {}

function NetworkData({ name, endpoint, currency }: NetworkDataProps) {
  const [walletInfo, setWalletInfo] = useState<WalletInfo | null>(),
    [isLoading, setIsLoading] = useState<boolean>(false);

  const { address } = useParams();

  const fetchAddressNetworkData = useCallback(async () => {
    setIsLoading(true);
    const walletInfoData = await getWalletInfo(endpoint, address as string);
    setWalletInfo(walletInfoData);
    setIsLoading(false);
  }, [address, endpoint]);

  useEffect(() => {
    if (!address) return;
    fetchAddressNetworkData();
  }, [fetchAddressNetworkData, address]);

  return (
    <>
      <Container>
        <NetworkDataTopArea>
          <Circle
            color={"#" + ((Math.random() * 0xffffff) << 0).toString(16)}
          />
          <Text
            as='span'
            size='small'
            weight='bold'
            style={{ letterSpacing: "2.4px" }}
          >
            {name}
          </Text>
        </NetworkDataTopArea>
        {isLoading ? (
          <Heading as='h3' size='large'>
            Loading...
          </Heading>
        ) : (
          <>
            <Heading as='h3' size='large'>
              {walletInfo?.balance || 0} {currency}
            </Heading>
            <Heading as='h3' size='large'>
              {walletInfo?.txnCount || 0} Txns
            </Heading>
          </>
        )}
      </Container>
    </>
  );
}

export default NetworkData;
