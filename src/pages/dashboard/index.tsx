// react or any other library related content
import { useContext, useState } from "react";

// styles
import { DashboardContainer } from "./styles";

// components
import { WalletsContext } from "../../contexts/wallets";
import HasNoWallets from "../../components/dashboard/has-no-wallets";
import Modal from "../../components/shared/modal";
import CreateOrImportWalletModalState from "../../components/modal-states/create-import-wallet";
import Heading from "../../components/shared/typography/heading";
import WalletData from "../../components/dashboard/wallet-data";

// services and utils

// images

// types

// interfaces
interface DashboardProps {
  index?: boolean;
}

function Dashboard({ index }: DashboardProps) {
  // I lifted this state up because if it was inside wallet, after a wallet creation the
  // create or import wallet popup would be removed from the DOM, as now there is in fact
  // a wallet that has been created. A context wasn't necessary in this case, as performance
  // will not be an issue for a component that cheap to render
  const [isCreateWalletModalOpen, setIsCreateWalletModalOpen] =
      useState<boolean>(false),
    [isImportWalletModalOpen, setIsImportWalletModalOpen] =
      useState<boolean>(false);

  const { storedAddressesList } = useContext(WalletsContext);

  return (
    <>
      <DashboardContainer
        isCentralized={!storedAddressesList?.length || !!index}
      >
        {(index && !storedAddressesList?.length && (
          <HasNoWallets
            setIsCreateWalletModalOpen={setIsCreateWalletModalOpen}
            setIsImportWalletModalOpen={setIsImportWalletModalOpen}
          />
        )) ||
          (index && (
            <Heading as='h2' size='medium'>
              You already created a few wallets! Open the sidebar to check them
              out
            </Heading>
          )) || <WalletData />}
      </DashboardContainer>
      <Modal isOpen={isCreateWalletModalOpen}>
        <CreateOrImportWalletModalState
          create
          setIsModalOpen={setIsCreateWalletModalOpen}
        />
      </Modal>
      <Modal isOpen={isImportWalletModalOpen}>
        <CreateOrImportWalletModalState
          import
          setIsModalOpen={setIsImportWalletModalOpen}
        />
      </Modal>
    </>
  );
}

export default Dashboard;
