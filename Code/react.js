import { useTokenDrop } from '@thirdweb-dev/react'

export default function Component() {
const tokenDrop = useTokenDrop("0x00DABEa547Ea6174765fe494Ae7f94E61AaE5442")

  // Now you can use the token drop contract in the rest of the component


// Address of the wallet sending the tokens
const holderAddress = "0x8367D5F140a0219106F958816712D1e3538987dE";

// The amount of this token you want to burn
const amount = 1.2;

await contract.burnFrom(holderAddress, amount);

// The amount of this token you want to burn
const amount = 1.2;

await contract.burnTokens(amount);

const address = "0x8367D5F140a0219106F958816712D1e3538987dE"; // address of the wallet you want to claim the NFTs
const quantity = 42.69; // how many tokens you want to claim

const tx = await contract.claimTo(address, quantity);
const receipt = tx.receipt; // the transaction receipt

// Address of the wallet to check token allowance
const spenderAddress = "0x...";
const allowance = await contract.token.allowance(spenderAddress);


// Address of the wallet who owns the funds
const owner = "0x8367D5F140a0219106F958816712D1e3538987dE";
// Address of the wallet to check token allowance
const spender = "0x...";
const allowance = await contract.token.allowanceOf(owner, spender);

const balance = await contract.token.balance();

const token = await contract.token.get();


// Address of the wallet to allow transfers from
const spenderAddress = "0x...";
// The number of tokens to give as allowance
const amount = 100
await contract.token.setAllowance(spenderAddress, amount);

const balance = await contract.token.totalSupply();

// Address of the wallet you want to send the tokens to
const toAddress = "0x...";
// The amount of tokens you want to send
const amount = 0.1;
await contract.token.transfer(toAddress, amount);

// Data of the tokens you want to mint
const data = [
  {
    toAddress: "0x8367D5F140a0219106F958816712D1e3538987dE", // Address to mint tokens to
    amount: 100, // How many tokens to mint to specified address
  },
 {
   toAddress: "0x...",
   amount: 100,
 }
]

await contract.token.transferBatch(data);

// Address of the wallet sending the tokens
const fromAddress = "0x8367D5F140a0219106F958816712D1e3538987dE";
// Address of the wallet you want to send the tokens to
const toAddress = "0x...";
// The number of tokens you want to send
const amount = 1.2
// Note that the connected wallet must have approval to transfer the tokens of the fromAddress
await contract.token.transferFrom(fromAddress, toAddress, amount);


const presaleStartTime = new Date();
const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
const claimConditions = [
  {
    startTime: presaleStartTime, // start the presale now
    maxQuantity: 3117.42, // limit how many tokens are released in this presale
    price: 0.001, // presale price per token
    snapshot: ['0x...', '0x...'], // limit claiming to only certain addresses
  },
  {
    startTime: publicSaleStartTime, // 24h after presale, start public sale
    price: 0.008, // public sale price per token
  }
]);
await contract.claimConditions.set(claimConditions);
