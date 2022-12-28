import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenAddress = await sdk.deployer.deployToken({
      // What's your token's name? Ex. "Ethereum"
      name: "GermanyDAO Governance Token 2.0",
      // What's your token's symbol? Ex. "ETH"
      symbol: "GERMANY2",
      // This will be in case we want to sell our token,
      // because we don't, we set it to AddressZero again.
      primary_sale_recipient: AddressZero,
    });
    console.log(
      "✅ Successfully deployed token contract, address:",
      tokenAddress,
    );
  } catch (error) {
    console.error("failed to deploy token contract", error);
  }
})();

// Token contract address: 0x46E1008bB16aC5CD259Bf33667c80750640F4406
// Token contract address 2.0: 0x12AE9EDf5CB555fe25f12bE267A5142F61763864