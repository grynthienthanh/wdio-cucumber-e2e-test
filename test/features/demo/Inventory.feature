Feature: Google Search

    @demo
    Scenario Outline: Run first demo feature
        Given Login successfully
        Then Inventory page should list <NumberOfProducts>
        Then Validate price
        Examples:
            | Test ID    | NumberOfProducts |
            | Demo_TC001 | 6                |