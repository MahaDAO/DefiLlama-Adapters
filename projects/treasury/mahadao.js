const { sumTokensExport, nullAddress } = require("../helper/unwrapLPs.js");

const eth = {
  weth: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  arth: "0x8CC0F052fff7eaD7f2EdCCcaC895502E884a8a71",
  maha: "0x745407c86df8db893011912d3ab28e68b62e49b0",
  treasury: "0x43c958affe41d44f0a02ae177b591e93c86adbea",
};

module.exports = {
  ethereum: {
    tvl: sumTokensExport({
      owner: eth.treasury,
      tokens: [eth.weth],
    }),
    ownTokens: sumTokensExport({
      owner: eth.treasury,
      tokens: [eth.arth, eth.maha],
    }),
  },
};
