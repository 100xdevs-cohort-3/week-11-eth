

import { useSendTransaction , useWaitForTransactionReceipt } from 'wagmi'
import { parseEther } from 'viem'

export function SendTransaction() {
    const { data: hash, sendTransaction } = useSendTransaction()
    const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    })

    async function sendTx() {
        const to = document.getElementById("to").value;
        const value = document.getElementById("value").value;
        sendTransaction({ to, value: parseEther(value) });
    }

    // Todo: use refs here
    return <div>
      <input id="to" placeholder="0xA0Cf…251e" required />
      <input style={{margin: '8px'}} id="value" placeholder="0.05" required />
      <button style={{margin: '8px', padding: '10px'}} onClick={sendTx}>Send</button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && <div>Transaction confirmed.</div>}
    </div>
}