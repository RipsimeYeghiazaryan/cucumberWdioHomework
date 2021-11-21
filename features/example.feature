@all
Feature: Cucumber page WebDriver/IO

  Background: Open Home page
    Given I am on the home page

  @smoke
  Scenario Outline: Check header <page> page
    When I navigate to the <page> page
    Then I check header of <page>, it should be equal <header>

  Examples:
    | page      | header          |
    | women     | Women           |
    | dresses   | Dresses         |
    | tShirt    | T-shirts        |


  Scenario Outline: Check invalid emails
    When I navigate to the signIn page
    Then I should input invalid '<email>' and chek the <error>


    Examples:
    | email             | error                        |
    | abc47mail.ru      | Invalid email address        |
    | abc111asad@mail   | Invalid email address.       |


    @regression
    Scenario: Choose a product, add to cart and check
      When I navigate to the product
      Then I click on the quick view and choose parameters
      When I add it to my cart
      Then I shall validate that the product is in the shopping cart


