const hre = require("hardhat");

async function main() {

  const Intenium = await hre.ethers.getContractFactory("InteniumCore");
  const intenium = await Intenium.deploy();

  await intenium.waitForDeployment();

  console.log("Intenium deployed to:", await intenium.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
