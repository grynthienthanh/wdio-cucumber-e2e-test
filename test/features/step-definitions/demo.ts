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
Given(/^A web page is opened$/, async function () {
    await browser.url('/inputs')
    await browser.setTimeout({implicit:1500,pageLoad:10000})
    await browser.maximizeWindow()
})
When(/^Perform web interactions$/, async function () {
    // /**
    //  * Input text
    //  */
    // let num= 12345
    // let strNum= num.toString()
    // let ele= await $(`[type=number]`)
 
    // // await ele.setValue(strNum)
    // await ele.click()
    // for(let i =0; i<strNum.length;i++){
    //     let charStr = strNum.charAt(i)
    //     await browser.pause(1000)
    //     await browser.keys(charStr)
    // }  

    /**
     * Dropdown
     */
    let ele = await $('//select[@id="dropdown"]')
    let val = await ele.getText()
    chai.expect(val).to.equal("Please")
    await browser.debug()
})
