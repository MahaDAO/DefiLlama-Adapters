const { sumTokensExport } = require("../helper/unwrapLPs.js");

const eth = {
  eth: "0x0000000000000000000000000000000000000000",
  weth: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  arth: "0x8CC0F052fff7eaD7f2EdCCcaC895502E884a8a71",
  maha: "0x745407c86df8db893011912d3ab28e68b62e49b0",
  dai: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  usdc: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  usdt: "0xdac17f958d2ee523a2206206994597c13d831ec7",
  timelock: "0x43c958affe41d44f0a02ae177b591e93c86adbea",
  ecosystemFund: "0x6357EDbfE5aDA570005ceB8FAd3139eF5A8863CC",
};

module.exports = {
  ethereum: {
    tvl: sumTokensExport({
      owners: [eth.timelock, eth.ecosystemFund],
      tokens: [eth.weth, eth.eth, eth.usdc, eth.usdt, eth.dai],
    }),
    ownTokens: sumTokensExport({
      owners: [eth.timelock, eth.ecosystemFund],
      tokens: [eth.arth, eth.maha],
    }),
  },
};
