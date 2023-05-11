import { Then } from "@wdio/cucumber-framework";
import chai from "chai";
Then(/^Inventory page should list (.*)$/, async function (noOfProducts) {
    if(!noOfProducts) throw Error(`Invanlid result: ${noOfProducts} `)
    let eleArr = await $$('.inventory_item_name')
    chai.expect(eleArr.length).to.be.equal(parseInt(noOfProducts)) 
  });

  Then(/^Validate price$/, async function () {
    let eleArr= await $$('.inventory_item_price')
    let priceStrArr=[]
    for (let i=0; i< eleArr.length;i++){
      let priceStr= eleArr[i].getText()
      priceStrArr.push(priceStr)
    }
    console.log(`>> Price is $: ${priceStrArr}`)

    let priceNumArr = priceStrArr.map(ele => parseInt(ele.replace("$","")))
    console.log(`>> Price in number is $: ${priceNumArr}`)
  });