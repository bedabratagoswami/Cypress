 describe("BASIC LOGIN", { taskTimeout: 60000},() => {
      it("LOGIN AND SEARCH FOR A QUERY UISNG DEFAULT COLLECTION", () => {
        //cy.visit(Cypress.env('test_app_url'))
        
      cy.task('aadLogin',{ username: Cypress.env('auth_username'), password: Cypress.env('auth_password'),
      appUrl: Cypress.env('dev_app_url')})
            .then(({sessionStorage, localStorage}) => {
              cy.window().then( win => {
                for (const [key, value] of Object.entries(localStorage)) {
                  win.localStorage.setItem(key, value)
                }
                  for (const [key, value] of Object.entries(sessionStorage)) {
                    win.sessionStorage.setItem(key, value)
                  }
                cy.visit(Cypress.env('dev_app_url'))
                // cy.origin(Cypress.env('test_app_url'),()=>{
                //   console.log("VISITE DTHE HOME PAGEEEEEEEEEE+++++++++++")
                // })
            })
            })
            .then(()=>{
              cy.wait(6000)
              cy.log('NOW DOING SEARCH USERS')
              cy.get('.MuiAvatar-root > .MuiTypography-root').click()
               if (cy.get(':nth-child(6) > .MuiListItemText-root > .MuiTypography-root')) {
                 cy.get(':nth-child(6) > .MuiListItemText-root > .MuiTypography-root').click()
                 cy.get('.MuiBox-root > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root').click()
                 cy.get('#outlined-required').type('test123@weareflexday.com')
                 cy.get('#demo-simple-select').click()
                 cy.get('[data-value="admin"]').click()
                 cy.get('#\\:r1b\\:').click()
                  }
              else {
                 cy.get(':nth-child(4) > .MuiListItemText-root > .MuiTypography-root').click()
               }

              cy.wait(10000)
              cy.get('#\\:r3\\:').type('test123@weareflexday.com')
              //cy.get('MuiSvgIcon-root > MuiSvgIcon-fontSizeMedium > css-14yq2cq').click()
              cy.get(`[d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z']`)
              .each((x)=>{
                console.log("SVG****************",x)
                console.log( x + ": " + (x).get(0) );
                // cy.get('#outlined-required').then(($msg)=>{
                //   if($msg.text().includes('test123@weareflexday.com')){
                //     cy.get('#demo-simple-select').click()
                //     cy.get('[data-value="user"]').click()
                //     cy.get('#\:r2a\:').click()
                //     cy.wait(50000)
                //     cy.get('[data-testid="DeleteForeverIcon"]').click()
                //     cy.get('.MuiDialogActions-root > .MuiButton-contained').click()
                //     cy.wait(50000)
                //     cy.get('#\\:r3\\:').type('test123@weareflexday.com')
                //   }
                // })
              }

              )
              //cy.get('[data-testid="EditIcon"]').click()
              //cy.contains('svg', '[data-testid="EditIcon"]').click()
              //cy.get('.MuiGrid-container > :nth-child(5) > .MuiButtonBase-root').click()
              //cy.get('svg').should('have.attr','data-testid','EditIcon').click()
              // cy.get('svg').each((y)=>{
              //   cy.wrap(y)
              //   .within((x) => {
              //     console.log(x)
              //     cy.get(`[d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z']`).click()
              //     // if(cy.get('svg path').contains('nnnnnnnnnnnnnnnnnnnnnnn')){
              //     //   console.log('VERY TRUEEEEEEEEEEEEE')
              //     // }
              //     // if(cy.get("viewBox[data-testid='EditIcon7888']")){
              //     //   console.log('TRUEEEEEEEEEEEEEE')
              //     //   cy.get("viewBox[data-testid='EditIcon']").click()
              //     // }
                  
              //     //cy.get('[data-testid="EditIcon"]')
              //   })
              //})
              
              
              


            })
        })
        
    })
