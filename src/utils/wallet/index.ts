import { Wallet, providers } from "ethers";
import { getErrorMessage } from "../error";
import { PrivateWalletInfo } from "../types";

export async function importAndSafelyStoreWallet(
  mnemonic: string,
  decryptionKey: string,
  progressState?: (percent: number) => void
): Promise<Wallet | string> {
  try {
    const importedWallet = Wallet.fromMnemonic(mnemonic);

    if (
      !!getStoredEncryptedWalletsAddress()?.find(
        address =>
          address.toLocaleLowerCase() ===
          importedWallet.address.toLocaleLowerCase()
      )
    )
      throw "Wallet already imported";

    const encryptedWallet = await importedWallet.encrypt(
      decryptionKey,
      null,
      progressState
    );

    storeEncryptedWallet(encryptedWallet);
    return importedWallet;
  } catch (error) {
    console.log(error);
    return getErrorMessage(error);
  }
}

export async function createAndSafelyStoreWallet(
  decryptionKey: string,
  progressState?: (percent: number) => void
): Promise<Wallet> {
  const newWallet = Wallet.createRandom(),
    encryptedWallet = await newWallet.encrypt(
      decryptionKey,
      null,
      progressState
    );

  storeEncryptedWallet(encryptedWallet);
  return newWallet;
}

export async function decryptJSONWallet(
  encryptedWallet: string,
  decryptionKey: string,
  progressState?: (percent: number) => void
): Promise<Wallet | string> {
  try {
    const decryptedWallet = await Wallet.fromEncryptedJson(
      encryptedWallet,
      decryptionKey,
      progressState
    );

    return decryptedWallet;
  } catch (error) {
    console.log(error);
    return getErrorMessage(error);
  }
}

export async function getPrivateWalletInfo(
  encryptedWallet: string,
  decryptionKey: string
): Promise<PrivateWalletInfo | string> {
  const decryptedWallet = await decryptJSONWallet(
    encryptedWallet,
    decryptionKey
  );

  // check if it's an error
  if (typeof decryptedWallet === "string") return decryptedWallet;

  return {
    privateKey: decryptedWallet.privateKey,
    mnemonic: decryptedWallet.mnemonic,
  };
}

export async function getWalletBalance(
  rpcProvider: string,
  walletAddress: string
) {
  let newWallet = Wallet.createRandom();
  const provider = new providers.JsonRpcProvider(
    "https://rinkeby-light.eth.linkpool.io/"
  );

  newWallet = newWallet.connect(provider);
}

export function storeEncryptedWallet(encryptedWallet: string): void {
  const localWallets = JSON.parse(
    localStorage.getItem("@WalletKeeper:wallets") as string
  );

  localStorage.setItem(
    "@WalletKeeper:wallets",
    JSON.stringify(
      // check if there were any previous wallets
      localWallets?.length
        ? [encryptedWallet, ...localWallets]
        : [encryptedWallet]
    )
  );
}

export function getStoredEncryptedWallets(): string[] {
  return JSON.parse(localStorage.getItem("@WalletKeeper:wallets") as string);
}

export function getStoredEncryptedWalletsAddress(): string[] {
  const encryptedWallets = getStoredEncryptedWallets(),
    walletsAddress = encryptedWallets?.map(
      encryptedWallet => "0x" + JSON.parse(encryptedWallet).address
    );

  return walletsAddress;
}
