Feature: Practice Software Testing

  Background:
    Given I open the home page

  Scenario: Home page loads
    Then the URL should contain "practicesoftwaretesting"
    And "body" should be visible
    And ".container" should exist

  Scenario: Navigation exists
    Then "nav" should exist and be visible
    And there should be more than 2 "a" elements
    And ".navbar-brand" should exist

  Scenario: Products visible
    Then products should be displayed
    And the first product should be visible

  Scenario: Search works
    When I search for "hammer"
    Then products should be displayed
    And the page should contain "hammer"

  Scenario: Invalid search
    When I search for "zzzz"
    Then "body" should exist

  Scenario: Open product page
    When I open the first product
    Then the URL should contain "/product"
    And "h1" should exist
    And "button" should exist

  Scenario: Add to cart
    When I open the first product
    And I add the product to the cart
    And I open the cart
    Then the URL should contain "/checkout"
    And "body" should exist
    And "body" should be visible

  Scenario: Register page opens
    When I visit "/auth/register"
    Then the URL should contain "register"
    And "form" should exist
    And there should be more than 0 "input" elements

  Scenario: Login valid structure
    When I visit "/auth/login"
    Then "input[type='email']" should exist
    And "input[type='password']" should exist
    And "button" should exist

  Scenario: Login invalid attempt
    When I login with "wrong@test.com" and "123"
    Then the URL should contain "login"
    And "body" should exist
    And "body" should be visible

  Scenario: Category filter
    When I select the "Hand Tools" category
    Then products should be displayed

  Scenario: Price filter
    When I filter products between 0 and 100
    Then products should be displayed

  Scenario: Contact page
    When I visit "/contact"
    Then "form" should be visible
    And "input" should exist
    And "textarea" should exist

  Scenario: Contact page URL
    When I visit "/contact"
    Then the URL should contain "/contact"