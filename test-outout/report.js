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
  "duration": 29261421800,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.iViewMyWishlistTable()"
});
formatter.result({
  "duration": 1625200300,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.iFindTotalFourSelectedItemsInMyWishlist()"
});
formatter.result({
  "duration": 22972300,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.iSearchForLowestPriceProduct()"
});
formatter.result({
  "duration": 3318482200,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.iAmAbleToVerifyTheItemInMyCart()"
});
formatter.result({
  "duration": 1766601300,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.iCloseTheBrowser()"
});
formatter.result({
  "duration": 127367900,
  "status": "passed"
});
});