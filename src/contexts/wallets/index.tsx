// react or any other library related content
import {
  createContext,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

// styles

// components

// services and utils
import {
  getStoredEncryptedWallets,
  getStoredEncryptedWalletsAddress,
} from "../../utils/wallet";

// images

// types

// interfaces
interface WalletsContextProps {
  storedWalletsList: string[];
  setStoredWalletsList(state: string[]): void;
  storedAddressesList: string[];
}

const WalletsContext = createContext({} as WalletsContextProps);

function WalletsProvider({ children }: { children: ReactNode }) {
  const [storedWalletsList, setStoredWalletsList] = useState<string[]>([]),
    [storedAddressesList, setStoredAddressesList] = useState<string[]>([]);

  // this needs to run before content renders, but after DOM is initially created.
  // It's important for user experience that in this specific case, the first app render
  // loads with the correct data.
  useLayoutEffect(() => {
    // react 18 batching feature will cause only 1 re-render
    // so in this case i don't need to use useRef on the first state value
    // and only re-render in the second state value
    setStoredWalletsList(getStoredEncryptedWallets());
    setStoredAddressesList(getStoredEncryptedWalletsAddress());
  }, []);

  // this needs to run if storedWalletsList has changed.
  // I made it this way because we need to maintain both states in constant sync.
  // For example, we update storedWalletsList state with a new wallet, but we don't update
  // storedAddressesList. Because of this, both states will not be in sync and will cause
  // a few UI conflicts. Also, this code is not going to create an infite loop and is only
  // going to cause 1 re-render, which will be the state synching with the other state.
  useEffect(() => {
    setStoredAddressesList(getStoredEncryptedWalletsAddress());
  }, [storedWalletsList]);

  return (
    <WalletsContext.Provider
      value={{
        storedWalletsList,
        setStoredWalletsList,
        storedAddressesList,
      }}
    >
      {children}
    </WalletsContext.Provider>
  );
}

export { WalletsContext, WalletsProvider };
