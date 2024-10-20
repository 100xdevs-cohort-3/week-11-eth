import { useReadContracts } from 'wagmi';

const wagmiContractConfig = {
    address: '0xYourContractAddressHere', // Replace with your contract address
    abi: [/* ABI array here */], // Replace with your contract's ABI
  };

function ReadContract() {
  const { 
    data,
    error,
    isPending,
  } = useReadContracts({ 
    contracts: [{ 
      ...wagmiContractConfig, // ... this wil pul address and abi from wagmicontractconfig
      functionName: 'balanceOf',
      args: ['0x03A71968491d55603FFe1b11A9e23eF013f75bCF'],
    }, { 
      ...wagmiContractConfig, 
      functionName: 'ownerOf', 
      args: [69n], 
    }, { 
      ...wagmiContractConfig, 
      functionName: 'totalSupply', 
    }] 
  });

  const [balance, ownerOf, totalSupply] = data || []; 

  if (isPending) return <div>Loading...</div>;

  if (error) {
    return (
      <div>
        Error: {error.shortMessage || error.message}
      </div>
    );
  }

  return (
    <>
      <div>Balance: {balance ? balance.toString() : 'not applicable'}</div>
      <div>Owner of Token 69: {ownerOf ? ownerOf.toString() : 'not applicable'}</div> 
      <div>Total Supply: {totalSupply ? totalSupply.toString() : 'not applicable'}</div> 
    </>
  );
}

export default ReadContract;
