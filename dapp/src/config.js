var txDefaultOrig =
{
  websites: {
    "wallet": "https://wallet.gnosis.pm",
    "gnosis": "https://gnosis.pm",
    "ethGasStation": "https://safe-relay.gnosis.pm/api/v1/gas-station/"
  },
  gasLimit: 3141592,
  gasPrice: 18000000000,
  ethereumNode: "http//192.168.1.115:8545",
  connectionChecker: {
    method : "OPTIONS",
    url : "https://www.google.com",
    checkInterval: 5000
  },
  accountsChecker: {
    checkInterval: 5000
  },
  transactionChecker: {
    checkInterval: 15000
  },
  wallet: "injected",
  defaultChainID: null,
  // Mainnet
  walletFactoryAddress: "0xad234802Ef0f4f3562a53Eb13C2804453693541b",
  tokens: [
    {
      'address': '0xEa7A06E2f0700Bf53fD6e8FB4BE322e1fD1C1129',
      'name': 'RiveX Token',
      'symbol': 'RVX',
      'decimals': 18
    }
  ]
};

if (isElectron) {
  txDefaultOrig.wallet = "remotenode";
}

var txDefault = {
  ethereumNodes : [
    {
      url : "http://157.245.205.28:8686",
      name: "Remote Mainnet"
    },
    {
      url : "http://157.245.205.28:8686",
      name: "Remote Ropsten"
    },
    {
      url : "http://157.245.205.28:8686",
      name: "Remote Kovan"
    },
    {
      url : "http://157.245.205.28:8686",
      name: "Remote Rinkeby"
    },
    {
      url : "http://157.245.205.28:8686",
      name: "Local node"
    }
  ],
  walletFactoryAddresses: {
    'mainnet': {
      name: 'Mainnet',
      address: txDefaultOrig.walletFactoryAddress
    },
    'ropsten': {
      name: 'Ropsten',
      address: '0xad234802Ef0f4f3562a53Eb13C2804453693541b'
    },
    'kovan': {
      name: 'Kovan',
      address: '0xad234802Ef0f4f3562a53Eb13C2804453693541b'
    },
    'rinkeby': {
      name: 'Rinkeby',
      address: '0xad234802Ef0f4f3562a53Eb13C2804453693541b'
    },
    'privatenet': {
      name: 'Privatenet',
      address: '0xad234802Ef0f4f3562a53Eb13C2804453693541b'
    }
  }
};

var oldWalletFactoryAddresses = [
  ("0x12ff9a987c648c5608b2c2a76f58de74a3bf1987").toLowerCase(),
  ("0xed5a90efa30637606ddaf4f4b3d42bb49d79bd4e").toLowerCase(),
  ("0xa0dbdadcbcc540be9bf4e9a812035eb1289dad73").toLowerCase()
];

/**
* Update the default wallet factory address in local storage
*/
function checkWalletFactoryAddress() {
  var userConfig = JSON.parse(localStorage.getItem("userConfig"));

  if (userConfig && oldWalletFactoryAddresses.indexOf(userConfig.walletFactoryAddress.toLowerCase()) >= 0) {
    userConfig.walletFactoryAddress = txDefaultOrig.walletFactoryAddress;
    localStorage.setItem("userConfig", JSON.stringify(userConfig));
  }
}

/**
* Reload configuration
*/
function loadConfiguration () {
  var userConfig = JSON.parse(localStorage.getItem("userConfig"));
  Object.assign(txDefault, txDefaultOrig, userConfig);
}

checkWalletFactoryAddress();
loadConfiguration();
