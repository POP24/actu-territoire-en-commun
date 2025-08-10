import React, { useEffect, useMemo, useState } from "react";
import {
  createThirdwebClient,
  getContract,
  readContract,
  prepareContractCall,
} from "thirdweb";
import {
  ConnectButton,
  useActiveAccount,
  TransactionWidget,
  lightTheme,
} from "thirdweb/react";
import { inAppWallet, createWallet } from "thirdweb/wallets";
import { ethereum } from "thirdweb/chains";

// ============ TODO: REMPLACE ICI ============
const CLIENT_ID = "CLIENT_ID_THIRDWEB";       // <- Ton clientId thirdweb (obligatoire)
const DEFAULT_LOCK_ADDRESS = "LOCK_ADDRESS";  // <- Adresse de ton contrat Unlock (PublicLock)
// ============================================

const client = createThirdwebClient({ clientId: CLIENT_ID });

const wallets = [
  inAppWallet({
    auth: { options: ["google", "telegram", "discord", "email"] },
  }),
  createWallet("io.metamask"),
];

type Props = {
  isOpen: boolean;
  onClose: () => void;
  lockAddress?: string;
};

const ZERO = "0x0000000000000000000000000000000000000000";

export default function ArchitecteOGModal({
  isOpen,
  onClose,
  lockAddress = DEFAULT_LOCK_ADDRESS,
}: Props) {
  const account = useActiveAccount();
  const [keyPriceWei, setKeyPriceWei] = useState<bigint | null>(null);
  const [loadingPrice, setLoadingPrice] = useState(false);

  // Instance du contrat Unlock
  const lockContract = useMemo(() => {
    if (!lockAddress) return null;
    return getContract({ client, chain: ethereum, address: lockAddress });
  }, [lockAddress]);

  // Lecture du prix on-chain
  useEffect(() => {
    const fetchPrice = async () => {
      if (!lockContract) return;
      try {
        setLoadingPrice(true);
        // PublicLock expose keyPrice() -> uint256
        const price = (await readContract({
          contract: lockContract,
          method: "function keyPrice() view returns (uint256)",
          params: [],
        })) as bigint;
        setKeyPriceWei(price);
      } catch (e) {
        console.error("Erreur lecture keyPrice:", e);
      } finally {
        setLoadingPrice(false);
      }
    };
    fetchPrice();
  }, [lockContract]);

  // Préparation de la transaction purchase (version Unlock v11+ via tableaux)
  const transaction = useMemo(() => {
    if (!lockContract || !account || keyPriceWei === null) return null;

    // purchase(
    //   uint256[] _values, address[] _recipients,
    //   address[] _referrers, address[] _keyManagers, bytes[] _data
    // ) payable
    return prepareContractCall({
      contract: lockContract,
      method:
        "function purchase(uint256[] _values,address[] _recipients,address[] _referrers,address[] _keyManagers,bytes[] _data) payable",
      params: [[keyPriceWei], [account.address], [ZERO], [ZERO], ["0x"]],
      value: keyPriceWei, // msg.value = prix de la clé (adhésion 1 an)
    });
  }, [lockContract, account, keyPriceWei]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-4 shadow-xl">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Adhérer — Architecte OG</h2>
          <button
            onClick={onClose}
            className="rounded-lg border px-2 py-1 text-sm hover:bg-gray-50"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        {/* Étape 1 : Connexion (ton ConnectButton, repris tel quel) */}
        <div className="mb-4">
          <ConnectButton
            accountAbstraction={{ chain: ethereum, sponsorGas: true }}
            client={client}
            connectButton={{ label: "ADHÉRER" }}
            connectModal={{
              size: "compact",
              titleIcon:
                "https://963b0792-986d-4523-9700-2fd46b95dd58.lovableproject.com/lovable-uploads/78e2c716-3ddd-4f91-a2d2-ac34b20dad6f.png",
            }}
            locale={"fr_FR"}
            theme={lightTheme({
              colors: { primaryButtonBg: "hsl(217, 91%, 60%)" },
            })}
            wallets={wallets}
          />
        </div>

        {/* Étape 2 : Achat (après connexion) */}
        {account ? (
          <div className="space-y-3">
            {loadingPrice && <p>Chargement du prix on-chain…</p>}

            {!loadingPrice && keyPriceWei !== null && transaction ? (
              <div className="rounded-xl border p-3">
                <p className="mb-2 text-sm text-gray-700">
                  Durée : 1 an • Réseau : Ethereum • Portefeuille :
                  <span className="font-mono">
                    {" "}
                    {account.address.slice(0, 6)}…{account.address.slice(-4)}
                  </span>
                </p>

                <TransactionWidget
                    client={client}
                    transaction={transaction}
                    theme="light"
                    onSuccess={() => {
                      alert("Bienvenue, Architecte OG ! Clé NFT achetée ✅");
                      // onClose(); // ou redirection, si tu veux
                    }}
                    onError={(e) => {
                      console.error(e);
                      alert("La transaction a échoué. Réessaie.");
                    }}
                />
              </div>
            ) : null}

            {!transaction && !loadingPrice && (
              <p className="text-sm text-gray-500">
                Connecte-toi puis attends la récupération du prix…
              </p>
            )}
          </div>
        ) : (
          <p className="text-sm text-gray-500">
            Connecte un portefeuille pour continuer.
          </p>
        )}

        <p className="mt-4 text-xs text-gray-500">
          En adhérant, tu achètes une clé NFT (Unlock) valable 1 an on-chain.
        </p>
      </div>
    </div>
  );
}