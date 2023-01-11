const hre = require("hardhat");

async function main() {
  const NanaToken = await hre.ethers.getContractFactory("NanaToken");
  const nanaToken = await NanaToken.deploy(100000000, 50);

  await nanaToken.deployed();

  console.log("Nana Token deployed: ", nanaToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});