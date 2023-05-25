$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddAndWithdrawMoney.feature");
formatter.feature({
  "line": 2,
  "name": "Add and Withdraw Money",
  "description": "",
  "id": "add-and-withdraw-money",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 8658598500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Customer should add and withdraw money",
  "description": "",
  "id": "add-and-withdraw-money;customer-should-add-and-withdraw-money",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on customer login button on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User selects customer from list",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on login button on page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User adds money to account",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on submit button on account page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verifes text Deposit Successful",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User clicks on Withdrawl button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters amount to withdraw",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicks on submit button to withdraw button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User verifies text Transaction Successful",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User logs out of account by clicking logout button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerLoginSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 308999300,
  "status": "passed"
});
formatter.match({
  "location": "AddandWithdrawSteps.userClicksOnCustomerLoginButtonOnHomepage()"
});
formatter.result({
  "duration": 263811001,
  "status": "passed"
});
formatter.match({
  "location": "AddandWithdrawSteps.userSelectsCustomerFromList()"
});
formatter.result({
  "duration": 684845300,
  "status": "passed"
});
formatter.match({
  "location": "AddandWithdrawSteps.userClicksOnLoginButtonOnPage()"
});
formatter.result({
  "duration": 142204300,
  "status": "passed"
});
formatter.match({
  "location": "AddandWithdrawSteps.userClicksOnDepositTab()"
});
formatter.result({
  "duration": 942036801,
  "status": "passed"
});
formatter.match({
  "location": "AddandWithdrawSteps.userAddsMoneyToAccount()"
});
formatter.result({
  "duration": 445899400,
  "status": "passed"
});
formatter.match({
  "location": "AddandWithdrawSteps.userClicksOnSubmitButtonOnAccountPage()"
});
formatter.result({
  "duration": 111789400,
  "status": "passed"
});
formatter.match({
  "location": "AddandWithdrawSteps.userVerifesTextDepositSuccessful()"
});
formatter.result({
  "duration": 73442400,
  "status": "passed"
});
formatter.match({
  "location": "AddandWithdrawSteps.userClicksOnWithdrawlButton()"
});
formatter.result({
  "duration": 117059401,
  "status": "passed"
});
formatter.match({
  "location": "AddandWithdrawSteps.userEntersAmountToWithdraw()"
});
formatter.result({
  "duration": 116714600,
  "status": "passed"
});
formatter.match({
  "location": "AddandWithdrawSteps.userClicksOnSubmitButtonToWithdrawButton()"
});
formatter.result({
  "duration": 113571100,
  "status": "passed"
});
formatter.match({
  "location": "AddandWithdrawSteps.userVerifiesTextTransactionSuccessful()"
});
formatter.result({
  "duration": 81497000,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: stale element not found\n  (Session info: chrome\u003d113.0.5672.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#stale_element_reference\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [86214aabbf46ff6aff3f6f23f37449df, getElementText {id\u003dA3475931D913052AF3DBF0F29278A9DA_element_25}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:53963}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53963/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (86214aabbf46ff6aff3f6f23f37449df)] -\u003e xpath: //span[@class\u003d\u0027error ng-binding\u0027]]\nSession ID: 86214aabbf46ff6aff3f6f23f37449df\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:207)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.xyz.bank.sw16.utility.Utility.getTextFromElement(Utility.java:64)\r\n\tat com.xyz.bank.sw16.pages.AccountPage.getMessage2(AccountPage.java:55)\r\n\tat com.xyz.bank.sw16.steps.AddandWithdrawSteps.userVerifiesTextTransactionSuccessful(AddandWithdrawSteps.java:65)\r\n\tat ✽.Then User verifies text Transaction Successful(AddAndWithdrawMoney.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AddandWithdrawSteps.userLogsOutOfAccountByClickingLogoutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1834531999,
  "status": "passed"
});
formatter.uri("OpenNewAccount.feature");
formatter.feature({
  "line": 2,
  "name": "Open New Account",
  "description": "",
  "id": "open-new-account",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 6255844200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should open new bank account",
  "description": "",
  "id": "open-new-account;user-should-open-new-bank-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Bank Manager Login Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User click On Open Account Tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User searchs customer that added",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User selects currency Pound",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on process button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User switches to Popup Alert displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User Verifies message Account created successfully on alert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User Click on ok button on popup and accepts popup",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerLoginSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 42100,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountSteps.userClicksOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 636761199,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountSteps.userClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 375982400,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountSteps.userSearchsCustomerThatAdded()"
});
formatter.result({
  "duration": 20602876800,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountSteps.userSelectsCurrencyPound()"
});
formatter.result({
  "duration": 196432300,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountSteps.userClicksOnProcessButton()"
});
formatter.result({
  "duration": 130522301,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountSteps.userSwitchesToPopupAlertDisplayed()"
});
formatter.result({
  "duration": 14129500,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountSteps.userVerifiesMessageAccountCreatedSuccessfullyOnAlert()"
});
formatter.result({
  "duration": 25854999,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountSteps.userClickOnOkButtonOnPopupAndAcceptsPopup()"
});
formatter.result({
  "duration": 19956600,
  "status": "passed"
});
formatter.after({
  "duration": 1201793300,
  "status": "passed"
});
});