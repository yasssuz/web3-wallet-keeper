// react or any other library related content

// styles
import { Container, ButtonsArea } from "./styles";

// components
import Button from "../../shared/buttons";
import Heading from "../../shared/typography/heading";

// services and utils

// images

// types

// interfaces
interface HasNoWalletsProps {
  setIsCreateWalletModalOpen(state: boolean): void;
  setIsImportWalletModalOpen(state: boolean): void;
}

function HasNoWallets({
  setIsCreateWalletModalOpen,
  setIsImportWalletModalOpen,
}: HasNoWalletsProps) {
  return (
    <>
      <Container>
        <Heading as='h2' size='medium'>
          This board is empty. Create or import a wallet to get started.
        </Heading>
        <ButtonsArea>
          <Button
            variant='primary'
            size='large'
            width='fit-content'
            onClick={() => setIsCreateWalletModalOpen(true)}
          >
            + Create Wallet
          </Button>
          <Button
            variant='secondary'
            size='large'
            width='fit-content'
            onClick={() => setIsImportWalletModalOpen(true)}
          >
            + Import Wallet
          </Button>
        </ButtonsArea>
      </Container>
    </>
  );
}

export default HasNoWallets;
