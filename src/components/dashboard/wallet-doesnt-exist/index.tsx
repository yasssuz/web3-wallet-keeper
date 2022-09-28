// react or any other library related content

// styles

// components
import Heading from "../../../components/shared/typography/heading";
import Button from "../../shared/buttons";
import { ButtonsArea, Container } from "./styles";

// services and utils

// images

// types

// interfaces
interface WalletDoesntExistProps {
  setIsCreateWalletModalOpen(state: boolean): void;
  setIsImportWalletModalOpen(state: boolean): void;
}

function WalletDoesntExist({
  setIsCreateWalletModalOpen,
  setIsImportWalletModalOpen,
}: WalletDoesntExistProps) {
  return (
    <Container>
      <Heading as='h2' size='medium'>
        This wallet doesn't seem to be in your local database. You should try
        to:
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
  );
}

export default WalletDoesntExist;
