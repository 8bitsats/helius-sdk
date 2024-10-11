import { Helius } from "helius-sdk";

const helius = new Helius("ba62067f-6a54-47b8-819e-6f6e8b318c38");
const response = await helius.rpc.getAssetsByOwner({
  ownerAddress: "CwmtHGNPppsrR2o6VaFrC4d4vX4fKA8mfsJumAxYBdZs",
  page: 1,
});
console.log(response.items);

import { Helius } from "helius-sdk";

const helius = new Helius("ba62067f-6a54-47b8-819e-6f6e8b318c38");
const response = await helius.rpc.getAssetsByGroup({
  groupKey: "collection",
  groupValue: "CwmtHGNPppsrR2o6VaFrC4d4vX4fKA8mfsJumAxYBdZs",
  page: 1,
});
console.log(response.items);