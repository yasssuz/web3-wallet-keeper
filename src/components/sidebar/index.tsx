// react or any other library related content
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

// styles
import {
  Address,
  AddressList,
  BottomArea,
  HideSibebarButton,
  OpenSidebarButton,
  SidebarContainer,
  ThemeSwitcherContainer,
  TopArea,
  Switcher,
} from "./styles";

// components
import { WalletsContext } from "../../contexts/wallets";
import CreateOrImportWalletModalState from "../modal-states/create-import-wallet";
import Modal from "../shared/modal";
import Heading from "../shared/typography/heading";
import Text from "../shared/typography/text";

// services and utils

// images

// types
type SidebarPrevState = (prevState: boolean) => boolean;

// interfaces
interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen(state: boolean | SidebarPrevState): void;
  currentAddress: string | undefined;
}

function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
  currentAddress,
}: SidebarProps) {
  const [isCreateWalletModalOpen, setIsCreateWalletModalOpen] =
      useState<boolean>(false),
    [isImportWalletModalOpen, setIsImportWalletModalOpen] =
      useState<boolean>(false);

  const { storedAddressesList } = useContext(WalletsContext);

  function handleThemeChange() {
    const currentTheme = document.body.getAttribute("data-theme");

    document.body.setAttribute(
      "data-theme",
      (currentTheme === "dark" && "light") || "dark"
    );
    localStorage.setItem(
      "data-theme",
      (currentTheme === "dark" && "light") || "dark"
    );
  }

  return (
    <>
      <OpenSidebarButton
        type='button'
        onClick={() => setIsSidebarOpen(prev => !prev)}
        isSidebarOpen={isSidebarOpen}
      >
        <img src='/icons/icon-show-sidebar.svg' alt='open sidebar' />
      </OpenSidebarButton>
      <SidebarContainer isSidebarOpen={isSidebarOpen}>
        <TopArea>
          <Heading as='strong' size='small'>
            ALL WALLETS ({storedAddressesList?.length || 0})
          </Heading>
          <AddressList>
            {storedAddressesList?.map((address, index) => (
              <Address
                className={address === currentAddress ? "selected" : ""}
                key={index}
              >
                <Link to={`/dashboard/${address}`}>
                  <div style={{ minWidth: 16 }}>
                    <svg
                      width='16'
                      height='16'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z'
                        fill='#828FA3'
                      />
                    </svg>
                  </div>
                  <Text
                    as='span'
                    size='large'
                    weight='bold'
                    style={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    {address}
                  </Text>
                </Link>
              </Address>
            ))}
            <Address createAddress>
              <button onClick={() => setIsCreateWalletModalOpen(true)}>
                <svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z'
                    fill='var(--purplePrimary)'
                  />
                </svg>
                <Text as='span' size='large' weight='bold'>
                  + Create New Wallet
                </Text>
              </button>
            </Address>
            <Address createAddress>
              <button onClick={() => setIsImportWalletModalOpen(true)}>
                <svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z'
                    fill='var(--purplePrimary)'
                  />
                </svg>
                <Text as='span' size='large' weight='bold'>
                  + Import Wallet
                </Text>
              </button>
            </Address>
          </AddressList>
        </TopArea>
        <BottomArea>
          <ThemeSwitcherContainer>
            <img src='/icons/icon-light-theme.svg' alt='set light theme' />
            <input
              id='themeSwitcher'
              name='themeSwitcher'
              type='checkbox'
              onChange={handleThemeChange}
            />
            <Switcher htmlFor='themeSwitcher' />
            <img src='/icons/icon-dark-theme.svg' alt='set dark theme' />
          </ThemeSwitcherContainer>
          <HideSibebarButton
            type='button'
            onClick={() => setIsSidebarOpen(false)}
          >
            <img src='/icons/icon-hide-sidebar.svg' alt='close sidebar' />
            Hide Sidebar
          </HideSibebarButton>
        </BottomArea>
      </SidebarContainer>
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

export default Sidebar;
