import { createThirdwebClient } from "thirdweb";

// Replace with your client ID or use environment variable
const clientId = process.env.VITE_THIRDWEB_CLIENT_ID || "your_client_id_here";

export const client = createThirdwebClient({
  clientId: clientId,
});