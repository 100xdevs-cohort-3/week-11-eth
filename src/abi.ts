export const abi = [
    {
      name: 'mint',
      type: 'function',
      stateMutability: 'nonpayable',
      inputs: [{ internalType: 'uint32', name: 'tokenId', type: 'uint32' }],
      outputs: [],
    },
  ] as const