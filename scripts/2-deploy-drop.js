import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      // The collection's name, ex. CryptoPunks
      name: "GermanyDAO Membership 2.0",
      // A description for the collection.
      description: "A DAO for people interested in Germany",
      // The image that will be held on our NFT! The fun part :).
      image: readFileSync("scripts/assets/germany.png"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the contract.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primary_sale_recipient: AddressZero,
    });

    // this initialization returns the address of our contract
    // we use this to initialize the contract on the thirdweb sdk
    const editionDrop = await sdk.getContract(editionDropAddress, "edition-drop");

    // with this, we can get the metadata of our contract
    const metadata = await editionDrop.metadata.get();

    console.log(
      "✅ Successfully deployed editionDrop contract, address:",
      editionDropAddress,
    );
    console.log("✅ editionDrop metadata:", metadata);
  } catch (error) {
    console.log("failed to deploy editionDrop contract", error);
  }
})();

// editionDrop contract address: 0xAA277d23331BC7578Df49661BE9809CB325d34D7
// 2. editionDrop contract address: 0x7c6f00eEb3044e28EF9710b97f61A52998003f09
// 2.0 editionDrop contract address: 0xF55921573eD6087d02867ed8aa9ACA7850d8aB9c