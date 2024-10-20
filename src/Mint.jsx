
import { useWriteContract } from 'wagmi';
import { abi } from './abi';

export function MintNFT() {
  const { data: hash, writeContract } = useWriteContract();

  async function submit(e) { 
    e.preventDefault();
    const formData = new FormData(e.target);
    const tokenId = formData.get('tokenId');
    writeContract({
      address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
      abi,
      functionName: 'mint',
      args: [BigInt(tokenId)],
    });
  } 

  return (
    <form onSubmit={submit}>
      <input name="tokenId" placeholder="69420" required />
      <button type="submit">Mint</button>
      {hash && <div>Transaction Hash: {hash}</div>}
    </form>
  );
}
