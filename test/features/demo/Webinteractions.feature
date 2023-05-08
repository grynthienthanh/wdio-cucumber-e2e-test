Feature: Web Interaction

    @demo
    Scenario Outline: Demo with Interactions
        Given A web page is opened
        When Perform web interactions


        Examples:
            | Test ID    | SearchItem | ExpectedURL           |
            | Demo_TC001 | wdio       | https://webdriver.io/ |