import { Given } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Login successfully$/, async function () {
  await browser.url("");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });

  await $('#user-name').setValue('standard_user')
  await $('#password').setValue('secret_sauce')
  await $('#login-button').click()

});
