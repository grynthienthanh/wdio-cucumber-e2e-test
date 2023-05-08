Feature: Google Search

    @demo
    Scenario Outline: Run first demo feature
        Given Google page is opened
        When Search with <SearchItem>
        Then Click on the first search result
        Then URL should match <ExpectedURL>

        Examples:
            | Test ID    | SearchItem | ExpectedURL           |
            | Demo_TC001 | wdio       | https://webdriver.io/ |