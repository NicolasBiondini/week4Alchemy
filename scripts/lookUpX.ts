import { ethers } from "hardhat";

const CONTRACT_ADDR = "0x64B1941147da19F542ba1A75489a40492392bDe4";

async function main() {
  // hardhat-ethers plugin
  const contract = await ethers.getContractAt("Contract", CONTRACT_ADDR);

  console.log(await contract.x());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
