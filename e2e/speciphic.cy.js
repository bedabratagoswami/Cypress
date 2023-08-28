  describe("BASIC LOGIN", { taskTimeout: 60000},() => {
      it("LOGIN AND SEARCH FOR A QUERY UISNG DEFAULT COLLECTION", () => {
        //cy.visit(Cypress.env('test_app_url'))
      cy.task('aadLogin',{ username: Cypress.env('auth_username'), password: Cypress.env('auth_password') ,appUrl: 'https://login.microsoftonline.com/ca2ba8c3-b4b1-4aad-9251-d2dca59fd212/oauth2/v2.0/authorize?client_id=862ff324-c86a-4a2b-9bd7-30054e8c7ee2&redirect_uri=https%3A%2F%2Fyellow-bay-090f6720f.3.azurestaticapps.net&response_type=code&scope=openid+profile+api%3A%2F%2Ftest.ask.api.speciphic.ai%2FApp.AllAccess&state=40fd451923f94ed894025a2c395f129b&code_challenge=d6144cI8ngGG-uw6q-BIErWYMbLaMuEy6W1Q5oZTquk&code_challenge_method=S256&response_mode=query&prompt=none'})
            .then(({sessionStorage, localStorage}) => {
              cy.window().then( win => {
                for (const [key, value] of Object.entries(sessionStorage)) {
                  win.sessionStorage.setItem(key, value)
                }
                for (const [key, value] of Object.entries(localStorage)) {
                  win.localStorage.setItem(key, value)
                }
                cy.visit(Cypress.env('test_app_url'))
            })
            }).then(()=>{

              //Home Logo is visible
              cy.get('.MuiBox-root > img').should('be.visible');

               
              cy.get('.MuiBox-root.css-0 img').should("be.visible")
              //Logged in user name should be visible
              cy.contains(Cypress.env('login_name')).should("be.visible");

              //Type your search querry 'jury duty' 
              cy.get('.css-6gk8hf > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('jury duty')
              cy.wait(6000)

              //Click on Search Button and wait for the results to get populated
              cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
              cy.wait(12000)

              //Scroll down to see the search results including PDFs generated
              cy.get('.css-1peuo0q').scrollIntoView({ easing: 'linear' })

              //Click on the first PDF and check if its get downloaded and wait
              cy.get(':nth-child(1) > .css-12invgp > .MuiTypography-subtitle1 > .MuiTypography-root').click()
              cy.wait(5000)

              //Scroll above to the home page
              cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').scrollIntoView({ easing: 'linear' })

              //Select a different Test Collection and type with another search query and wait
              cy.get('.MuiSelect-select > .MuiBox-root > .MuiTypography-body1').click()
              cy.get('[data-value="64c7eef345e03f767850c210"] > .MuiBox-root > .MuiTypography-body1').click()
              cy.get('.css-6gk8hf > .MuiOutlinedInput-root > .MuiOutlinedInput-input').clear().type('jury duty')
              cy.wait(6000)
              cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
              cy.wait(12000)

              //Go to the home page and wait 
              cy.get('.MuiBox-root > img').click()
              cy.wait(3000)

              //Select the default collecyion 
              cy.get('.MuiBox-root > .MuiTypography-body1').click()
              cy.get('[data-value="64b6640169c47f0340b59cd7"] > .MuiBox-root > .MuiTypography-body1').click()

              //and then choose the first default search querry
              cy.get(':nth-child(2) > .MuiListItemText-root > .MuiTypography-root').click() 
              //Scroll above to the home page
              cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').scrollIntoView({ easing: 'linear' })             
            })
        })
        
    })