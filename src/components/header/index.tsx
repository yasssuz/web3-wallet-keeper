// react or any other library related content
import { useState } from "react";

// styles
import { HeaderContainer, InteractionArea, LogoArea } from "./styles";

// components
import CreateOrImportWalletModalState from "../modal-states/create-import-wallet";
import RecoverWallet from "../modal-states/recover-wallet";
import Button from "../shared/buttons";
import Modal from "../shared/modal";
import Heading from "../shared/typography/heading";

// services and utils

// images

// types

// interfaces
interface HeaderProps {
  isSidebarOpen: boolean;
  currentAddress: string | undefined;
}

function Header({ isSidebarOpen, currentAddress }: HeaderProps) {
  const [isCreateWalletModalOpen, setIsCreateWalletModalOpen] =
      useState<boolean>(false),
    [isRecoverWalletModalOpen, setIsRecoverWalletModalOpen] =
      useState<boolean>(false);

  return (
    <HeaderContainer>
      <LogoArea isSidebarOpen={isSidebarOpen}></LogoArea>
      <InteractionArea>
        <Heading
          as='h1'
          size='large'
          style={{
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {currentAddress}
        </Heading>
        <Button
          variant='primary'
          size='large'
          width='184px'
          type='button'
          onClick={() => setIsCreateWalletModalOpen(true)}
        >
          + Create new wallet
        </Button>
        {currentAddress && (
          <Button
            variant='tertiary'
            size='large'
            type='button'
            width='fit-content'
            onClick={() => setIsRecoverWalletModalOpen(true)}
          >
            Reveal Secret Recovery Phrase
          </Button>
        )}
        <Modal isOpen={isCreateWalletModalOpen}>
          <CreateOrImportWalletModalState
            create
            setIsModalOpen={setIsCreateWalletModalOpen}
          />
        </Modal>
        <Modal isOpen={isRecoverWalletModalOpen}>
          <RecoverWallet setIsModalOpen={setIsRecoverWalletModalOpen} />
        </Modal>
      </InteractionArea>
    </HeaderContainer>
  );
}

export default Header;
