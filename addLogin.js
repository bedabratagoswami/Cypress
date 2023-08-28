// In cypress/plugins folder
const puppeteer = require('puppeteer-core');

module.exports = {
  debuggingPort: '',
  setDebuggingPortMyService(port) {
    [, debuggingPort] = port;
    return null;
  },
  async aadLogin(options = {}) {
    console.log("task triggered :::: ",options)
    const username = options.username;
    const password = options.password;
    const appUrl = options.appUrl;
    const emailSelector = "[name='loginfmt']";
    const passwordSelector = "[name='passwd']";
    const forgotSelector = "[id='idA_PWD_ForgotPassword']";
    const submitButtonSelector = 'input[type=submit]';
    const browser = await puppeteer.connect({
      browserURL: `http://localhost:${debuggingPort}`,
    });
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage()
    await page.goto('https://yellow-bay-090f6720f.3.azurestaticapps.net/');
    await page.waitForNavigation();
      
    await page.waitForSelector(emailSelector);
    await page.type(emailSelector, username);
    await page.keyboard.press('Enter');
    await page.waitForNavigation();
    await new Promise(r => setTimeout(r, 2000));
   await page.waitForSelector(passwordSelector);
   await page.focus(passwordSelector);
    await page.type(passwordSelector, password);
    //await page.waitForSelector(forgotSelector);
    //await page.click(forgotSelector);
    await page.waitForSelector(submitButtonSelector);
    await page.click(submitButtonSelector);

    await page.waitForNavigation();
    await page.waitForSelector(submitButtonSelector);
    await page.click(submitButtonSelector);
    await page.waitForNavigation();
    console.log("GETTING  THE BROWSER LOCAL STORAGE *****************")
    const localStorage = await page.evaluate(() =>  Object.assign({}, window.localStorage));
    await new Promise(r => setTimeout(r, 5000));
    console.log("GETTING  THE BROWSER SESSION STORAGE *****************")
    const sessionStorage = await page.evaluate(() =>  Object.assign({}, window.sessionStorage));
    //await new Promise(r => setTimeout(r, 3000));
    console.log("TRYING TO CLOSE THE BROWSER++++++++++++++")
    await page.close()
    console.log("BROWER CLOSED*************************")
    //await browser.close();
    return{localStorage: localStorage, sessionStorage: sessionStorage}
    },
    };