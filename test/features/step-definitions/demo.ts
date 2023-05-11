import { Given, When, Then } from "@wdio/cucumber-framework";
import chai, { expect } from "chai";
Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com/");
  await browser.pause(1800);
});
When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`>> searchItem: ${searchItem}`);
  let ele = await $("//textarea[@id='APjFqb']");
  await ele.setValue(searchItem);
  await browser.keys("Enter");
});
Then(/^Click on the first search result$/, async function () {
  let ele = await $("<h3>");
  ele.click();
});
Then(/^URL should match (.*)$/, async function (expectedURL) {
  console.log(`>> searchItem:${expectedURL}`);
  let url = await browser.getUrl();
  chai.expect(url).to.equal(expectedURL);
});

/**
 * Web interactions
 */
Given(/^A web page input is opened$/, async function () {
  await browser.url("/inputs");
  await browser.setTimeout({ implicit: 1500, pageLoad: 10000 });
  await browser.maximizeWindow();
});
Given(/^A web page checkboxes is opened$/, async function () {
  await browser.url("/checkboxes");
  await browser.setTimeout({ implicit: 1500, pageLoad: 10000 });
  await browser.maximizeWindow();
});
Given(/^A web page dropdown is opened$/, async function () {
  await browser.url("/dropdown");
  await browser.setTimeout({ implicit: 1500, pageLoad: 10000 });
  await browser.maximizeWindow();
});
Given(/^A web page window handling is opened$/, async function () {
  await browser.url("/windows");
  await browser.setTimeout({ implicit: 1500, pageLoad: 10000 });
  await browser.maximizeWindow();
});
When(/^Perform web interactions - input$/, async function () {
  // /**
  //  * I/ Input text
  //  */
  let num = 12345;
  let strNum = num.toString();
  let ele = await $(`[type=number]`);

  await ele.setValue(strNum);
  await ele.click();
  for (let i = 0; i < strNum.length; i++) {
    let charStr = strNum.charAt(i);
    await browser.pause(1000);
    await browser.keys(charStr);
  }
});
When(/^Perform web interactions - checkboxes$/, async function () {
  let eleArr = await $$('//form[@id="checkboxes"]/input');
  for (let i = 0; i < eleArr.length; i++) {
    let ele = eleArr[i];
    if (!(await ele.isSelected())) {
      ele.click();
    }
  }
  await browser.pause(5000);
  // await browser.debug();
});

When(/^Perform web interactions - dropdown$/, async function () {
  /**
   * II/ Dropdown
   * Actions:
   * 1. Assert default option is seleted
   * 2. Select by attribute, text, index
   * 3. get a list of options
   *
   */

  // 1
  // let ele = await $('//select/option[@selected="selected"]')
  // let val = await ele.getText()
  // chai.expect(val).to.equal('Please select an option')
  // await browser.debug()

  // 2
  // let ddEle= await $('#dropdown')
  // await ddEle.selectByIndex(2)
  // await browser.pause(50000)

  // 3
  let eleArr = await $$(`select > option`);
  let arr = [];
  for (let i = 0; i < eleArr.length; i++) {
    let ele = eleArr[i];
    let val = await ele.getText();
    arr.push(val);
    console.log(val);
  }
  console.log(`>> Options Array: ${arr}`);
});

When(/^Switch to window$/, async function () {
  await $('=Build something amazing').click()
  let currentWinTitle= await browser.getTitle()
  console.log(`>> The current window title: ${currentWinTitle}`)
  // await browser.debug();
});





