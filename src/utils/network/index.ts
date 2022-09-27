import type { Network } from "../types";

export function generateAndStoreBaseNetworks(): Network[] {
  const baseNetworks = [
    {
      name: "Ethereum",
      currency: "ETH",
      isInfura: true,
      endpoint: `https://mainnet.infura.io/v3/`,
    },
    {
      name: "Goerli",
      currency: "ETH",
      isInfura: true,
      endpoint: `https://goerli.infura.io/v3/`,
    },
    {
      name: "Sepolia",
      currency: "ETH",
      isInfura: true,
      endpoint: `https://sepolia.infura.io/v3/`,
    },
    {
      name: "Sokol Poa",
      currency: "SPOA",
      isInfura: false,
      endpoint: `https://sokol.poa.network/`,
    },
  ];

  localStorage.setItem("@WalletKeeper:networks", JSON.stringify(baseNetworks));

  return baseNetworks;
}

export function getStoredNetworks(): Network[] {
  return JSON.parse(localStorage.getItem("@WalletKeeper:networks") as string);
}
