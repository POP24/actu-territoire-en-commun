// Utility to get total volume of the contract

/**
 * Calculate total sales (supply × keyPrice) for a single contract
 */
export const calculateContractRevenue = async (
  contractAddress: any,
  getTotalSupply: any,
  getKeyPrice: any
): Promise<any> => {
  const [supply, price] = await Promise.all([
    getTotalSupply(contractAddress),
    getKeyPrice(contractAddress),
  ]);

  return supply * formatUSDC(price);
};

/**
 * Calculate total sales across multiple contracts
 */
export const calculateTotalRevenue = async (
  nfts: any,
  getTotalSupply: any,
  getKeyPrice: any
): Promise<any> => {
  let total = 0;
  for (const nft of nfts) {
    const revenue = await calculateContractRevenue(
      nft.contractAddress,
      getTotalSupply,
      getKeyPrice
    );
    total += revenue;
  }
  return total;
};

/**
 * Format USDC value from base units (6 decimals) to normal number
 */
export const formatUSDC = (value: any): any => {
  return value / 1e6; // e.g. 1000000 -> 1
};
