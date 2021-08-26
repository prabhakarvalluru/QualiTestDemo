@testscriptdemo @Cartminamount
Feature: Login Test

  Scenario: Login to the application with valid credentials

    Given I add four different products to my wishlist
    When I view my wishlist table
    Then I find total four selected items in my Wishlist
    When I search for lowest price product
    Then I am able to verify the item in my cart
    Then I close the browser



