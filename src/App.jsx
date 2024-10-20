import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useAccount } from 'wagmi'
import { config } from './config'
import { WalletOptions } from './WalletOptions'
import { Account } from './Account'
import { SendTransaction } from './SendTransaction'
import { MintNFT } from './Mint'

const queryClient = new QueryClient()
function ConnectWallet(){
  const {isConnected} = useAccount()
  if(isConnected) return <Account />
  return <WalletOptions />
}

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        <div className="centered-container">  
          <div id="container1">
            <ConnectWallet />
          </div>
          <br />
          <Account />
          <br />
          <SendTransaction />
          <br />
          <MintNFT />
        </div>
      </QueryClientProvider> 
    </WagmiProvider>
  )
}


export default App;
