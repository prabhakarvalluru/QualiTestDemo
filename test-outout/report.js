$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Wishlist.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@testscriptdemo"
    },
    {
      "line": 1,
      "name": "@Cartminamount"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Login to the application with valid credentials",
  "description": "",
  "id": "login-test;login-to-the-application-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I add four different products to my wishlist",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I view my wishlist table",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I find total four selected items in my Wishlist",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I search for lowest price product",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I am able to verify the item in my cart",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefnition.iAddFourDifferentProductsToMyWishlist()"
});
formatter.result({
  "duration": 37352941240,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.iViewMyWishlistTable()"
});
formatter.result({
  "duration": 441489395,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.iFindTotalFourSelectedItemsInMyWishlist()"
});
formatter.result({
  "duration": 13852114,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.iSearchForLowestPriceProduct()"
});
formatter.result({
  "duration": 3144741389,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.iAmAbleToVerifyTheItemInMyCart()"
});
formatter.result({
  "duration": 374506927,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.iCloseTheBrowser()"
});
formatter.result({
  "duration": 135829515,
  "status": "passed"
});
});