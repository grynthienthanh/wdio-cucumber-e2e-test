Feature: Web Interaction

    @demo
    Scenario: Demo with input
        Given A web page input is opened
        When Perform web interactions - input

    Scenario: Demo with dropdown
        Given A web page dropdown is opened
        When Perform web interactions - dropdown

    Scenario: Demo with checkboxes
        Given A web page checkboxes is opened
        When Perform web interactions - checkboxes

    Scenario: Handling window tab
        Given A web page window handling is opened
        When Switch to window

    Scenario: Handling popup
        Given A web page popup is opened
        When Perform web interaction - popup

    Scenario: Hanlind web table
        Given A web page table is opened
        When Perform web interaction - popup

        Examples:
            | Test ID    | SearchItem | ExpectedURL           |
            | Demo_TC001 | wdio       | https://webdriver.io/ |

