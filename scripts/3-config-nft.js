import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xF55921573eD6087d02867ed8aa9ACA7850d8aB9c", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Stereotypical German in Pixel Art",
        description: "This NFT will give you access to GermanyDAO!",
        image: readFileSync("scripts/assets/stereotypical-german.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();