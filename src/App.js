import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } 
from "connectkit";
import { ChakraProvider } from "@chakra-ui/react";
import { Chat } from "@pushprotocol/uiweb";
import {useAccount} from "wagmi"

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
  
  }),
);

const App = () => {
  const { address }= useAccount()
  return (
    <WagmiConfig client={client}>
      
      <ChakraProvider>
      <ConnectKitProvider>
        <ConnectKitButton />
        <Chat
   account={address} //user address
   supportAddress="0xC6D37dE061d9728F5988f9aC559aE86E32a4b611" //support address
   apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
    env="staging"
 />
      </ConnectKitProvider>
      </ChakraProvider>
    </WagmiConfig>
  );
};
export default App;