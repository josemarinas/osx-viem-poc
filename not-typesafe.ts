import {goerli} from 'viem/chains'
import { privateKeyToAccount } from 'viem/accounts';
import { createClient, getContract, http } from 'viem';
import osxArtifacts from '@aragon/osx-artifacts';

const account = privateKeyToAccount("0x");

const client = createClient({
    chain: goerli,
    account,
    transport: http()
});

const contract = getContract({
    client,
    address: "0x",
    abi: osxArtifacts.DAOFactory.abi
});
// not type safe with abi from osxArtifacts
contract.write.createDao()



