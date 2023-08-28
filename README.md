# Cypress
Automation Testing in Cypress
Test Plan using Cypress 

Cypress package version: 12.17.2 (Use the command npx cypress –version) 

npm install cypress --save-dev 

In your Cypress E2E folder create your test case file with the naming convention as Filename.cy.js which will be the entry point for your test cases.  

Save your env variables in the file cypress.env.json and get those values in your test cases using Cypress.env('your_variable') 

To run Cypress “npx cypress open” 

Why do we need to install Pupeteer????? 

Faced issues during login process related to Microsoft oAuth. This happens when user credentials are not saved in the browser and the test in Cypress runs in an infinite loop generating unlimited iframes.  Work around for that was to install Pupeteer and open a new browser and save the user credentials in the session and run the test in Cypress. 

npm i puppeteer 

To run the test in Icognito mode add the following in cypress.config.js  

      on('before:browser:launch', (browser = {}, args) => { 

        if (browser.name === "chrome") { 

             args.args.push("--incognito"); 

        } else if (browser.name === "edge") { 

          args.args.push("--inprivate"); 

        } 

        const existing = args.args.find(arg => arg.slice(0, 23) === '--remote-debugging-port'); 

        // Here you will need to persist the port to your plugins, whatever they may be 

        setDebuggingPortMyService(existing.split('=')); 

        return args; 

      }); 

      on('task', { aadLogin }); 

 

The above aadLogin is the pupeteer method which needs to be called and is imported using 

const { setDebuggingPortMyService, aadLogin } = require('./cypress/addLogin'); 

 

 cy.task('aadLogin',{ username: Cypress.env('auth_username'), password: Cypress.env('auth_password') ,appUrl: Cypress.env('URL')} 

 

 

 

The URL which we have used is  

https://login.microsoftonline.com/ca2ba8c3-b4b1-4aad-9251-d2dca59fd212/oauth2/v2.0/authorize?client_id=862ff324-c86a-4a2b-9bd7-30054e8c7ee2&redirect_uri=https%3A%2F%2Fyellow-bay-090f6720f.3.azurestaticapps.net&response_type=code&scope=openid+profile+api%3A%2F%2Ftest.ask.api.speciphic.ai%2FApp.AllAccess&state=40fd451923f94ed894025a2c395f129b&code_challenge=d6144cI8ngGG-uw6q-BIErWYMbLaMuEy6W1Q5oZTquk&code_challenge_method=S256&response_mode=query&prompt=none 

 

Application to be tested 

https://yellow-bay-090f6720f.3.azurestaticapps.net/ 

Start the Cypress using the command  

npx cypress open. 

Choose E2E Testing. 

Choose your Browser and then select your test case. 
