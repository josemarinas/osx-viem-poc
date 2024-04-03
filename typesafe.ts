import {goerli} from 'viem/chains'
import { privateKeyToAccount } from 'viem/accounts';
import { createClient, getContract, http, parseAbi } from 'viem';
import osxArtifacts from '@aragon/osx-artifacts';
import { DAOFactory } from './abi';

const account = privateKeyToAccount("0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef");

const client = createClient({
    chain: goerli,
    account,
    transport: http()
});

const contract = getContract({
    client,
    address: "0x123456789abcdef0123456789abcdef01234567",
    abi: DAOFactory
});
// type safe with abi as const
contract.write.createDao()



