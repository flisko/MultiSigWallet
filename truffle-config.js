module.exports = {
  networks: {
    development: {
      host: '157.245.205.28',
      port: 8686,
      network_id: '3',
      gas: 5000000,
      gasPrice: 180e9,
      // following address needed to be replaced with unlocked account on gwan node
      from: '0x14ef9a5100dc4dccda028fa4936e63e31c75c5e1'
    }
  },
  compilers: {
    solc: {
      version:"0.5.16",
      evmVersion:"byzantium",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200   // Optimize for how many times you intend to run the code
        }   // ex:  "0.4.20". (Default: Truffle's installed solc)
    }   
}
}
};
