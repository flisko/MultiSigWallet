angular.module('multiSigWeb').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/partials/accounts.html',
    "<div class=\"panel panel-default\">\r" +
    "\n" +
    "  <div class=\"panel-heading\">\r" +
    "\n" +
    "    <div class=\"pull-right\">\r" +
    "\n" +
    "      <button type=\"button\" class=\"btn btn-default\"\r" +
    "\n" +
    "        id=\"add-lightwallet-account\"\r" +
    "\n" +
    "        ng-click=\"createWallet()\">\r" +
    "\n" +
    "        Add\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <button  type=\"button\"\r" +
    "\n" +
    "        class=\"btn btn-default\"\r" +
    "\n" +
    "        ng-click=\"openImportLightWallet()\">\r" +
    "\n" +
    "        Import\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <h4>\r" +
    "\n" +
    "      Accounts\r" +
    "\n" +
    "    </h4>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <table class=\"table table-hover table-bordered table-striped\">\r" +
    "\n" +
    "    <thead>\r" +
    "\n" +
    "      <tr>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Name\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Address\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "      </tr>\r" +
    "\n" +
    "    </thead>\r" +
    "\n" +
    "    <tbody>\r" +
    "\n" +
    "      <tr ng-repeat=\"account in account.addresses|objectToArray|limitTo:itemsPerPage:itemsPerPage*(currentPage-1) track by $index\">\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          <a ng-href=\"#/wallet/{{account.address}}\" ng-bind-html=\"account.name | dashIfEmpty\"></a>\r" +
    "\n" +
    "          <div class=\"pull-right form-inline\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"editAccount(account)\">\r" +
    "\n" +
    "              Edit\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-danger btn-sm\" ng-click=\"removeAccount(account)\">\r" +
    "\n" +
    "              Remove\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          <span uib-popover=\"{{account.address}}\" popover-trigger=\"'mouseenter'\" id=\"{{$index}}\">\r" +
    "\n" +
    "            {{account.address}}\r" +
    "\n" +
    "          </span>\r" +
    "\n" +
    "          <div class=\"pull-right\">\r" +
    "\n" +
    "            <button type=\"button\"\r" +
    "\n" +
    "              class=\"btn btn-default \"\r" +
    "\n" +
    "              ng-click=\"exportV3(account.address)\">\r" +
    "\n" +
    "              Export\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            <button class=\"btn btn-default\" type=\"button\" ngclipboard-success=\"copyAccount()\" ngclipboard data-clipboard-target=\"[id='{{$index}}']\">\r" +
    "\n" +
    "              Copy\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "      </tr>\r" +
    "\n" +
    "    </tbody>\r" +
    "\n" +
    "  </table>\r" +
    "\n" +
    "  <div ng-if=\"!account.addresses || account.addresses.length == 0\" class=\"panel-body text-center\">\r" +
    "\n" +
    "    No accounts. Add an account <a href=\"\" ng-click=\"createWallet()\">now</a>.\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/addressPopoverTemplate.html',
    "<button type='button' class='btn btn-default btn-sm'\r" +
    "\n" +
    "data-clipboard-text='{{param.value}}'\r" +
    "\n" +
    "ngclipboard>\r" +
    "\n" +
    "    <span class=\"glyphicon glyphicon-copy\"></span>\r" +
    "\n" +
    "</button>\r" +
    "\n" +
    "{{param.value}}"
  );


  $templateCache.put('src/partials/editable-select-contract-settings-tpl.html',
    "<div>\r" +
    "\n" +
    "  <div class=\"input-group dropdown\">\r" +
    "\n" +
    "      <input\r" +
    "\n" +
    "        ng-if=\"!isDisabled\"\r" +
    "\n" +
    "        name=\"editable-select\"\r" +
    "\n" +
    "        type=\"text\"\r" +
    "\n" +
    "        class=\"form-control dropdown-toggle editable-select\"\r" +
    "\n" +
    "        ng-model=\"ngModel.address\"\r" +
    "\n" +
    "        ng-disabled=\"isDisabled\"\r" +
    "\n" +
    "      />\r" +
    "\n" +
    "      <input\r" +
    "\n" +
    "        ng-if=\"isDisabled\"\r" +
    "\n" +
    "        name=\"editable-select\"\r" +
    "\n" +
    "        type=\"text\"\r" +
    "\n" +
    "        class=\"form-control dropdown-toggle editable-select\"\r" +
    "\n" +
    "        ng-model=\"ngModel.name\"\r" +
    "\n" +
    "        ng-disabled=\"isDisabled\"\r" +
    "\n" +
    "      />\r" +
    "\n" +
    "    <ul class=\"dropdown-menu settings-dropdown-menu\">\r" +
    "\n" +
    "      <li ng-repeat=\"option in options\"\r" +
    "\n" +
    "          ng-click=\"click(option)\">\r" +
    "\n" +
    "          <p>\r" +
    "\n" +
    "              <span><b>{{option.name}}</b></span><br/>\r" +
    "\n" +
    "              <span>{{option.address}}</span>\r" +
    "\n" +
    "          </p>\r" +
    "\n" +
    "      </li>\r" +
    "\n" +
    "      <li ng-if=\"other\" role=\"presentation\" class=\"divider\"></li>\r" +
    "\n" +
    "      <li ng-click=\"click(other)\">Custom configuration</li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "    <span class=\"input-group-addon dropdown-toggle settings-caret-container\" data-toggle=\"dropdown\">\r" +
    "\n" +
    "      <span class=\"caret\"></span>\r" +
    "\n" +
    "    </span>\r" +
    "\n" +
    "  </div>  \r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/editable-select-settings-tpl.html',
    "<div>\r" +
    "\n" +
    "  <div class=\"input-group dropdown\">\r" +
    "\n" +
    "      <input\r" +
    "\n" +
    "        ng-if=\"!isDisabled\"\r" +
    "\n" +
    "        name=\"editable-select\"\r" +
    "\n" +
    "        type=\"text\"\r" +
    "\n" +
    "        class=\"form-control dropdown-toggle editable-select\"\r" +
    "\n" +
    "        ng-model=\"ngModel.url\"\r" +
    "\n" +
    "        ng-disabled=\"isDisabled\"\r" +
    "\n" +
    "      />\r" +
    "\n" +
    "      <input\r" +
    "\n" +
    "        ng-if=\"isDisabled\"\r" +
    "\n" +
    "        name=\"editable-select\"\r" +
    "\n" +
    "        type=\"text\"\r" +
    "\n" +
    "        class=\"form-control dropdown-toggle editable-select\"\r" +
    "\n" +
    "        ng-model=\"ngModel.name\"\r" +
    "\n" +
    "        ng-disabled=\"isDisabled\"\r" +
    "\n" +
    "      />\r" +
    "\n" +
    "    <ul class=\"dropdown-menu settings-dropdown-menu\">\r" +
    "\n" +
    "      <li ng-repeat=\"option in options\"\r" +
    "\n" +
    "          ng-click=\"click(option)\">\r" +
    "\n" +
    "          <p>\r" +
    "\n" +
    "              <span><b>{{option.name}}</b></span><br/>\r" +
    "\n" +
    "              <span>{{option.url}}</span>\r" +
    "\n" +
    "          </p>\r" +
    "\n" +
    "      </li>\r" +
    "\n" +
    "      <li ng-if=\"other\" role=\"presentation\" class=\"divider\"></li>\r" +
    "\n" +
    "      <li ng-click=\"click(other)\">Custom configuration</li>\r" +
    "\n" +
    "    </ul>    \r" +
    "\n" +
    "    <span class=\"input-group-addon dropdown-toggle settings-caret-container\" data-toggle=\"dropdown\">\r" +
    "\n" +
    "      <span class=\"caret\"></span>\r" +
    "\n" +
    "    </span>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/multisigData.html',
    "<div class=\"tx-data\">\r" +
    "\n" +
    "  {{transactions[txId].data|limitTo:1000}}\r" +
    "\n" +
    "  <span ng-show=\"transactions[txId].data.length > 1000\">...</span>  \r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/paramValueData.html',
    "<div class=\"tx-data\">\r" +
    "\n" +
    "  {{param.value}}  \r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/settings.html',
    "<div class=\"panel panel-default\">\r" +
    "\n" +
    "  <div class=\"panel-heading\">\r" +
    "\n" +
    "    <h4>\r" +
    "\n" +
    "      Settings\r" +
    "\n" +
    "    </h4>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <form ng-submit=\"update()\">\r" +
    "\n" +
    "    <div class=\"panel-body\">\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-6 form-group\">\r" +
    "\n" +
    "          <label for=\"node\">Ethereum node</label>\r" +
    "\n" +
    "          <editable-select\r" +
    "\n" +
    "            ng-model=\"config.selectedEthereumNode\"\r" +
    "\n" +
    "            options=\"config.ethereumNodes\"\r" +
    "\n" +
    "            other=\"Custom node\"\r" +
    "\n" +
    "            template-url=\"editable-select-settings-tpl.html\">\r" +
    "\n" +
    "          </editable-select>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-6 form-group\">\r" +
    "\n" +
    "          <label for=\"wallet-factory\">Web3 provider</label>\r" +
    "\n" +
    "          <provider-list\r" +
    "\n" +
    "            default-item=\"config.wallet\"\r" +
    "\n" +
    "            selected-item=\"providers[$index].name\">\r" +
    "\n" +
    "          </provider-list>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"row\" show-hide-by-connectivity=\"offline\">\r" +
    "\n" +
    "        <div class=\"col-md-6 form-group\">\r" +
    "\n" +
    "          <label for=\"gas-limit\">Gas limit</label>\r" +
    "\n" +
    "          <input id=\"gas-limit\" type=\"number\" ng-model=\"config.gasLimit\" class=\"form-control\" />\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-6 form-group\">\r" +
    "\n" +
    "          <label for=\"gas-price\">Gas price</label>\r" +
    "\n" +
    "          <input id=\"gas-price\" type=\"number\" ng-model=\"config.gasPrice\" class=\"form-control\" />\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-6 form-group\">\r" +
    "\n" +
    "          <label for=\"wallet-factory\">Wallet factory contract</label>\r" +
    "\n" +
    "          <editable-select\r" +
    "\n" +
    "            ng-model=\"config.walletFactoryAddress\"\r" +
    "\n" +
    "            options=\"config.walletFactoryAddressList\"\r" +
    "\n" +
    "            other=\"Custom contract\"\r" +
    "\n" +
    "            template-url=\"editable-select-contract-settings-tpl.html\"\r" +
    "\n" +
    "            type=\"contract-address\">\r" +
    "\n" +
    "          </editable-select>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"panel-footer\">\r" +
    "\n" +
    "      <input type=\"submit\" class=\"btn btn-default\" value=\"Update settings\" />\r" +
    "\n" +
    "      <button type=\"button\" class=\"btn btn-default\" ng-click=\"reset()\">\r" +
    "\n" +
    "        Reset settings\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <input type=\"button\" class=\"btn btn-default\" value=\"Import wallets\" ng-click=\"showImportWalletDialog()\" />\r" +
    "\n" +
    "      <input type=\"button\" class=\"btn btn-default\" value=\"Export wallets\" ng-click=\"showExportWalletDialog()\" />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </form>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"panel panel-default\" ng-if=\"appVersion !== undefined\">\r" +
    "\n" +
    "  <div class=\"panel-heading\">\r" +
    "\n" +
    "    <h4>\r" +
    "\n" +
    "      About\r" +
    "\n" +
    "    </h4>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"panel-body\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "      <div class=\"col-md-6\">\r" +
    "\n" +
    "        App Version {{ appVersion }}\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/transactions.html',
    "<div class=\"panel panel-default\">\r" +
    "\n" +
    "  <div class=\"panel-heading\">\r" +
    "\n" +
    "    <div class=\"pull-right\">\r" +
    "\n" +
    "      <button type=\"button\" class=\"btn btn-default\" disabled-if-no-accounts\r" +
    "\n" +
    "       ng-click=\"sendTransaction()\" show-hide-by-connectivity=\"online\">\r" +
    "\n" +
    "        Send transaction\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <button type=\"button\" class=\"btn btn-default\"\r" +
    "\n" +
    "      ng-click=\"sendRawTransaction()\" show-hide-by-connectivity=\"online\">\r" +
    "\n" +
    "        Send signed transaction\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <button type=\"button\" class=\"btn btn-default\" ng-click=\"getNonce()\" show-hide-by-connectivity=\"online\">\r" +
    "\n" +
    "        Get nonce\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <button type=\"button\" class=\"btn btn-danger\" ng-disabld=\"!totalItems\" ng-click=\"removeAll()\">\r" +
    "\n" +
    "        Remove all\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <h4>\r" +
    "\n" +
    "      Transactions\r" +
    "\n" +
    "    </h4>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <table class=\"table table-hover table-bordered table-striped\">\r" +
    "\n" +
    "    <thead>\r" +
    "\n" +
    "      <tr>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Destination\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Value\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Data\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Nonce\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Mined\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Logs\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Remove\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "      </tr>\r" +
    "\n" +
    "    </thead>\r" +
    "\n" +
    "    <tbody>\r" +
    "\n" +
    "      <tr ng-repeat=\"transaction in transactions | limitTo:currentPage*itemsPerPage:itemsPerPage*(currentPage-1) track by $index\">\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          <a uib-popover=\"{{transaction.multisig || transaction.info.to}}\" popover-trigger=\"'mouseenter'\"\r" +
    "\n" +
    "          ng-href=\"{{etherscan}}/tx/{{transaction.txHash}}\" target=\"_blank\"\r" +
    "\n" +
    "          ng-bind-html=\"getDestinationOrContract(transaction) | dashIfEmpty\">\r" +
    "\n" +
    "          </a>\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "        <td ng-bind-html=\"transaction.info.value | ether | dashIfEmpty\">\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          <div ng-show=\"transaction.decodedData.title\" class=\"row\">\r" +
    "\n" +
    "            <div ng-class=\"{'col-md-8' : !transaction.toWallet && !transaction.toToken, 'col-md-12': transaction.toWallet || transaction.toToken}\">\r" +
    "\n" +
    "              <span  popover-trigger=\"'mouseenter'\" uib-popover-template=\"'partials/txData.html'\" popover-placement=\"bottom\" popover-append-to-body=\"true\">\r" +
    "\n" +
    "                {{transaction.decodedData.title}}\r" +
    "\n" +
    "              </span>\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "              <li ng-repeat=\"param in transaction.decodedData.params\" ng-show=\"!(param.name=='data') || param.value !='0x' \">\r" +
    "\n" +
    "                {{param.name}}:\r" +
    "\n" +
    "                <span popover-enable=\"param.value\" popover-trigger=\"'mouseenter'\"\r" +
    "\n" +
    "                  uib-popover-template=\"'partials/paramValueData.html'\">\r" +
    "\n" +
    "                  {{param.value|addressCanBeOwner:wallet|logParam:(param.name == 'value' && transaction.decodedData.title == 'submitTransaction')}}\r" +
    "\n" +
    "                </span>\r" +
    "\n" +
    "              </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"col-md-4\" ng-show=\"transaction.decodedData.notDecoded || transaction.decodedData.params\" ng-hide=\"transaction.toWallet\">\r" +
    "\n" +
    "              <button class=\"btn btn-default btn-sm pull-right\" ng-click=\"editABI(transaction.info.to)\">\r" +
    "\n" +
    "                Edit ABI\r" +
    "\n" +
    "              </button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "          <div class=\"text-center\" ng-show=\"!transaction.decodedData.title\">\r" +
    "\n" +
    "            -\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "        <td ng-bind-html=\"transaction.info.nonce | dashIfEmpty\">\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          <span ng-show=\"transaction.receipt\">\r" +
    "\n" +
    "            Yes\r" +
    "\n" +
    "          </span>\r" +
    "\n" +
    "          <span ng-hide=\"transaction.receipt\">\r" +
    "\n" +
    "            No\r" +
    "\n" +
    "          </span>\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          <ul ng-show=\"transaction.receipt.decodedLogs.length\">\r" +
    "\n" +
    "            <li ng-repeat=\"log in transaction.receipt.decodedLogs track by $index\">\r" +
    "\n" +
    "              {{log.name}}\r" +
    "\n" +
    "              <ul>\r" +
    "\n" +
    "                <li ng-repeat=\"param in log.events track by $index\">\r" +
    "\n" +
    "                  {{param.name}}:\r" +
    "\n" +
    "                  <span uib-popover=\"{{param.value}}\" popover-enable=\"param.value && param.value.toString().length > 7\" popover-trigger=\"'mouseenter'\">\r" +
    "\n" +
    "                    {{param.value|addressCanBeOwner|logParam:(param.name == 'value')}}\r" +
    "\n" +
    "                  </span>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "              </ul>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "          </ul>\r" +
    "\n" +
    "          <p ng-show=\"!transaction.receipt.decodedLogs.length\" class=\"text-center\">\r" +
    "\n" +
    "            -\r" +
    "\n" +
    "          </p>\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          <button class=\"btn btn-danger btn-sm\" ng-click=\"remove(transaction.txHash)\">\r" +
    "\n" +
    "            Remove\r" +
    "\n" +
    "          </button>\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "      </tr>\r" +
    "\n" +
    "    </tbody>\r" +
    "\n" +
    "  </table>\r" +
    "\n" +
    "  <div ng-hide=\"totalItems\" class=\"text-center panel-body\">\r" +
    "\n" +
    "    No transactions. Send a transaction <a href=\"\" ng-click=\"sendTransaction()\">now</a>.\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"panel-footer\">\r" +
    "\n" +
    "    <ul uib-pagination total-items=\"totalItems\" ng-model=\"currentPage\" items-per-page=\"itemsPerPage\"></ul>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/txData.html',
    "<div class=\"tx-data\">\r" +
    "\n" +
    "  {{transaction.info.input|limitTo:1000}}\r" +
    "\n" +
    "  <span ng-show=\"transaction.info.input.length > 1000\">...</span>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/wallet.html',
    "<div class=\"page-header\">\r" +
    "\n" +
    "  <h1>\r" +
    "\n" +
    "    {{wallet.name}} {{balance|ether}}\r" +
    "\n" +
    "  </h1>\r" +
    "\n" +
    "  <h5 class=\"grey\">{{wallet.address}}</h5>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<!-- Owners panel -->\r" +
    "\n" +
    "<div class=\"panel panel-default\">\r" +
    "\n" +
    "  <div class=\"panel-heading\">\r" +
    "\n" +
    "    <div class=\"pull-right\">\r" +
    "\n" +
    "      <button type=\"button\" disabled-if-no-accounts ng-click=\"removeOwnerOffline()\" class=\"btn btn-default\" show-hide-by-connectivity=\"offline\">\r" +
    "\n" +
    "        Remove offline\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <button type=\"button\" disabled-if-no-accounts ng-click=\"replaceOwnerOffline()\" class=\"btn btn-default\" show-hide-by-connectivity=\"offline\">\r" +
    "\n" +
    "        Replace offline\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <button type=\"button\" disabled-if-no-accounts ng-click=\"addOwner()\" class=\"btn btn-default\">\r" +
    "\n" +
    "        Add\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <button type=\"button\" ng-click=\"hideOwners=true\" class=\"btn btn-default\" ng-hide=\"hideOwners\">\r" +
    "\n" +
    "        <span class=\"glyphicon glyphicon-menu-up\" aria-hidden=\"true\"></span>\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <button type=\"button\" ng-click=\"hideOwners=false\" class=\"btn btn-default\" ng-show=\"hideOwners\">\r" +
    "\n" +
    "        <span class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></span>\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <h4>\r" +
    "\n" +
    "      Owners\r" +
    "\n" +
    "    </h4>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <table class=\"table table-hover table-bordered table-striped\" uib-collapse=\"hideOwners\">\r" +
    "\n" +
    "    <thead>\r" +
    "\n" +
    "      <tr>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Name\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Address\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "      </tr>\r" +
    "\n" +
    "    </thead>\r" +
    "\n" +
    "    <tbody>\r" +
    "\n" +
    "      <tr ng-repeat=\"owner in owners track by $index\">\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          {{getOwnerName(owner)}}\r" +
    "\n" +
    "          <div class=\"pull-right\">\r" +
    "\n" +
    "            <button type=\"button\" ng-click=\"editOwner(owner)\" class=\"btn btn-default btn-sm\">\r" +
    "\n" +
    "              Edit\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            <button type=\"button\" ng-click=\"replaceOwner(owner)\"\r" +
    "\n" +
    "              class=\"btn btn-default btn-sm\"\r" +
    "\n" +
    "              disabled-if-no-accounts\r" +
    "\n" +
    "              show-hide-by-connectivity=\"online\">\r" +
    "\n" +
    "              Replace\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            <button type=\"button\" ng-click=\"removeOwner(owner)\"\r" +
    "\n" +
    "              class=\"btn btn-danger btn-sm\"\r" +
    "\n" +
    "              disabled-if-no-accounts\r" +
    "\n" +
    "              show-hide-by-connectivity=\"online\"\r" +
    "\n" +
    "              ng-hide=\"owners.length == 1\">\r" +
    "\n" +
    "              Remove\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          {{owner}}\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "      </tr>\r" +
    "\n" +
    "    </tbody>\r" +
    "\n" +
    "  </table>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<!-- Tokens panel -->\r" +
    "\n" +
    "<div class=\"panel panel-default\">\r" +
    "\n" +
    "  <div class=\"panel-heading\">\r" +
    "\n" +
    "    <div class=\"pull-right\">\r" +
    "\n" +
    "      <button type=\"button\" ng-click=\"addToken()\" class=\"btn btn-default\">\r" +
    "\n" +
    "        Add\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <button type=\"button\" ng-click=\"hideTokens=true\" class=\"btn btn-default\" ng-hide=\"hideTokens\">\r" +
    "\n" +
    "        <span class=\"glyphicon glyphicon-menu-up\" aria-hidden=\"true\"></span>\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <button type=\"button\" ng-click=\"hideTokens=false\" class=\"btn btn-default\" ng-show=\"hideTokens\">\r" +
    "\n" +
    "        <span class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></span>\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <h4>\r" +
    "\n" +
    "      Tokens\r" +
    "\n" +
    "    </h4>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <table class=\"table table-hover table-bordered table-striped\" uib-collapse=\"hideTokens\">\r" +
    "\n" +
    "    <thead>\r" +
    "\n" +
    "      <tr>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Name\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Multisig balance\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Account balance\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "      </tr>\r" +
    "\n" +
    "    </thead>\r" +
    "\n" +
    "    <tbody>\r" +
    "\n" +
    "      <tr ng-repeat=\"token in wallet.tokens track by $index\">\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          {{token.name}}\r" +
    "\n" +
    "          <div class=\"pull-right\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default btn-sm\"\r" +
    "\n" +
    "            ng-click=\"editToken(token)\">\r" +
    "\n" +
    "              Edit\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-danger btn-sm\"\r" +
    "\n" +
    "            ng-click=\"removeToken(token)\">\r" +
    "\n" +
    "              Remove\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          {{token|token}}\r" +
    "\n" +
    "          <div class=\"pull-right\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default btn-sm\" disabled-if-no-accounts\r" +
    "\n" +
    "            ng-click=\"depositToken(token)\">\r" +
    "\n" +
    "              Deposit\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default btn-sm\" disabled-if-no-accounts\r" +
    "\n" +
    "            ng-click=\"withdrawToken(token)\">\r" +
    "\n" +
    "              Withdraw\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          {{userTokens[token.address]|token}}\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "      </tr>\r" +
    "\n" +
    "    </tbody>\r" +
    "\n" +
    "  </table>\r" +
    "\n" +
    "  <div ng-show=\"!totalTokens\" class=\"panel-body text-center\" uib-collapse=\"hideTokens\">\r" +
    "\n" +
    "    No tokens. Add an ERC20 token <a href=\"\" ng-click=\"addToken()\">now</a>.\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<!-- Multisig transactions panel -->\r" +
    "\n" +
    "<div class=\"panel panel-default\">\r" +
    "\n" +
    "  <div class=\"panel-heading\">\r" +
    "\n" +
    "    <div class=\"pull-right form-inline\">\r" +
    "\n" +
    "      <button type=\"button\" class=\"btn btn-default\" disabled-if-no-accounts\r" +
    "\n" +
    "      ng-click=\"confirmMultisigTransactionOffline()\" show-hide-by-connectivity=\"offline\">\r" +
    "\n" +
    "        Confirm offline\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <button type=\"button\" class=\"btn btn-default\" disabled-if-no-accounts\r" +
    "\n" +
    "      ng-click=\"revokeMultisigTransactionOffline()\" show-hide-by-connectivity=\"offline\">\r" +
    "\n" +
    "        Revoke offline\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <button type=\"button\" class=\"btn btn-default\" disabled-if-no-accounts\r" +
    "\n" +
    "      ng-click=\"executeMultisigTransactionOffline()\" show-hide-by-connectivity=\"offline\">\r" +
    "\n" +
    "        Execute offline\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <button type=\"button\" class=\"btn btn-default\" disabled-if-no-accounts\r" +
    "\n" +
    "      ng-click=\"addTransaction()\">\r" +
    "\n" +
    "        Add\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <select class=\"form-control\" ng-model=\"showTxs\" ng-change=\"updateParams()\">\r" +
    "\n" +
    "        <option value=\"all\">\r" +
    "\n" +
    "          All\r" +
    "\n" +
    "        </option>\r" +
    "\n" +
    "        <option value=\"pending\">\r" +
    "\n" +
    "          Pending\r" +
    "\n" +
    "        </option>\r" +
    "\n" +
    "        <option value=\"executed\">\r" +
    "\n" +
    "          Executed\r" +
    "\n" +
    "        </option>\r" +
    "\n" +
    "      </select>\r" +
    "\n" +
    "      <select class=\"form-control\" ng-change=\"updateTransactions()\" ng-model=\"itemsPerPage\" convert-to-number>\r" +
    "\n" +
    "        <option value=\"5\">\r" +
    "\n" +
    "          5/p\r" +
    "\n" +
    "        </option>\r" +
    "\n" +
    "        <option value=\"10\">\r" +
    "\n" +
    "          10/p\r" +
    "\n" +
    "        </option>\r" +
    "\n" +
    "        <option value=\"20\">\r" +
    "\n" +
    "          20/p\r" +
    "\n" +
    "        </option>\r" +
    "\n" +
    "      </select>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <h4>\r" +
    "\n" +
    "      Multisig transactions\r" +
    "\n" +
    "    </h4>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <table class=\"table table-hover table-bordered table-striped\">\r" +
    "\n" +
    "    <thead>\r" +
    "\n" +
    "      <tr>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          ID\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Destination\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Value\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Data/Subject\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Confirmations\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Executed\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "      </tr>\r" +
    "\n" +
    "    </thead>\r" +
    "\n" +
    "    <tbody>\r" +
    "\n" +
    "      <tr ng-repeat=\"txId in txIds track by $index\">\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          {{txId|bigNumber}}\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          <div uib-popover=\"{{transactions[txId].to}}\" popover-enable=\"'true'\" popover-trigger=\"'mouseenter'\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default btn-sm\"\r" +
    "\n" +
    "              data-clipboard-text=\"{{transactions[txId].to}}\"\r" +
    "\n" +
    "              ngclipboard>\r" +
    "\n" +
    "              <span class=\"glyphicon glyphicon-copy\"></span>\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            {{transactions[txId].destination}}\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          {{transactions[txId].value|ether}}\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          <div class=\"text-center\" ng-show=\"!transactions[txId].dataDecoded.title\">\r" +
    "\n" +
    "            -\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "          <div class=\"row\">\r" +
    "\n" +
    "            <div ng-class=\"{'col-md-8': transactions[txId].dataDecoded.notDecoded || transactions[txId].dataDecoded.params, 'col-md-12': !transactions[txId].dataDecoded.notDecoded && !transactions[txId].dataDecoded.params}\">\r" +
    "\n" +
    "              <span popover-trigger=\"'mouseenter'\" uib-popover-template=\"'partials/multisigData.html'\" popover-placement=\"bottom\" popover-append-to-body=\"true\" popover-enable=\"transactions[txId].data != '0x'\">\r" +
    "\n" +
    "                {{transactions[txId].dataDecoded.title}}\r" +
    "\n" +
    "              </span>\r" +
    "\n" +
    "              <ul>\r" +
    "\n" +
    "                <li ng-repeat=\"param in transactions[txId].dataDecoded.params\">\r" +
    "\n" +
    "                  {{param.name}}:\r" +
    "\n" +
    "                  <span uib-popover-template=\"'partials/addressPopoverTemplate.html'\" popover-enable=\"param.value && param.value.toString().length > 7\" popover-trigger=\"'click'\" class=\"pointer\">\r" +
    "\n" +
    "                    {{param.value|addressCanBeOwner:wallet|addressCanBeToken:wallet|logParam}}\r" +
    "\n" +
    "                  </span>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "              </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-class=\"{'col-md-4': transactions[txId].dataDecoded.notDecoded || transactions[txId].dataDecoded.params}\" ng-show=\"transactions[txId].dataDecoded.notDecoded || transactions[txId].dataDecoded.params\">\r" +
    "\n" +
    "              <button class=\"btn btn-default btn-sm pull-right\" ng-click=\"editABI(transactions[txId].to)\">\r" +
    "\n" +
    "                Edit ABI\r" +
    "\n" +
    "              </button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          <div class=\"row\">\r" +
    "\n" +
    "            <div ng-class=\"{'col-md-12' : transactions[txId].executed, 'col-md-6' : !transactions[txId].executed}\">\r" +
    "\n" +
    "              <ul ng-repeat=\"owner in transactions[txId].confirmations\">\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                  {{wallet.owners[owner].name}}\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "              </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-hide=\"transactions[txId].executed || transactions[txId].confirmed\" ng-class=\"{'col-md-12' : !transactions[txId].confirmations.length, 'col-md-6' : transactions[txId].confirmations.length}\">\r" +
    "\n" +
    "              <button type=\"button\" class=\"btn btn-default btn-sm pull-right\"\r" +
    "\n" +
    "                ng-hide=\"transactions[txId].executed || transactions[txId].confirmed\"\r" +
    "\n" +
    "                ng-click=\"confirmTransaction(txId)\"\r" +
    "\n" +
    "                disabled-if-no-accounts\r" +
    "\n" +
    "                show-hide-by-connectivity=\"online\">\r" +
    "\n" +
    "                Confirm\r" +
    "\n" +
    "              </button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"col-md-6\" ng-show=\"transactions[txId].confirmed && !transactions[txId].executed\">\r" +
    "\n" +
    "              <button type=\"button\" class=\"btn btn-default btn-sm pull-right\"\r" +
    "\n" +
    "                  ng-show=\"transactions[txId].confirmed && !transactions[txId].executed\"\r" +
    "\n" +
    "                  ng-click=\"revokeConfirmation(txId)\"\r" +
    "\n" +
    "                  disabled-if-no-accounts\r" +
    "\n" +
    "                  show-hide-by-connectivity=\"online\">\r" +
    "\n" +
    "                Revoke confirmation\r" +
    "\n" +
    "              </button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          <div class=\"row\">\r" +
    "\n" +
    "            <div ng-class=\"{'col-md-12' : transactions[txId].executed, 'col-md-6' : !transactions[txId].executed}\">\r" +
    "\n" +
    "              <span ng-show=\"transactions[txId].executed\">\r" +
    "\n" +
    "                Yes\r" +
    "\n" +
    "              </span>\r" +
    "\n" +
    "              <span ng-hide=\"transactions[txId].executed\">\r" +
    "\n" +
    "                No\r" +
    "\n" +
    "              </span>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"col-md-6\" ng-show=\"!transactions[txId].executed && transactions[txId].confirmations.length == confirmations\">\r" +
    "\n" +
    "              <button type=\"button\" class=\"pull-right btn btn-default btn-sm pull-right\"\r" +
    "\n" +
    "                ng-show=\"!transactions[txId].executed && transactions[txId].confirmations.length == confirmations\"\r" +
    "\n" +
    "                ng-click=\"executeTransaction(txId)\"\r" +
    "\n" +
    "                disabled-if-no-accounts\r" +
    "\n" +
    "                show-hide-by-connectivity=\"online\">\r" +
    "\n" +
    "                Execute\r" +
    "\n" +
    "              </button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "      </tr>\r" +
    "\n" +
    "    </tbody>\r" +
    "\n" +
    "  </table>\r" +
    "\n" +
    "  <div ng-hide=\"totalItems\" class=\"panel-body text-center\">\r" +
    "\n" +
    "    No multisig transactions. Send a multisig transaction <a href=\"\" ng-click=\"addTransaction()\">now</a>.\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"panel-footer\">\r" +
    "\n" +
    "    <ul uib-pagination total-items=\"totalItems\" ng-model=\"currentPage\" ng-change=\"updateTransactions()\" items-per-page=\"itemsPerPage\"></ul>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/wallets.html',
    "<div class=\"panel panel-default\">\r" +
    "\n" +
    "  <div class=\"panel-heading\">\r" +
    "\n" +
    "    <div class=\"pull-right\">\r" +
    "\n" +
    "      <button type=\"button\" class=\"btn btn-default\" ng-click=\"newWalletSelect()\">\r" +
    "\n" +
    "        Add\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <h4>\r" +
    "\n" +
    "      Wallets\r" +
    "\n" +
    "    </h4>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <table class=\"table table-hover table-bordered table-striped\">\r" +
    "\n" +
    "    <thead>\r" +
    "\n" +
    "      <tr>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Name\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Address\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Balance\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Required confirmations\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Daily limit\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "          Limit for today\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "      </tr>\r" +
    "\n" +
    "    </thead>\r" +
    "\n" +
    "    <tbody>\r" +
    "\n" +
    "      <tr ng-repeat=\"(walletAddress, wallet) in wallets|objectToArray|limitTo:itemsPerPage:itemsPerPage*(currentPage-1) track by $index\">\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          <span ng-if=\"!wallet.isOnChain\" show-hide-by-connectivity=\"online\"\r" +
    "\n" +
    "            uib-popover=\"This wallet was created on another chain\" popover-trigger=\"'mouseenter'\"\r" +
    "\n" +
    "            class=\"not-on-chain-wallet pull-left glyphicon glyphicon-exclamation-sign\"></span>\r" +
    "\n" +
    "          <a ng-href=\"#/wallet/{{wallet.address}}\" ng-bind-html=\"wallet.name | dashIfEmpty\"></a>\r" +
    "\n" +
    "          <div class=\"pull-right form-inline\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"editWallet(wallet)\"\r" +
    "\n" +
    "              disabled-if-no-accounts-or-wallet-available=\"{{wallet.address}}\">\r" +
    "\n" +
    "              Edit\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-danger btn-sm\" ng-click=\"removeWallet(wallet.address)\">\r" +
    "\n" +
    "              Remove\r" +
    "\n" +
    "            </button>            \r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          <div uib-popover=\"{{wallet.address}}\" popover-trigger=\"'mouseenter'\">\r" +
    "\n" +
    "            {{::wallet.address|address}}\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default btn-sm pull-right\"\r" +
    "\n" +
    "              disabled-if-no-accounts-or-wallet-available=\"{{wallet.address}}\"\r" +
    "\n" +
    "              data-clipboard-text=\"{{wallet.address}}\"\r" +
    "\n" +
    "              ngclipboard>\r" +
    "\n" +
    "              Copy\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          <span value-or-dash-by-connectivity=\"{{wallet.balance|ether}}\">{{wallet.balance|ether}}</span>\r" +
    "\n" +
    "          <button type=\"button\" disabled-if-no-accounts-or-wallet-available=\"{{wallet.address}}\"\r" +
    "\n" +
    "            class=\"btn btn-default btn-sm pull-right\"\r" +
    "\n" +
    "            ng-click=\"deposit(wallet)\">\r" +
    "\n" +
    "            Deposit\r" +
    "\n" +
    "          </button>\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          <span class=\"col-xs-9\" value-or-dash-by-connectivity=\"{{wallet.confirmations|bigNumber|dashIfEmpty}}\"></span>\r" +
    "\n" +
    "          <button type=\"button\" disabled-if-no-accounts-or-wallet-available=\"{{wallet.address}}\"\r" +
    "\n" +
    "            class=\"btn btn-default btn-sm col-xs-3\"\r" +
    "\n" +
    "            ng-click=\"setRequired(wallet)\">\r" +
    "\n" +
    "            Edit\r" +
    "\n" +
    "          </button>\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          <span value-or-dash-by-connectivity=\"{{wallet.limit|ether}}\">{{wallet.limit|ether}}</span>\r" +
    "\n" +
    "          <button type=\"button\" disabled-if-no-accounts-or-wallet-available=\"{{wallet.address}}\"\r" +
    "\n" +
    "            class=\"btn btn-default btn-sm pull-right\"\r" +
    "\n" +
    "            ng-click=\"setLimit(wallet)\">\r" +
    "\n" +
    "            Edit\r" +
    "\n" +
    "          </button>\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "        <td>\r" +
    "\n" +
    "          <span value-or-dash-by-connectivity=\"{{wallet.maxWithdraw|ether}}\">{{wallet.maxWithdraw|ether}}</span>\r" +
    "\n" +
    "          <button type=\"button\" disabled-if-no-accounts-or-wallet-available=\"{{wallet.address}}\"\r" +
    "\n" +
    "            class=\"btn btn-default btn-sm pull-right\"\r" +
    "\n" +
    "            data-action=\"withdraw\"\r" +
    "\n" +
    "            ng-click=\"withdrawLimit(wallet)\">\r" +
    "\n" +
    "            Withdraw\r" +
    "\n" +
    "          </button>\r" +
    "\n" +
    "        </td>\r" +
    "\n" +
    "      </tr>\r" +
    "\n" +
    "    </tbody>\r" +
    "\n" +
    "  </table>\r" +
    "\n" +
    "  <div ng-hide=\"totalItems\" class=\"panel-body text-center\">\r" +
    "\n" +
    "    No wallets. Add wallet <a href=\"\" ng-click=\"newWalletSelect()\">now</a>.\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/addLightWalletAccount.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Add account\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "  <div class=\"modal-body\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <p class=\"top-20\">Please enter a password to securely encrypt your wallet.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <form name=\"password_form\" novalidate ng-submit=\"createWallet()\">\r" +
    "\n" +
    "      <div>\r" +
    "\n" +
    "        <input type=\"password\" ng-model=\"account.password\" ng-minlength=\"8\"\r" +
    "\n" +
    "          name=\"password\" required=\"\" placeholder=\"Password\" class=\"form-control\">\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div ng-show=\"password_form.$submitted || password_form.password.$touched\">\r" +
    "\n" +
    "        <div class=\"alert-fail\" ng-show=\"password_form.password.$error.required\">A password must be entered.</div>\r" +
    "\n" +
    "        <div class=\"alert-fail\" ng-show=\"password_form.password.$error.minlength\">A password should contain at least 8 characters.</div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <div class=\"top-10\">\r" +
    "\n" +
    "        <input type=\"password\" ng-model=\"account.password_repeat\" match=\"account.password\"\r" +
    "\n" +
    "          name=\"password_repeat\" required=\"\" placeholder=\"Repeat password\" class=\"form-control\"\r" +
    "\n" +
    "          ng-disabled=\"!isObjectEmpty(password_form.password.$error)\">\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <div ng-show=\"password_form.$submitted || password_form.password_repeat.$touched\">\r" +
    "\n" +
    "        <div class=\"alert-fail\" ng-show=\"password_form.password_repeat.$error.required\">Enter the same password again.</div>\r" +
    "\n" +
    "        <div class=\"alert-fail\" ng-show=\"password_form.password_repeat.$error.mismatch\">Passwords do not match.</div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <p class=\"top-20\">Please enter a name for the account.</p>\r" +
    "\n" +
    "      <div class=\"top-10\">\r" +
    "\n" +
    "        <input type=\"text\" ng-model=\"account.name\" ng-minlength=\"1\"\r" +
    "\n" +
    "          name=\"name\" required=\"\" placeholder=\"Account name\" class=\"form-control\"\r" +
    "\n" +
    "          ng-disabled=\"!isObjectEmpty(password_form.password_repeat.$error)\">\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <div ng-show=\"password_form.$submitted || password_form.name.$touched\">\r" +
    "\n" +
    "        <div class=\"alert-fail\" ng-show=\"password_form.name.$error.required\">A name for the account must be entered.</div>\r" +
    "\n" +
    "        <div class=\"alert-fail\" ng-show=\"password_form.name.$error.minlength\">The name should contain at least 1 character.</div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <button type=\"submit\" class=\"btn btn-success\"\r" +
    "\n" +
    "      ng-disabled=\"password_form.$invalid\"\r" +
    "\n" +
    "      ng-click=\"ok()\"\r" +
    "\n" +
    "      ng-show=\"!showLoadingSpinner\">\r" +
    "\n" +
    "      Create Account\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-success\"\r" +
    "\n" +
    "      ng-show=\"showLoadingSpinner\"\r" +
    "\n" +
    "      disabled>\r" +
    "\n" +
    "      <i class=\"fa fa-spinner fa-spin\"></i>\r" +
    "\n" +
    "      Creating...\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"cancel()\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<!--<div ng-if=\"hasKeystore\">\r" +
    "\n" +
    "  <div class=\"modal-body\">\r" +
    "\n" +
    "    <form name=\"account_form\" novalidate>\r" +
    "\n" +
    "      <p class=\"top-20\">Please enter a name for the account.</p>\r" +
    "\n" +
    "      <div class=\"top-10\">\r" +
    "\n" +
    "        <input type=\"text\" ng-model=\"account.name\" ng-minlength=\"1\"\r" +
    "\n" +
    "          name=\"name\" required=\"\" placeholder=\"Account name\" class=\"form-control\">\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div ng-show=\"account_form.name.$invalid && !account_form.name.$pristine\">\r" +
    "\n" +
    "        <div class=\"alert-fail\" ng-show=\"account_form.name.$error.required\">A name for the account must be entered.</div>\r" +
    "\n" +
    "        <div class=\"alert-fail\" ng-show=\"account_form.name.$error.minlength\">The name should contain at least 1 character.</div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <p class=\"top-20\">Provide your password.</p>\r" +
    "\n" +
    "      <div class=\"top-10\">\r" +
    "\n" +
    "        <input type=\"password\" ng-model=\"account.password\" ng-minlength=\"8\"\r" +
    "\n" +
    "          name=\"password\" required=\"\" placeholder=\"Password\" class=\"form-control\"\r" +
    "\n" +
    "          ng-disabled=\"!isObjectEmpty(account_form.name.$error)\">\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div ng-show=\"account_form.password.$invalid && !account_form.password.$pristine\">\r" +
    "\n" +
    "        <div class=\"alert-fail\" ng-show=\"account_form.password.$error.required\">A password must be entered.</div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <button type=\"submit\" class=\"btn btn-success\"\r" +
    "\n" +
    "      ng-disabled=\"account_form.$invalid\"\r" +
    "\n" +
    "      ng-click=\"newAccount()\"\r" +
    "\n" +
    "      ng-show=\"!showLoadingSpinner\">\r" +
    "\n" +
    "      Create Account\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-success\"\r" +
    "\n" +
    "      ng-show=\"showLoadingSpinner\"\r" +
    "\n" +
    "      disabled>\r" +
    "\n" +
    "      <i class=\"fa fa-spinner fa-spin\"></i>\r" +
    "\n" +
    "      Creating...\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"cancel()\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>-->\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/addOwner.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Add owner\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "  <div class=\"form-group\">\r" +
    "\n" +
    "    <label for=\"name\">Name</label>\r" +
    "\n" +
    "    <input id=\"name\" type=\"text\" class=\"form-control\" ng-model=\"owner.name\" required />\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"form-group\">\r" +
    "\n" +
    "    <label for=\"address\">Address</label>\r" +
    "\n" +
    "    <input id=\"address\" type=\"text\" class=\"form-control\" ng-model=\"owner.address\" required />\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button class=\"btn btn-default\" type=\"button\" ng-click=\"ok()\" ng-disabled=\"!owner.address.length > 0\">\r" +
    "\n" +
    "    Ok\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "    Cancel\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/addWalletOwner.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Add owner\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form class=\"form\" name=\"form\">\r" +
    "\n" +
    "  <div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"form-group\" show-hide-by-connectivity=\"online\">\r" +
    "\n" +
    "      <label for=\"name\">Name</label>\r" +
    "\n" +
    "      <input id=\"name\" type=\"text\" class=\"form-control\" ng-model=\"owner.name\" />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"address\">Address</label>\r" +
    "\n" +
    "      <input id=\"address\" type=\"text\" class=\"form-control\" ng-model=\"owner.address\" required />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-default\" type=\"button\" ng-disabled=\"form.$invalid\"\r" +
    "\n" +
    "      disabled-if-invalid-address=\"{{owner.address}}\"\r" +
    "\n" +
    "      ng-click=\"send()\" show-hide-by-connectivity=\"online\">\r" +
    "\n" +
    "      Send multisig transaction\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button class=\"btn btn-default\" type=\"button\" ng-disabled=\"form.$invalid\" ng-click=\"sign()\" show-hide-by-connectivity=\"offline\">\r" +
    "\n" +
    "      Sign offline\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/askLightWalletPassword.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    {{title ? title : 'Add wallet'}}\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "  <form name=\"password_form\" novalidate>\r" +
    "\n" +
    "    <p class=\"top-20\">Please enter your password.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div ng-show=\"!hasError\" class=\"top-10\">\r" +
    "\n" +
    "      <input type=\"password\" ng-model=\"password\" ng-minlength=\"8\"\r" +
    "\n" +
    "        call-func-on-key-enter=\"ok()\"\r" +
    "\n" +
    "        name=\"password\" required=\"\" placeholder=\"Password\" class=\"form-control\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div ng-show=\"hasError\" class=\"has-error has-feedback top-10\">\r" +
    "\n" +
    "      <input type=\"password\" ng-model=\"password\" ng-minlength=\"8\"\r" +
    "\n" +
    "        call-func-on-key-enter=\"ok()\"\r" +
    "\n" +
    "        name=\"password\" required=\"\" placeholder=\"Password\" class=\"form-control\">\r" +
    "\n" +
    "      <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>      \r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </form>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"modal-footer top-20\">\r" +
    "\n" +
    "  <button type=\"submit\" class=\"btn btn-success\"\r" +
    "\n" +
    "    ng-disabled=\"password_form.$invalid\"\r" +
    "\n" +
    "    ng-click=\"ok()\"\r" +
    "\n" +
    "    ng-show=\"!showLoadingSpinner\">\r" +
    "\n" +
    "    Ok\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button type=\"button\" class=\"btn btn-success\"\r" +
    "\n" +
    "    ng-show=\"showLoadingSpinner\"\r" +
    "\n" +
    "    disabled>\r" +
    "\n" +
    "    <i class=\"fa fa-spinner fa-spin\"></i>\r" +
    "\n" +
    "    Executing...\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button class=\"btn btn-danger\" ng-click=\"cancel()\">\r" +
    "\n" +
    "    Cancel\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/chooseWeb3Wallet.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <div class=\"bootstrap-dialog-header\">\r" +
    "\n" +
    "    <div class=\"bootstrap-dialog-title\">\r" +
    "\n" +
    "      Select a Web3 wallet provider\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "  <div class=\"col-lg-3 col-md-3 col-xs-12\">\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"ok('ledger')\">\r" +
    "\n" +
    "      <h4>\r" +
    "\n" +
    "        Ledger wallet\r" +
    "\n" +
    "      </h4>\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"col-lg-3 col-md-3 col-xs-12\">\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"ok('lightwallet')\">\r" +
    "\n" +
    "      <h4>\r" +
    "\n" +
    "        Light wallet\r" +
    "\n" +
    "      </h4>\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"col-lg-3 col-md-3 col-xs-12\">\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"ok('trezor')\">\r" +
    "\n" +
    "      <h4>\r" +
    "\n" +
    "        Trezor wallet\r" +
    "\n" +
    "      </h4>\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"col-lg-3 col-md-3 col-xs-12\">\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"ok('remotenode')\">\r" +
    "\n" +
    "      <h4>\r" +
    "\n" +
    "        Remote node\r" +
    "\n" +
    "      </h4>\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/partials/modals/configureGas.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h3 class=\"modal-title\">\r" +
    "\n" +
    "      Configure Gas\r" +
    "\n" +
    "    </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form class=\"form\" name=\"form\">\r" +
    "\n" +
    "    <div class=\"modal-body\">\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"value\">Gas limit:</label>\r" +
    "\n" +
    "            <input id=\"value\" type=\"number\" class=\"form-control\" ng-model=\"gasLimit\" step=\"any\" ng-change=\"calculateFee()\"\r" +
    "\n" +
    "                ng-min=\"minimumGasLimit\" max=\"999999999999999\" required >\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"value\">Gas price (GWei):</label>\r" +
    "\n" +
    "            <input id=\"value\" type=\"number\" class=\"form-control\" ng-model=\"gasPrice\" step=\"any\" min=\"0\" ng-change=\"calculateFee()\" \r" +
    "\n" +
    "                max=\"999999999999999\" required >\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"value\">Tx fees (ETH):</label>\r" +
    "\n" +
    "            <input id=\"value\" disabled type=\"number\" class=\"form-control\" ng-model=\"txFee\" step=\"any\" min=\"0\" max=\"999999999999999\" required >\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"modal-footer\">\r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-default\" ng-click=\"send()\" ng-disabled=\"form.$invalid\">\r" +
    "\n" +
    "            Send transaction\r" +
    "\n" +
    "        </button>  \r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-danger\" ng-click=\"cancel()\">\r" +
    "\n" +
    "            Cancel\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</form>"
  );


  $templateCache.put('src/partials/modals/confirmTransaction.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Confirm transaction\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button type=\"button\" class=\"btn btn-default\" ng-click=\"send()\">\r" +
    "\n" +
    "    Send transaction\r" +
    "\n" +
    "  </button>  \r" +
    "\n" +
    "  <button type=\"button\" class=\"btn btn-danger\" ng-click=\"cancel()\">\r" +
    "\n" +
    "    Cancel\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/confirmTransactionOffline.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Confirm transaction offline\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form ng-submit=\"signOffline()\">\r" +
    "\n" +
    "  <div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"nonce\">Transaction ID</label>\r" +
    "\n" +
    "      <input type=\"number\" class=\"form-control\" ng-model=\"transactionId\" required \\>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <input class=\"btn btn-default\" type=\"submit\" value=\"Confirm offline\" />\r" +
    "\n" +
    "    <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/deposit.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Deposit\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form class=\"form\" name=\"form\">\r" +
    "\n" +
    "  <div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"value\">Amount (ETH):</label>\r" +
    "\n" +
    "      <input id=\"value\" type=\"number\" class=\"form-control\" ng-model=\"amount\" step=\"any\" min=\"0\" max=\"999999999999999\" required >\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <button type=\"button\" ng-click=\"deposit()\" ng-disabled=\"form.$invalid\" class=\"btn btn-default\" show-hide-by-connectivity=\"online\">\r" +
    "\n" +
    "      Send transaction\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button type=\"button\" ng-click=\"sign()\" ng-disabled=\"form.$invalid\" class=\"btn btn-default\" show-hide-by-connectivity=\"offline\">\r" +
    "\n" +
    "      Sign offline\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-danger\" ng-click=\"cancel()\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/depositToken.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Deposit token\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form class=\"form\" name=\"form\">\r" +
    "\n" +
    "  <div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"value\">Amount ({{token.symbol}}):</label>\r" +
    "\n" +
    "      <input id=\"value\" type=\"number\" class=\"form-control\" ng-model=\"amount\" step=\"any\" min=\"0\" max=\"999999999999999\" required>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <button type=\"button\" ng-click=\"deposit()\" class=\"btn btn-default\" show-hide-by-connectivity=\"online\" ng-disabled=\"form.$invalid\">\r" +
    "\n" +
    "      Send transaction\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button type=\"button\" ng-click=\"sign()\" class=\"btn btn-default\" show-hide-by-connectivity=\"offline\" ng-disabled=\"form.$invalid\">\r" +
    "\n" +
    "      Sign offline\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-danger\" ng-click=\"cancel()\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/disclaimer.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <div class=\"bootstrap-dialog-header\">\r" +
    "\n" +
    "    <div class=\"bootstrap-dialog-title\">Terms of Use and Privacy Policy</div>\r" +
    "\n" +
    "  </div>  \r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "  <p>\r" +
    "\n" +
    "      For using the application, you have to agree with our <a href=\"/TermsofUseMultisig.pdf\" target=\"_blank\" >Terms of Use</a> and <a href=\"{{ websites.gnosis }}/assets/pdf/PrivacyPolicyGnosisLtd.pdf\" target=\"_blank\">Privacy Policy</a>.\r" +
    "\n" +
    "  </p>\r" +
    "\n" +
    "  <p>\r" +
    "\n" +
    "    Don't use the wallet hosted at\r" +
    "\n" +
    "    <a href=\"{{ websites.wallet }}\" class=\"prevent-focus\" target=\"_blank\">{{ websites.wallet }}</a> to sign transactions.\r" +
    "\n" +
    "    Use <a href=\"{{ websites.wallet }}\" target=\"_blank\">{{ websites.wallet }}</a> only to\r" +
    "\n" +
    "    check the status of your wallet. Use a locally installed version for signing.\r" +
    "\n" +
    "    A version can be obtained <a href=\"https://github.com/gnosis/MultiSigWallet/releases\" target=\"_blank\">here</a>.\r" +
    "\n" +
    "  </p>\r" +
    "\n" +
    "  <p>\r" +
    "\n" +
    "    All smart contracts have been audited carefully multiple times.\r" +
    "\n" +
    "    However, all contracts are <strong>WITHOUT ANY WARRANTY;</strong> without even\r" +
    "\n" +
    "    the implied warranty of <strong>MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE</strong>.\r" +
    "\n" +
    "  </p>\r" +
    "\n" +
    "  <p>\r" +
    "\n" +
    "    Use at your own risk.\r" +
    "\n" +
    "  </p>\r" +
    "\n" +
    "  <div class=\"checkbox\">\r" +
    "\n" +
    "      <label>\r" +
    "\n" +
    "        <input type=\"checkbox\" ng-model=\"termsOfUse\">\r" +
    "\n" +
    "        I have read and understood the Terms of Use\r" +
    "\n" +
    "      </label>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"checkbox\">\r" +
    "\n" +
    "      <label>\r" +
    "\n" +
    "        <input type=\"checkbox\" ng-model=\"privacyPolicy\">\r" +
    "\n" +
    "        I have read and understood the Privacy Policy\r" +
    "\n" +
    "      </label>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  \r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button type=\"button\" ng-click=\"ok()\" class=\"btn btn-default\" id=\"terms-button\" ng-disabled=\"!termsOfUse || !privacyPolicy\">\r" +
    "\n" +
    "    Continue\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/disclaimerElectron.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <div class=\"bootstrap-dialog-header\">\r" +
    "\n" +
    "      <div class=\"bootstrap-dialog-title\">Terms of Use and Privacy Policy</div>\r" +
    "\n" +
    "    </div>  \r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-body\">\r" +
    "\n" +
    "    <p>\r" +
    "\n" +
    "        For using the application, you have to agree with our <a ng-click=\"openTerms()\">Terms of Use</a> and <a ng-click=\"openPolicy()\">Privacy Policy.</a>\r" +
    "\n" +
    "    </p>\r" +
    "\n" +
    "    <p>\r" +
    "\n" +
    "      All smart contracts have been audited carefully multiple times.\r" +
    "\n" +
    "      However, all contracts are <strong>WITHOUT ANY WARRANTY;</strong> without even\r" +
    "\n" +
    "      the implied warranty of <strong>MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE</strong>.\r" +
    "\n" +
    "    </p>\r" +
    "\n" +
    "    <p>\r" +
    "\n" +
    "      Use at your own risk.\r" +
    "\n" +
    "    </p>\r" +
    "\n" +
    "    <div class=\"checkbox\">\r" +
    "\n" +
    "        <label>\r" +
    "\n" +
    "          <input type=\"checkbox\" ng-model=\"termsOfUse\">\r" +
    "\n" +
    "          I have read and understood the Terms of Use\r" +
    "\n" +
    "        </label>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"checkbox\">\r" +
    "\n" +
    "        <label>\r" +
    "\n" +
    "          <input type=\"checkbox\" ng-model=\"privacyPolicy\">\r" +
    "\n" +
    "          I have read and understood the Privacy Policy\r" +
    "\n" +
    "        </label>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "  \r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <button type=\"button\" ng-click=\"ok()\" class=\"btn btn-default\" id=\"terms-button\" ng-disabled=\"!termsOfUse || !privacyPolicy\">\r" +
    "\n" +
    "      Continue\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  "
  );


  $templateCache.put('src/partials/modals/editABI.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Edit ABI\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "  <div class=\"form-group\">\r" +
    "\n" +
    "    <label for=\"name\">Contract name</label>\r" +
    "\n" +
    "    <input type=\"text\" class=\"form-control\" ng-model=\"name\" name=\"name\" />\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"form-group\">\r" +
    "\n" +
    "    <label for=\"abi\">ABI</label>\r" +
    "\n" +
    "    <textarea rows=\"5\" id=\"abi\" type=\"text\" class=\"form-control\" ng-model=\"abi\" required >\r" +
    "\n" +
    "    </textarea>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button class=\"btn btn-default\" type=\"button\" ng-click=\"ok()\">\r" +
    "\n" +
    "    Ok\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "    Cancel\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/editLightWalletAccount.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Edit account\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <form name=\"edit_form\" novalidate>\r" +
    "\n" +
    "    <div>\r" +
    "\n" +
    "      <input type=\"text\" ng-model=\"account.new_name\" ng-minlength=\"1\"\r" +
    "\n" +
    "        name=\"name\" required=\"\" placeholder=\"Name\" class=\"form-control\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"top-10\">\r" +
    "\n" +
    "      <input type=\"text\" ng-model=\"account.address\"\r" +
    "\n" +
    "        name=\"address\" required=\"\" class=\"form-control\" disabled>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </form>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button type=\"submit\" class=\"btn btn-success\"\r" +
    "\n" +
    "    ng-disabled=\"edit_form.$invalid\"\r" +
    "\n" +
    "    ng-click=\"ok()\">\r" +
    "\n" +
    "    Update\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button class=\"btn btn-danger\" ng-click=\"cancel()\">\r" +
    "\n" +
    "    Cancel\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/editOwner.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Edit owner\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "  <div class=\"form-group\">\r" +
    "\n" +
    "    <label for=\"name\">Name</label>\r" +
    "\n" +
    "    <input id=\"name\" type=\"text\" class=\"form-control\" ng-model=\"owner.name\" required />\r" +
    "\n" +
    "  </div>  \r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button class=\"btn btn-default\" type=\"button\" ng-click=\"ok()\">\r" +
    "\n" +
    "    Ok\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "    Cancel\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/editToken.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Add/edit token\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form name=\"form\" class=\"form\">\r" +
    "\n" +
    "  <div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"address\">Address</label>\r" +
    "\n" +
    "      <input id=\"address\" type=\"text\" class=\"form-control\" ng-min=\"40\" ng-change=\"updateInfo()\"\r" +
    "\n" +
    "      ng-model=\"editToken.address\" ng-disabled=\"editMode\" required />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"name\">Name</label>\r" +
    "\n" +
    "      <input id=\"name\" type=\"text\" class=\"form-control\" ng-disabled=\"!editToken.address\" ng-model=\"editToken.name\" required />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"symbol\">Symbol</label>\r" +
    "\n" +
    "      <input id=\"symbol\" type=\"text\" class=\"form-control\" ng-disabled=\"!editToken.address\" ng-model=\"editToken.symbol\" required />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"decimals\">Decimals</label>\r" +
    "\n" +
    "      <input id=\"decimals\" type=\"number\" class=\"form-control\" ng-disabled=\"!editToken.address\" ng-model=\"editToken.decimals\" min=\"0\" required />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-default\" type=\"button\" ng-click=\"ok()\"\r" +
    "\n" +
    "      disabled-if-invalid-address=\"{{editToken.address}}\"\r" +
    "\n" +
    "      ng-disabled=\"form.$invalid\">\r" +
    "\n" +
    "      Ok\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/editWallet.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Edit wallet\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form class=\"form\" name=\"form\">\r" +
    "\n" +
    "  <div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"name\">Name</label>\r" +
    "\n" +
    "      <input id=\"name\" type=\"text\" class=\"form-control\" ng-model=\"name\" required />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"address\">Address</label>\r" +
    "\n" +
    "      <input id=\"address\" type=\"text\" class=\"form-control\" ng-model=\"address\" disabled />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-default\" type=\"button\" ng-click=\"ok()\" ng-disabled=\"form.$invalid\">\r" +
    "\n" +
    "      Ok\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/executeMultisigTransactionOffline.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Execute transaction offline\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form ng-submit=\"ok()\">\r" +
    "\n" +
    "  <div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"nonce\">Transaction ID</label>\r" +
    "\n" +
    "      <input type=\"number\" class=\"form-control\" ng-model=\"transactionId\" required \\>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <input class=\"btn btn-default\" type=\"submit\" value=\"Execute offline\" ng-click=\"executeOffline()\" />\r" +
    "\n" +
    "    <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/executeTransaction.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Execute transaction\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button type=\"button\" class=\"btn btn-default\" ng-click=\"send()\">\r" +
    "\n" +
    "    Send transaction\r" +
    "\n" +
    "  </button>  \r" +
    "\n" +
    "  <button type=\"button\" class=\"btn btn-danger\" ng-click=\"cancel()\">\r" +
    "\n" +
    "    Cancel\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/exportWalletConfiguration.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Export wallets\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "  <div class=\"form-group\">\r" +
    "\n" +
    "    <textarea ng-model=\"configuration\" id=\"configuration\" class=\"form-control json-config\"></textarea>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button class=\"btn btn-default\" type=\"button\" ngclipboard-success=\"copy()\" ngclipboard data-clipboard-target=\"#configuration\">\r" +
    "\n" +
    "    Copy\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button type=\"button\" class=\"btn btn-danger\" ng-click=\"close()\">\r" +
    "\n" +
    "    Close\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/getNonce.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Get nonce\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form class=\"form\" name=\"form\">\r" +
    "\n" +
    "  <div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"address\">Address</label>\r" +
    "\n" +
    "      <input id=\"address\" class=\"form-control\" type=\"text\" ng-minlength=\"40\" ng-model=\"address\" required />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-default\" type=\"button\" ng-click=\"ok()\" ng-disabled=\"form.$invalid\" >\r" +
    "\n" +
    "      Ok\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/importLightWalletAccount.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Account import\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "  <div class=\"modal-body\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <form name=\"password_form\" novalidate ng-submit=\"uploadKeystore()\">\r" +
    "\n" +
    "      <p class=\"top-20\">Please select your keystore file.</p>\r" +
    "\n" +
    "      <div>\r" +
    "\n" +
    "        <button  type=\"button\"\r" +
    "\n" +
    "          class=\"btn btn-default\"\r" +
    "\n" +
    "          onclick=\"document.querySelector('.keystore-file-upload').click()\">\r" +
    "\n" +
    "          Browse...\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "        <input class=\"keystore-file-upload\"\r" +
    "\n" +
    "          type=\"file\"\r" +
    "\n" +
    "          style=\"display:none;\"\r" +
    "\n" +
    "          onchange=\"angular.element(this).scope().isFileValid(this)\">\r" +
    "\n" +
    "          {{fileName}}\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <p class=\"top-20\">Password</p>\r" +
    "\n" +
    "      <div>\r" +
    "\n" +
    "        <input type=\"password\" ng-model=\"account.password\" ng-minlength=\"8\"\r" +
    "\n" +
    "          name=\"password\" required=\"\" placeholder=\"Password\" class=\"form-control\"\r" +
    "\n" +
    "          ng-disabled=\"!fileValid\">\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div ng-show=\"password_form.$submitted || password_form.password.$touched\">\r" +
    "\n" +
    "        <div class=\"alert-fail\" ng-show=\"password_form.password.$error.required\">A password must be entered.</div>\r" +
    "\n" +
    "        <div class=\"alert-fail\" ng-show=\"password_form.password.$error.minlength\">A password should contain at least 8 characters.</div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <p class=\"top-20\">Please enter a name for the account.</p>\r" +
    "\n" +
    "      <div class=\"top-10\">\r" +
    "\n" +
    "        <input type=\"text\" ng-model=\"account.name\" ng-minlength=\"1\"\r" +
    "\n" +
    "          name=\"name\" required=\"\" placeholder=\"Account name\" class=\"form-control\"\r" +
    "\n" +
    "          ng-disabled=\"!isObjectEmpty(password_form.password.$error)\">\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div ng-show=\"password_form.$submitted || password_form.name.$touched\">\r" +
    "\n" +
    "        <div class=\"alert-fail\" ng-show=\"password_form.name.$error.required\">A name for the account must be entered.</div>\r" +
    "\n" +
    "        <div class=\"alert-fail\" ng-show=\"password_form.name.$error.minlength\">The name should contain at least 1 character.</div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <button type=\"submit\" class=\"btn btn-success\"\r" +
    "\n" +
    "      ng-disabled=\"password_form.$invalid\"\r" +
    "\n" +
    "      ng-click=\"uploadKeystore()\"\r" +
    "\n" +
    "      ng-show=\"!showLoadingSpinner\">\r" +
    "\n" +
    "      Import Account\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-success\"\r" +
    "\n" +
    "      ng-show=\"showLoadingSpinner\"\r" +
    "\n" +
    "      disabled>\r" +
    "\n" +
    "      <i class=\"fa fa-spinner fa-spin\"></i>\r" +
    "\n" +
    "      Importing...\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"cancel()\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/importWalletConfiguration.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Import wallets\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "  <div class=\"form-group\">\r" +
    "\n" +
    "    <textarea ng-model=\"configuration\" class=\"form-control json-config\"></textarea>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button type=\"button\" class=\"btn btn-default\" ng-click=\"load()\">\r" +
    "\n" +
    "    Save\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button type=\"button\" class=\"btn btn-danger\" ng-click=\"close()\">\r" +
    "\n" +
    "    Close\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/ledgerHelp.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <div class=\"bootstrap-dialog-header\">\r" +
    "\n" +
    "    <div class=\"bootstrap-dialog-title\">\r" +
    "\n" +
    "      Unlock your Ledger wallet\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "  <img src=\"./bundles/img/ledger.jpg\" class=\"img-responsive\" />\r" +
    "\n" +
    "  <br>\r" +
    "\n" +
    "  <p>\r" +
    "\n" +
    "    In order to use the multisig with your Ledger wallet you need to:\r" +
    "\n" +
    "    <ul>\r" +
    "\n" +
    "      <li>\r" +
    "\n" +
    "        Connect your Ledger wallet to your USB port\r" +
    "\n" +
    "      </li>\r" +
    "\n" +
    "      <li>\r" +
    "\n" +
    "        Enter your Ledger wallet pin code\r" +
    "\n" +
    "      </li>\r" +
    "\n" +
    "      <li>\r" +
    "\n" +
    "        Update ledger firmware if version < 1.2\r" +
    "\n" +
    "      </li>\r" +
    "\n" +
    "      <li>\r" +
    "\n" +
    "        Install the Ethereum app on your Ledger wallet\r" +
    "\n" +
    "      </li>\r" +
    "\n" +
    "      <li ng-hide=\"isElectron\">\r" +
    "\n" +
    "        Enable Browser support and contract data on settings\r" +
    "\n" +
    "      </li>\r" +
    "\n" +
    "      <li ng-show=\"isElectron\">\r" +
    "\n" +
    "        Disable Browser support and enable contract data on settings\r" +
    "\n" +
    "      </li>\r" +
    "\n" +
    "      <li>\r" +
    "\n" +
    "        Allow the multisig DApp to access your accounts on the Ledger wallet\r" +
    "\n" +
    "      </li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "  </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <p ng-hide=\"isConnected\" class=\"top-20 text-center\">\r" +
    "\n" +
    "    <button type=\"button\" ng-click=\"connect()\" class=\"btn btn-default\">\r" +
    "\n" +
    "    <span ng-show=\"!showSpinner\">Connect</span>\r" +
    "\n" +
    "    <span ng-show=\"showSpinner\">Approve on Ledger</span>\r" +
    "\n" +
    "    <i class=\"fa fa-spinner fa-spin\" ng-show=\"showSpinner\"></i>\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  </p>\r" +
    "\n" +
    "  <p ng-show=\"isConnected\" class=\"top-20 text-center online-status\">\r" +
    "\n" +
    "    Your Ledger is now connected to Multisig.\r" +
    "\n" +
    "  </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button type=\"button\" ng-click=\"close()\" class=\"btn btn-default\" id=\"terms-button\" >\r" +
    "\n" +
    "    Close\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/lightWalletPassword.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Account password\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <p class=\"top-20\">Please enter your password to securely decrypt your wallet.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <form name=\"password_form\" novalidate ng-submit=\"decryptWallet()\">\r" +
    "\n" +
    "    <div>\r" +
    "\n" +
    "      <input type=\"password\" ng-model=\"account.password\" ng-minlength=\"8\"\r" +
    "\n" +
    "        name=\"password\" required=\"\" placeholder=\"Password\" class=\"form-control\">\r" +
    "\n" +
    "    </div>    \r" +
    "\n" +
    "    <div ng-show=\"password_form.password.$invalid && !password_form.password.$pristine\">\r" +
    "\n" +
    "      <div class=\"alert-fail\" ng-show=\"password_form.password.$error.required\">A password must be entered.</div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </form>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button type=\"submit\" class=\"btn btn-success\"\r" +
    "\n" +
    "    ng-disabled=\"password_form.$invalid\"\r" +
    "\n" +
    "    ng-click=\"ok()\">\r" +
    "\n" +
    "    Login\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button class=\"btn btn-danger\" ng-click=\"cancel()\">\r" +
    "\n" +
    "    Cancel\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/newWallet.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Deploy new wallet\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form class=\"form\" name=\"newWallet\">\r" +
    "\n" +
    "  <div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"name\">Name</label>\r" +
    "\n" +
    "      <input id=\"name\" type=\"text\" class=\"form-control\" ng-model=\"name\" required ng-min-length=\"1\" />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"required\">Required confirmations</label>\r" +
    "\n" +
    "      <input id=\"required\" type=\"number\" class=\"form-control\" ng-min=\"1\" ng-max=\"{{maxAllowedConfirmations}}\" ng-model=\"confirmations\" required />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"daily-limit\"> Daily limit (ETH) </label>\r" +
    "\n" +
    "      <input id=\"daily-limit\" type=\"number\" class=\"form-control\" ng-min=\"0\" max=\"999999999999999\" ng-model=\"limit\" required />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"panel panel-default\">\r" +
    "\n" +
    "      <div class=\"panel-heading\">\r" +
    "\n" +
    "        Owners\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <table class=\"table table-hover table-bordered table-striped\">\r" +
    "\n" +
    "        <thead>\r" +
    "\n" +
    "          <tr>\r" +
    "\n" +
    "            <th>\r" +
    "\n" +
    "              Name\r" +
    "\n" +
    "            </th>\r" +
    "\n" +
    "            <th>\r" +
    "\n" +
    "              Address\r" +
    "\n" +
    "            </th>\r" +
    "\n" +
    "            <th>\r" +
    "\n" +
    "              Action\r" +
    "\n" +
    "            </th>\r" +
    "\n" +
    "          </tr>\r" +
    "\n" +
    "        </thead>\r" +
    "\n" +
    "        <tbody>\r" +
    "\n" +
    "          <tr ng-repeat=\"owner in owners\">\r" +
    "\n" +
    "            <td>\r" +
    "\n" +
    "              {{owner.name}}\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "            <td>\r" +
    "\n" +
    "              {{owner.address}}\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "            <td>\r" +
    "\n" +
    "              <button type=\"button\" class=\"btn btn-danger\" ng-click=\"removeOwner(owner.address)\">\r" +
    "\n" +
    "                Remove\r" +
    "\n" +
    "              </button>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "          </tr>\r" +
    "\n" +
    "          <!--<tr>\r" +
    "\n" +
    "            <td>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "            <td>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "            <td>\r" +
    "\n" +
    "              <button ng-click=\"addOwner()\" type=\"button\" class=\"btn btn-default\">\r" +
    "\n" +
    "                Add\r" +
    "\n" +
    "              </button>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "          </tr>-->\r" +
    "\n" +
    "          <tr>\r" +
    "\n" +
    "            <td>\r" +
    "\n" +
    "              <input type=\"text\" class=\"form-control\" placeholder=\"Name\" ng-model=\"newOwner.name\" />\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "            <td>\r" +
    "\n" +
    "              <input type=\"text\" class=\"form-control\" placeholder=\"Address\" ng-model=\"newOwner.address\" />\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "            <td>\r" +
    "\n" +
    "              <button ng-click=\"addOwner()\" type=\"button\" class=\"btn btn-default\"\r" +
    "\n" +
    "                ng-disabled=\"newOwner.address == undefined || !newOwner.address.length > 0\">\r" +
    "\n" +
    "                Add\r" +
    "\n" +
    "              </button>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "          </tr>\r" +
    "\n" +
    "        </tbody>\r" +
    "\n" +
    "      </table>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-default\" type=\"button\" ng-click=\"deployWallet()\" ng-disabled=\"newWallet.$invalid\" show-hide-by-factory-status=\"offline\" >\r" +
    "\n" +
    "      Deploy\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button class=\"btn btn-default\" type=\"button\" ng-click=\"deployFactoryWallet()\" ng-disabled=\"newWallet.$invalid\" show-hide-by-factory-status=\"online\">\r" +
    "\n" +
    "      Deploy with factory\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button class=\"btn btn-default\" type=\"button\" ng-click=\"deployOfflineWallet()\" ng-disabled=\"newWallet.$invalid\" show-hide-by-connectivity=\"offline\">\r" +
    "\n" +
    "      Sign deployment offline\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button class=\"btn btn-default\" type=\"button\" ng-click=\"deployFactoryWalletOffline()\" ng-disabled=\"newWallet.$invalid\" show-hide-by-connectivity=\"offline\">\r" +
    "\n" +
    "      Sign deployment with factory offline\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/removeLightWalletAccount.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Remove account\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "  <form name=\"edit_form\" novalidate>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"name\">Name</label>\r" +
    "\n" +
    "      <input id=\"name\" type=\"text\" class=\"form-control\" ng-model=\"account.name\" disabled />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"address\">Account</label>\r" +
    "\n" +
    "      <input id=\"address\" type=\"text\" ng-model=\"account.address\" name=\"address\"\r" +
    "\n" +
    "      required=\"\" class=\"form-control\" disabled>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"confirmation\">Enter account name for confirmation</label>\r" +
    "\n" +
    "      <input id=\"confirmation\" type=\"text\" class=\"form-control\" ng-model=\"confirmation\" />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </form>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button type=\"submit\" class=\"btn btn-success\"\r" +
    "\n" +
    "    ng-click=\"ok()\"\r" +
    "\n" +
    "    ng-disabled=\"confirmation != account.name\">\r" +
    "\n" +
    "    Confirm\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button class=\"btn btn-danger\" ng-click=\"cancel()\">\r" +
    "\n" +
    "    Cancel\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/removeOwner.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Remove owner\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "  <div class=\"form-group\">\r" +
    "\n" +
    "    <label for=\"name\">Name</label>\r" +
    "\n" +
    "    <input id=\"name\" type=\"text\" class=\"form-control\" ng-model=\"owner.name\" readonly />\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"form-group\">\r" +
    "\n" +
    "    <label for=\"address\"> Address </label>\r" +
    "\n" +
    "    <input id=\"address\" type=\"text\" class=\"form-control\" ng-model=\"owner.address\" readonly />\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button class=\"btn btn-default\" type=\"button\" ng-click=\"send()\">\r" +
    "\n" +
    "    Send multisig transaction\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "    Cancel\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/removeToken.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Remove token\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "  <div class=\"form-group\">\r" +
    "\n" +
    "    <label for=\"name\">Name</label>\r" +
    "\n" +
    "    <input id=\"name\" type=\"text\" class=\"form-control\" ng-model=\"token.name\" onfocus=\"this.blur()\" readonly />\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"form-group\">\r" +
    "\n" +
    "    <label for=\"address\"> Address </label>\r" +
    "\n" +
    "    <input id=\"address\" type=\"text\" class=\"form-control\" ng-model=\"token.address\" onfocus=\"this.blur()\" readonly />\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"form-group\">\r" +
    "\n" +
    "    <label for=\"symbol\"> Symbol </label>\r" +
    "\n" +
    "    <input id=\"symbol\" type=\"text\" class=\"form-control\" ng-model=\"token.symbol\" onfocus=\"this.blur()\" readonly />\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"form-group\">\r" +
    "\n" +
    "    <label for=\"decimals\"> Decimals </label>\r" +
    "\n" +
    "    <input id=\"decimals\" type=\"text\" class=\"form-control\" ng-model=\"token.decimals\" onfocus=\"this.blur()\" readonly />\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button class=\"btn btn-default\" type=\"button\" ng-click=\"ok()\">\r" +
    "\n" +
    "    Ok\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "    Cancel\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/removeWallet.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Remove wallet\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form class=\"form\" name=\"removeWallet\">\r" +
    "\n" +
    "  <div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"name\">Name</label>\r" +
    "\n" +
    "      <input id=\"name\" type=\"text\" class=\"form-control\" ng-model=\"wallet.name\" disabled />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"address\">Address</label>\r" +
    "\n" +
    "      <input id=\"address\" type=\"text\" class=\"form-control\" disabled ng-model=\"wallet.address\" />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"confirmation\">Enter wallet name for confirmation</label>\r" +
    "\n" +
    "      <input id=\"confirmation\" type=\"text\" class=\"form-control\" ng-model=\"confirmation\" />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-default\" type=\"button\" ng-click=\"ok()\" ng-disabled=\"confirmation != wallet.name\">\r" +
    "\n" +
    "      Ok\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/removeWalletOwnerOffline.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Add owner offline\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "  <div class=\"form-group\">\r" +
    "\n" +
    "    <label for=\"address\">Address</label>\r" +
    "\n" +
    "    <input id=\"address\" type=\"text\" class=\"form-control\" ng-model=\"owner.address\" required />\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button class=\"btn btn-default\" type=\"button\" ng-click=\"sign()\" show-hide-by-connectivity=\"offline\">\r" +
    "\n" +
    "    Sign offline\r" +
    "\n" +
    "  </button>  \r" +
    "\n" +
    "  <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "    Cancel\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/replaceOwner.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Replace owner\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form class=\"form\" name=\"form\">\r" +
    "\n" +
    "  <div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"name\">Name</label>\r" +
    "\n" +
    "      <input id=\"name\" type=\"text\" class=\"form-control\" ng-model=\"owner.name\" readonly />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"address\"> Owner address </label>\r" +
    "\n" +
    "      <input id=\"address\" type=\"text\" class=\"form-control\" ng-model=\"owner.address\" readonly />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"newOwner\"> New owner address </label>\r" +
    "\n" +
    "      <input id=\"newOwner\" type=\"text\" class=\"form-control\" ng-minlength=\"40\" ng-model=\"newOwner\" required />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-default\" type=\"button\" ng-disabled=\"form.$invalid\"\r" +
    "\n" +
    "      disabled-if-invalid-address=\"{{newOwner}}\"\r" +
    "\n" +
    "      ng-click=\"send()\">\r" +
    "\n" +
    "      Send multisig transaction\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/replaceOwnerOffline.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Replace owner offline\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form name=\"form\">\r" +
    "\n" +
    "  <div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"oldOwner\"> Owner address </label>\r" +
    "\n" +
    "      <input id=\"oldOwner\" type=\"text\" class=\"form-control\" ng-model=\"oldOwner\" required />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"newOwner\"> New owner address </label>\r" +
    "\n" +
    "      <input id=\"newOwner\" type=\"text\" class=\"form-control\" ng-model=\"newOwner\" required />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-default\" type=\"button\" ng-click=\"sign()\" ng-disabled=\"form.$invalid\" >\r" +
    "\n" +
    "      Sign offline\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/resetSettings.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Reset settings\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "  Do you want to reset settings to factory values?\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button class=\"btn btn-default\" type=\"button\" ng-click=\"ok()\">\r" +
    "\n" +
    "    Ok\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "    Cancel\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/restoreSeed.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Restore seed\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "  <form name=\"restore_form\" novalidate>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"seed\">Wallet seed phrase</label>\r" +
    "\n" +
    "      <textarea id=\"seed\" class=\"form-control\" ng-model=\"account.seed\" required></textarea>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"password\">Type a password to protect your wallet</label>\r" +
    "\n" +
    "      <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"account.password\" ng-minlength=\"8\" required />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </form>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button class=\"btn btn-default\" type=\"button\"\r" +
    "\n" +
    "    ng-disabled=\"!account.seed.length > 0 || restore_form.$invalid\"\r" +
    "\n" +
    "    ng-click=\"ok()\">\r" +
    "\n" +
    "    Ok\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "    Cancel\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/restoreWallet.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Restore deployed wallet\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form class=\"form\" name=\"restoreWallet\">\r" +
    "\n" +
    "  <div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"name\">Name</label>\r" +
    "\n" +
    "      <input id=\"name\" type=\"text\" class=\"form-control\" ng-model=\"old.name\" required />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"address\">Address</label>\r" +
    "\n" +
    "      <input id=\"address\" type=\"text\" class=\"form-control\" ng-model=\"old.address\" required />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-default\" type=\"button\" ng-click=\"ok()\" ng-disabled=\"restoreWallet.$invalid\">\r" +
    "\n" +
    "      Ok\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/retrieveNonce.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Multisig nonce\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "  <div class=\"form-group\">\r" +
    "\n" +
    "    <label for=\"nonce\">Nonce</label>\r" +
    "\n" +
    "    <input id=\"nonce\" class=\"form-control\" type=\"text\" readonly ng-model=\"nonce\" />\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button class=\"btn btn-default\" type=\"button\" ngclipboard-success=\"copy()\" ngclipboard data-clipboard-target=\"#nonce\">\r" +
    "\n" +
    "    Copy\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "    Cancel\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/revokeConfirmation.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Revoke confirmation\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button type=\"button\" class=\"btn btn-default\" ng-click=\"send()\">\r" +
    "\n" +
    "    Send transaction\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button type=\"button\" class=\"btn btn-danger\" ng-click=\"cancel()\">\r" +
    "\n" +
    "    Cancel\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/revokeMultisigConfirmationOffline.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Revoke transaction confirmation offline\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form ng-submit=\"ok()\">\r" +
    "\n" +
    "  <div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"nonce\">Transaction ID</label>\r" +
    "\n" +
    "      <input type=\"number\" class=\"form-control\" ng-model=\"transactionId\" required \\>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <input class=\"btn btn-default\" type=\"submit\" value=\"Revoke offline\" ng-click=\"revokeOffline()\" />\r" +
    "\n" +
    "    <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/selectNewWallet.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Add wallet\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "  <div class=\"radio\" ng-show=\"coinbase\">\r" +
    "\n" +
    "    <label>\r" +
    "\n" +
    "      <input type=\"radio\" value=\"create\" ng-model=\"walletOption\">\r" +
    "\n" +
    "      Create new wallet\r" +
    "\n" +
    "    </label>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"radio\">\r" +
    "\n" +
    "    <label>\r" +
    "\n" +
    "      <input type=\"radio\" value=\"restore\" ng-model=\"walletOption\">\r" +
    "\n" +
    "      Restore deployed wallet\r" +
    "\n" +
    "    </label>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button class=\"btn btn-default\" ng-click=\"ok()\">\r" +
    "\n" +
    "    Next\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button class=\"btn btn-danger\" ng-click=\"cancel()\">\r" +
    "\n" +
    "    Cancel\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/sendTransaction.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Send transaction\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form name=\"form\" class=\"form\">\r" +
    "\n" +
    "  <div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"destination\">Destination</label>\r" +
    "\n" +
    "      <input id=\"destination\" type=\"text\" ng-model=\"tx.to\" ng-change=\"updateABI()\"  ng-min=\"40\" class=\"form-control\" required>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"name\">Contract name (optional)</label>\r" +
    "\n" +
    "      <input type=\"text\" class=\"form-control\" ng-model=\"name\" name=\"name\" />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"value\">Amount (ETH)</label>\r" +
    "\n" +
    "      <input id=\"value\" type=\"number\" class=\"form-control\" ng-model=\"tx.value\" min=\"0\" max=\"999999999999999\" ng-required=\"!abi\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"abi\">ABI string</label>\r" +
    "\n" +
    "      <textarea id=\"abi\" rows=\"3\" class=\"form-control\" ng-model=\"abi\" ng-change=\"updateMethods()\" ng-required=\"!tx.value\"></textarea>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"method\">Method</label>\r" +
    "\n" +
    "      <select id=\"method\" ng-model=\"method\" ng-options=\"method.name for method in methods track by method.index\"\r" +
    "\n" +
    "       ng-required=\"tx.abi\" class=\"form-control\" ng-change=\"setMethod()\" ng-disabled=\"!abiArray\" ></select>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\" ng-show=\"method && abiArray[method.index].inputs.length > 0\">\r" +
    "\n" +
    "      <h3>\r" +
    "\n" +
    "        Parameters\r" +
    "\n" +
    "      </h3>\r" +
    "\n" +
    "      <div class=\"form-group\" ng-repeat=\"param in abiArray[method.index].inputs\" >\r" +
    "\n" +
    "        <div ng-switch on=\"param.type\">\r" +
    "\n" +
    "          <label ng-attr-for=\"{{ 'value-' + $index }}\">{{param.name}}</label>\r" +
    "\n" +
    "          <input ng-attr-id=\"{{ 'value-' + $index }}\" ng-switch-default type=\"text\" class=\"form-control\" ng-model=\"params[$index]\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <button type=\"button\" ng-click=\"send()\" class=\"btn btn-default\" show-hide-by-connectivity=\"online\"\r" +
    "\n" +
    "      disabled-if-invalid-address=\"{{tx.to}}\"\r" +
    "\n" +
    "      ng-disabled=\"form.$invalid || abiArray[method.index].constant\">\r" +
    "\n" +
    "      Send transaction\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button type=\"button\" ng-click=\"simulate()\" class=\"btn btn-default\" show-hide-by-connectivity=\"online\"\r" +
    "\n" +
    "      disabled-if-invalid-address=\"{{tx.to}}\"\r" +
    "\n" +
    "      ng-disabled=\"form.$invalid\">\r" +
    "\n" +
    "      Simulate transaction\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button type=\"button\" ng-click=\"signOff()\" show-hide-by-connectivity=\"offline\" class=\"btn btn-default\" ng-disabled=\"form.$invalid\">\r" +
    "\n" +
    "      Sign offline\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button type=\"button\" ng-click=\"cancel()\" class=\"btn btn-danger\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/setLimit.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Change daily limit\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form name=\"form\" class=\"form\">\r" +
    "\n" +
    "  <div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"limit\">Daily limit (ETH)</label>\r" +
    "\n" +
    "      <input id=\"limit\" type=\"number\" step=\"any\" ng-model=\"limit\" min=\"0\" max=\"999999999999999\" class=\"form-control\" required />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-disabled=\"form.$invalid\" ng-click=\"setLimit()\" show-hide-by-connectivity=\"online\">\r" +
    "\n" +
    "      Send multisig transaction\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-disabled=\"form.$invalid\" ng-click=\"sign()\" show-hide-by-connectivity=\"offline\">\r" +
    "\n" +
    "      Sign offline\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-danger\" ng-click=\"cancel()\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/showNonce.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Nonce\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "  <div class=\"form-group\">\r" +
    "\n" +
    "    <label for=\"signed\">Nonce</label>\r" +
    "\n" +
    "    <input type=\"text\" class=\"form-control\" ng-model=\"nonce\" id=\"nonce\" />\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button class=\"btn btn-default\" ngclipboard-success=\"copy()\" ngclipboard data-clipboard-target=\"#nonce\">\r" +
    "\n" +
    "    Copy\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button class=\"btn btn-danger\" ng-click=\"cancel()\">\r" +
    "\n" +
    "    Cancel\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/showSeed.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Seed\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "  <div class=\"form-group\">\r" +
    "\n" +
    "    <span id=\"seed\">{{seed}}</span>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button class=\"btn btn-default\" ngclipboard-success=\"copySeedSuccessMessage()\" ngclipboard data-clipboard-target=\"#seed\">\r" +
    "\n" +
    "    Copy\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button class=\"btn btn-danger\" ng-click=\"close()\">\r" +
    "\n" +
    "    Close\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/showSignedTransaction.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Signed transaction\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "  <div class=\"form-group\">\r" +
    "\n" +
    "    <label for=\"signed\">Hex code</label>\r" +
    "\n" +
    "    <textarea class=\"form-control\" rows=\"5\" ng-model=\"signed\" id=\"signed\"></textarea>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button class=\"btn btn-default\" ngclipboard-success=\"copy()\" ngclipboard data-clipboard-target=\"#signed\">\r" +
    "\n" +
    "    Copy\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button class=\"btn btn-danger\" ng-click=\"cancel()\">\r" +
    "\n" +
    "    Cancel\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/signedTransaction.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Send signed transaction\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "  <div class=\"form-group\">\r" +
    "\n" +
    "    <label for=\"raw\">Signed transaction</label>\r" +
    "\n" +
    "    <textarea id=\"raw\" class=\"form-control\" rows=\"5\" ng-model=\"tx\"></textarea>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button class=\"btn btn-default\" ng-click=\"sendRawTransaction()\">\r" +
    "\n" +
    "    Send\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button class=\"btn btn-danger\" ng-click=\"cancel()\">\r" +
    "\n" +
    "    Cancel\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/signMultisigConfirmationRevokeOffline.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Sign multisig transaction offline\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form ng-submit=\"ok()\" name=\"form\">\r" +
    "\n" +
    "  <div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"modal-body\">\r" +
    "\n" +
    "      <div class=\"form-group\">\r" +
    "\n" +
    "        <label for=\"multisig-nonce\">Transaction id</label>\r" +
    "\n" +
    "        <input id=\"multisig-nonce\" class=\"form-control\" type=\"number\" ng-model=\"nonces.multisig\" required />\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"account-nonce\">Nonce</label>\r" +
    "\n" +
    "      <input id=\"account-nonce\" class=\"form-control\" type=\"number\" ng-model=\"nonces.account\" required />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <input class=\"btn btn-default\" type=\"submit\" value=\"Ok\" ng-disabled=\"form.$invalid\" />\r" +
    "\n" +
    "    <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/signOffline.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Sign transaction offline\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form ng-submit=\"ok()\">\r" +
    "\n" +
    "  <div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"nonce\">Nonce</label>\r" +
    "\n" +
    "      <input id=\"nonce\" class=\"form-control\" type=\"number\" ng-model=\"nonce\" ng-min=\"0\" required />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <input class=\"btn btn-default\" type=\"submit\" value=\"Ok\" />\r" +
    "\n" +
    "    <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/simulatedTransaction.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Simulated Result\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "  <div class=\"form-group\">\r" +
    "\n" +
    "    <label for=\"result\">Result</label>\r" +
    "\n" +
    "    <input id=\"result\" class=\"form-control\" type=\"text\" readonly ng-model=\"result\" />\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button class=\"btn btn-default\" type=\"button\" ngclipboard-success=\"copy()\" ngclipboard data-clipboard-target=\"#result\">\r" +
    "\n" +
    "    Copy\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <button class=\"btn btn-danger\" type=\"button\" ng-click=\"cancel()\">\r" +
    "\n" +
    "    Cancel\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/spinner.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Approve transaction\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "  <div class=\"sk-circle\">\r" +
    "\n" +
    "    <div class=\"sk-circle1 sk-child\"></div>\r" +
    "\n" +
    "    <div class=\"sk-circle2 sk-child\"></div>\r" +
    "\n" +
    "    <div class=\"sk-circle3 sk-child\"></div>\r" +
    "\n" +
    "    <div class=\"sk-circle4 sk-child\"></div>\r" +
    "\n" +
    "    <div class=\"sk-circle5 sk-child\"></div>\r" +
    "\n" +
    "    <div class=\"sk-circle6 sk-child\"></div>\r" +
    "\n" +
    "    <div class=\"sk-circle7 sk-child\"></div>\r" +
    "\n" +
    "    <div class=\"sk-circle8 sk-child\"></div>\r" +
    "\n" +
    "    <div class=\"sk-circle9 sk-child\"></div>\r" +
    "\n" +
    "    <div class=\"sk-circle10 sk-child\"></div>\r" +
    "\n" +
    "    <div class=\"sk-circle11 sk-child\"></div>\r" +
    "\n" +
    "    <div class=\"sk-circle12 sk-child\"></div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/updateRequired.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Change required confirmations\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form name=\"form\" class=\"form\">\r" +
    "\n" +
    "  <div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"confirmations\">Required confirmations</label>\r" +
    "\n" +
    "      <input id=\"confirmations\" type=\"number\" class=\"form-control\" ng-min=\"1\" ng-model=\"required\" required>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-disabled=\"form.$invalid\" ng-click=\"update()\" show-hide-by-connectivity=\"online\">\r" +
    "\n" +
    "      Send multisig transaction\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-disabled=\"form.$invalid\" ng-click=\"signOffline()\" show-hide-by-connectivity=\"offline\">\r" +
    "\n" +
    "      Sign offline\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-danger\" ng-click=\"cancel()\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/walletTransaction.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Send multisig transaction\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form class=\"form\" name=\"form\">\r" +
    "\n" +
    "  <div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"destination\">Destination</label>\r" +
    "\n" +
    "      <input id=\"destination\" type=\"text\" ng-model=\"tx.to\" ng-change=\"updateABI()\"  ng-min=\"40\" class=\"form-control\" required>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"name\">Contract name (optional)</label>\r" +
    "\n" +
    "      <input type=\"text\" class=\"form-control\" ng-model=\"name\" name=\"name\" />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"value\">Amount (ETH)</label>\r" +
    "\n" +
    "      <input id=\"value\" type=\"number\" class=\"form-control\" ng-model=\"tx.value\" min=\"0\" max=\"999999999999999\" ng-required=\"!abi\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"abi\"> ABI string </label>\r" +
    "\n" +
    "      <textarea id=\"abi\" rows=\"5\" type=\"text\" class=\"form-control\" ng-model=\"abi\" ng-change=\"updateMethods()\" ng-required=\"!tx.value\"></textarea>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"method\">Method</label>\r" +
    "\n" +
    "      <select id=\"method\" ng-model=\"method\"\r" +
    "\n" +
    "       ng-options=\"method.name for method in methods track by method.index\"\r" +
    "\n" +
    "       ng-required=\"tx.abi\" class=\"form-control\" ng-change=\"setMethod()\" ng-disabled=\"!abiArray\" ></select>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\" ng-show=\"method && abiArray[method.index].inputs.length > 0\">\r" +
    "\n" +
    "      <h3>\r" +
    "\n" +
    "        Parameters\r" +
    "\n" +
    "      </h3>\r" +
    "\n" +
    "      <div class=\"form-group\" ng-repeat=\"param in abiArray[method.index].inputs\" >\r" +
    "\n" +
    "        <div ng-switch on=\"param.type\">\r" +
    "\n" +
    "          <label ng-attr-for=\"{{ 'value-' + $index }}\">{{param.name}}</label>\r" +
    "\n" +
    "          <input ng-attr-id=\"{{ 'value-' + $index }}\" ng-switch-default type=\"text\" class=\"form-control\" ng-model=\"params[$index]\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <button type=\"button\" ng-click=\"send()\" class=\"btn btn-default\" ng-disabled=\"form.$invalid\"\r" +
    "\n" +
    "      disabled-if-invalid-address=\"{{tx.to}}\"\r" +
    "\n" +
    "      show-hide-by-connectivity=\"online\">\r" +
    "\n" +
    "      Send multisig transaction\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button type=\"button\" ng-click=\"signOff()\" class=\"btn btn-default\" ng-disabled=\"form.$invalid\" show-hide-by-connectivity=\"offline\">\r" +
    "\n" +
    "      Sign offline\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button type=\"button\" ng-click=\"cancel()\" class=\"btn btn-danger\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/web3Wallets.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <div class=\"bootstrap-dialog-header\">\r" +
    "\n" +
    "    <div class=\"bootstrap-dialog-title\">\r" +
    "\n" +
    "      No account found\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "  <p>\r" +
    "\n" +
    "    This wallet requires a 3rd party Ethereum account management software like\r" +
    "\n" +
    "    <a href=\"https://metamask.io/\" class=\"prevent-focus\" target=\"_blank\">Metamask</a>,\r" +
    "\n" +
    "    <a href=\"https://github.com/ethereum/mist\" target=\"_blank\">Mist</a> or\r" +
    "\n" +
    "    <a href=\"https://ethcore.io/parity.html\" target=\"_blank\">Parity</a>.\r" +
    "\n" +
    "  </p>\r" +
    "\n" +
    "  <p>\r" +
    "\n" +
    "    You can monitor existing wallets without an account management software but you cannot create new wallets or sign transactions.\r" +
    "\n" +
    "  </p>\r" +
    "\n" +
    "  <p ngIf=\"metamaskInjected\">\r" +
    "\n" +
    "    <a href=\"#\" ng-click=\"openMetamaskWidgetAndClose()\">Unlock Metamask</a>\r" +
    "\n" +
    "  </p>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button type=\"button\" ng-click=\"ok()\" class=\"btn btn-default\" id=\"terms-button\" >\r" +
    "\n" +
    "    Ok\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/withdrawLimit.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Withdraw limit\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form name=\"form\" class=\"form\">\r" +
    "\n" +
    "  <div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"value\">Amount (ETH)</label>\r" +
    "\n" +
    "      <input id=\"value\" type=\"number\" class=\"form-control\" ng-model=\"tx.value\" ng-min=\"0\" max=\"999999999999999\" required>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"address\">Destination</label>\r" +
    "\n" +
    "      <input id=\"address\" type=\"text\" class=\"form-control\" ng-model=\"tx.to\" ng-minlength=\"40\" required>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <button type=\"button\" ng-click=\"send()\" class=\"btn btn-default\" ng-disabled=\"form.$invalid\"\r" +
    "\n" +
    "      disabled-if-invalid-address=\"{{tx.to}}\"\r" +
    "\n" +
    "      show-hide-by-connectivity=\"online\">\r" +
    "\n" +
    "      Send multisig transaction\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button type=\"button\" ng-click=\"signOff()\" class=\"btn btn-default\" ng-disabled=\"form.$invalid\" show-hide-by-connectivity=\"offline\">\r" +
    "\n" +
    "      Sign offline\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button type=\"button\" ng-click=\"cancel()\" class=\"btn btn-danger\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/partials/modals/withdrawToken.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Withdraw token\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form name=\"form\" class=\"form\">\r" +
    "\n" +
    "  <div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"amount\">Amount ({{token.symbol}})</label>\r" +
    "\n" +
    "      <input id=\"amount\" type=\"number\" class=\"form-control\" ng-model=\"amount\" ng-min=\"0\" max=\"999999999999999\" required>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label for=\"address\">Destination</label>\r" +
    "\n" +
    "      <input id=\"address\" type=\"text\" class=\"form-control\" ng-model=\"to\" ng-minlength=\"40\" required>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"modal-footer\">\r" +
    "\n" +
    "    <button type=\"button\" ng-click=\"send()\" class=\"btn btn-default\" ng-disabled=\"form.$invalid\" show-hide-by-connectivity=\"online\">\r" +
    "\n" +
    "      Send multisig transaction\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button type=\"button\" ng-click=\"signOff()\" class=\"btn btn-default\" ng-disabled=\"form.$invalid\" show-hide-by-connectivity=\"offline\">\r" +
    "\n" +
    "      Sign offline\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <button type=\"button\" ng-click=\"cancel()\" class=\"btn btn-danger\">\r" +
    "\n" +
    "      Cancel\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );

}]);
