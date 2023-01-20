import React  from 'react';
import { ethers, BigNumber } from "ethers";
import abiHandler from '@/artifacts/staticdata';
import styles from './page.module.css'

export async function callSmartContract(smartContractAddress: string, fileName:string) {
  const abi = await abiHandler(fileName);
  const contract = new ethers.Contract(smartContractAddress, abi, getProvider());
  const decimals = await contract.decimals();
  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply: BigNumber = await contract.totalSupply();
  return {decimals, name, symbol, totalSupply};
}

function getProvider() {
  return new ethers.providers.JsonRpcProvider(process.env.ETHEREUM_NODE_URL);
}

export async function getChainStatus() {
  const provider = getProvider();
  const blockHeight = await provider.getBlockNumber();
  return {blockHeight};
}

export default async function TestEtherjs() {
  const chainStatus = await getChainStatus();
  const result = await callSmartContract("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", "ERC20");
  return (
    <div className={styles.grid}>
      <p>
        Test Etherjs!
      </p>
      <p>
        blockHeight {chainStatus.blockHeight}
      </p>

      <div className={styles.card}>
        <h2>{result.name}</h2>
        <p>symbol {result.symbol}</p>
        <p>decimals {result.decimals}</p>
        <p>totalSupply {ethers.utils.formatUnits(result.totalSupply, result.decimals).toString()}</p>
      <div/>
    </div>
    </div>
  )
}
