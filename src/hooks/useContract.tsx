import { prepareContractCall, estimateGas, readContract, getContract, defineChain } from "thirdweb";
import { useSendTransaction, useActiveAccount, useSimulateTransaction } from "thirdweb/react";
import { client } from "../client";


export function useContractPurchase() {
  const account: any = useActiveAccount();
  const chain: any = defineChain(42161); // Arbitrum

  const usdcContract: any = getContract({
    client,
    chain,
    address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9", // USDC on Arbitrum
  });

  const { mutate: sendTransaction }: any = useSendTransaction();
  const { mutate: simulateTx }: any = useSimulateTransaction();

  const getLockContract = (address: string): any => {
    return getContract({
      client,
      chain,
      address,
    });
  };

  const sendTxAsync = (tx: any, successMsg: string = "Transaction successful!", errorMsg: string = "Transaction failed") => {
    return new Promise((resolve, reject) => {
      sendTransaction(tx, {
        onSuccess: (res: any) => {
          console.log(successMsg, res);
          resolve(res);
        },
        onError: (err: any) => {
          console.error(errorMsg, err);
          reject(err);
        },
      });
    });
  };

  const preparePurchaseTransaction = async (contractAddress: string, { values, recipients, referrers, keyManagers, data }: any) => {
    const lockContract = getLockContract(contractAddress);

    return await prepareContractCall({
      contract: lockContract,
      method:
        "function purchase(uint256[] _values, address[] _recipients, address[] _referrers, address[] _keyManagers, bytes[] _data) payable returns (uint256[])",
      params: [values, recipients, referrers, keyManagers, data],
      value: "0" as any,
    });
  };

  const approveUSDC = async (contractAddress: string, amount: bigint) => {
    const approveTx = await prepareContractCall({
      contract: usdcContract,
      method: "function approve(address spender, uint256 amount) returns (bool)",
      params: [contractAddress, amount],
    });

    return await sendTxAsync(approveTx, "USDC approved!", "USDC approval failed");
  };

  const executePurchase = async (contractAddress: string, { values, recipients, referrers, keyManagers, data }: any) => {
    const purchaseTx = await preparePurchaseTransaction(contractAddress, { values, recipients, referrers, keyManagers, data });

    simulateTx({ transaction: purchaseTx, from: account.address }, {
      onSuccess: (res: any) => console.log("Simulation successful:", res),
      onError: (err: any) => console.error("Simulation failed:", err),
    });

    return await sendTxAsync(purchaseTx, "Purchase successful!", "Purchase failed");
  };

  const checkOwnership = async (contractAddress: string) => {
    const lockContract = getLockContract(contractAddress);

    const data = await readContract({
      contract: lockContract,
      method: "function balanceOf(address _keyOwner) view returns (uint256 balance)",
      params: [account.address],
    });

    return Number(data) > 0; // owns at least 1
  };

  const estimateTrxGas = async (contractAddress: string, { values, recipients, referrers, keyManagers, data }: any) => {
    const preparedTx = await preparePurchaseTransaction(contractAddress, { values, recipients, referrers, keyManagers, data });
    return await estimateGas({ transaction: preparedTx, from: account.address });
  };

  const getTotalSupply = async (contractAddress: string) => {
    const lockContract = getLockContract(contractAddress);

    const data = await readContract({
      contract: lockContract,
      method: "function totalSupply() view returns (uint256 _totalKeysCreated)",
      params: [],
    });

    return Number(data);
  };

  const getTotalOwners = async (contractAddress: string) => {
    const lockContract = getLockContract(contractAddress);

    const data = await readContract({
      contract: lockContract,
      method:
        "function numberOfOwners() view returns (uint256)",
      params: [],
    });
    console.log(data)
    return data

  }


  const getKeyPrice = async (contractAddress: string) => {
    const lockContract = getLockContract(contractAddress);

    const data = await readContract({
      contract: lockContract,
      method: "function keyPrice() view returns (uint256)",
      params: [],
    });

    return Number(data);
  };

  return { approveUSDC, executePurchase, estimateTrxGas,getTotalOwners, checkOwnership, getTotalSupply, getKeyPrice };
}