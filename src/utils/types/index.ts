export interface PrivateWalletInfo {
  mnemonic: string | any;
  privateKey: string;
}

export interface WalletInfo {
  balance: string;
  txnCount: number;
}

export interface Network {
  name: string;
  endpoint: string;
  isInternal: boolean;
  currency: string;

  // deprecated
  isInfura?: boolean;
}
