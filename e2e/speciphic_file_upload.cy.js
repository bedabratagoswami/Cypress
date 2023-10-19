 describe("BASIC LOGIN", { taskTimeout: 60000},() => {
      it("LOGIN AND SEARCH FOR A QUERY UISNG DEFAULT COLLECTION", () => {
        //cy.visit(Cypress.env('test_app_url'))
        
      cy.task('aadLogin',{ username: Cypress.env('auth_username'), password: Cypress.env('auth_password'),
      appUrl: Cypress.env('dev_app_url')})
            .then(({sessionStorage, localStorage}) => {
              console.log("INSIDE SPECIFIC ~~~~~~~~~~~~~")
              cy.window().then( win => {
                console.log("BEFOREEEEEE SETTING LOCAL STORAGE~~~~~~~~~~~~~")
                for (const [key, value] of Object.entries(localStorage)) {
                  win.localStorage.setItem(key, value)
                }
                console.log("AFTER SETTING LOCAL STORAGE~~~~~~~~~~~~~")
                
          
                  for (const [key, value] of Object.entries(sessionStorage)) {
                    win.sessionStorage.setItem(key, value)
                  }




                


                console.log("VISITING THE FINAL HOME PAGE-----------")
                cy.visit(Cypress.env('dev_app_url'))
                // cy.origin(Cypress.env('test_app_url'),()=>{
                //   console.log("VISITE DTHE HOME PAGEEEEEEEEEE+++++++++++")
                // })
            })
            })
            .then(()=>{
              console.log("STARTING TEST CASE++++++++++++++")
              cy.get('.MuiAvatar-root').click()
              cy.get(':nth-child(5) > .MuiListItemText-root > .MuiTypography-root').click()
              cy.wait(6000)
              cy.get('[data-id="647a2a1073a1a9146dd841e9"] > [data-field="name"] > .MuiBox-root').click()
              cy.wait(6000)
              cy.get("input[type='file']").click({force: true}).selectFile("cypress/fixtures/sample1.pdf")

            //   const fileName = 'sample1.pdf';
            //   //cy.contains("Add Files").selectFile(fileName)
            //   //cy.get('#\\:r2n\\:').click();
            //  // cy.get("button span svg[data-testid='AddIcon']").find().click();
            //  cy.wait(5000);
            //  /*cy.contains("Add Files").attachFile(fileName).then((p)=>{
            //   cy.log("ADD FILES*********",p)
            //      cy.stub(p, "prompt").attachFile(fileName)
            //   expect(p).to.equal("Add Files")
            //      cy.wait(6000)
            //  });*/
            //  //cy.contains("Add Files").click();
            //  cy.fixture(fileName,'base64').then(filecontent=>{
            //   cy.get('[data-testid="AddIcon"]').closest('input').upload({
            //     fileContent: filecontent,
            //     fileName: fileName,
            //   });
            //   cy.get('#\\:rt2\\:').
            //   find('input').trigger('change',{force:true})
            //  });
              
              //cy.wait(9000)
             // cy.get("[data-testid='AddIcon']").click();
             // cy.log("ADD FILES")
               //cy.on("window:confirm",(str)=>{
                 //cy.log("ADDDING FILES")
              //   expect(str).to.equal("Add Files")
              //   cy.get('#\\:r3o\\:').click();
               //})

              // cy.window().then((p)=>{
              //   cy.log("ADD FILES*********",p)
              //   cy.stub(p, "prompt").attachFile(fileName)
              //   //expect(p).to.equal("Add Files")
              //   cy.wait(6000)
                
              //   cy.get('#\\:r41\\:').click();
              // })
            //  cy.get('#\\:r41\\:').click();
              // Click the submit button
              //cy.get('#\\:r3o\\:').click()
              //cy.get('#\\:r3n\\:').click();
              //cy.wait(6000)
              //Home Logo is visible
              //cy.get('.MuiBox-root > img').should('be.visible');

               
              //cy.get('.MuiBox-root.css-0 img').should("be.visible")
              //Logged in user name should be visible
              //cy.contains(Cypress.env('login_name')).should("be.visible");

              // //Type your search querry 'jury duty' 
              // cy.get('.css-6gk8hf > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('jury duty')
              // cy.wait(6000)

              // //Click on Search Button and wait for the results to get populated
              // cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
              // cy.wait(12000)

              // cy.get('.MuiAlert-message').then(($msg)=>{
              //   if($msg.text().includes('Success! I found an answer for you!')){
              //     //Scroll down to see the search results including PDFs generated
              // cy.get('.css-1peuo0q').scrollIntoView({ easing: 'linear' })

              // //Click on the first PDF and check if its get downloaded and wait
              // cy.get(':nth-child(1) > .css-12invgp > .MuiTypography-subtitle1 > .MuiTypography-root').click()
              // cy.wait(5000)
              //   }
              // })

              

              // //Scroll above to the home page
              // cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').scrollIntoView({ easing: 'linear' })

              // //Select a different Test Collection and type with another search query and wait
              // cy.get('.MuiSelect-select > .MuiBox-root > .MuiTypography-body1').click()
              // cy.get('[data-value="647a2a1073a1a9146dd841e9"] > .MuiBox-root > .MuiTypography-body1').click()
              // //cy.get('[data-value="647a1f77add5abce3805557c"] > .MuiBox-root > .MuiTypography-body1').click()
              // cy.get('.css-6gk8hf > .MuiOutlinedInput-root > .MuiOutlinedInput-input').clear().type('jury duty')
              // cy.wait(6000)
              // cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
              // cy.wait(10000)
              // cy.get('.MuiAlert-message').then(($msg)=>{
              //   if($msg.text().includes('Success! I found an answer for you!')){
              //     //Scroll down to see the search results including PDFs generated
              // cy.get('.css-1peuo0q').scrollIntoView({ easing: 'linear' })

              // //Click on the first PDF and check if its get downloaded and wait
              // cy.get(':nth-child(1) > .css-12invgp > .MuiTypography-subtitle1 > .MuiTypography-root').click()
              // cy.wait(5000)
              //   }
              // })
              // //Go to the home page and wait 
              // cy.get('.MuiGrid-grid-sm-8').click()
              // //cy.get('.MuiGrid-grid-sm-8 > .css-1yn1p95').click()
              // //cy.get('.MuiGrid-root > .MuiGrid-item > .MuiGrid-grid-sm-8 > .css-17m3o2v').click()
              // //cy.get('.MuiTypography-root > .MuiTypography-body1 > .css-aj30ch').click()
              // //cy.get('. MuiBox-root > .css-eumdal').click()
              // cy.wait(3000)

              // //Select the default collecyion 
              // //cy.get('.MuiBox-root > .MuiTypography-body1').click()
              // cy.get('.MuiSelect-select > .MuiBox-root > .MuiTypography-body1').click()
              // cy.get('[data-value="647a1f77add5abce3805557c"] > .MuiBox-root > .MuiTypography-body1').click()
              // //cy.get('[data-value="64b6640169c47f0340b59cd7"] > .MuiBox-root > .MuiTypography-body1').click()
              // cy.wait(3000)
              // //and then choose the first default search querry
              // cy.get(':nth-child(2) > .MuiListItemText-root > .MuiTypography-root').click() 
              // cy.wait(10000)
              // //Scroll above to the home page
              // cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').scrollIntoView({ easing: 'linear' })   
              
              //Search History

              //Click on the user image 
              //cy.get('.MuiAvatar-img').click()
              // cy.get('.MuiAvatar-root').click()
              // cy.get(':nth-child(4) > .MuiListItemText-root > .MuiTypography-root').click()
              // cy.wait(3000)

              // //Sort By Date
              // cy.contains('Date').click()
              // cy.wait(5000)
              // cy.get('#\\:r2\\:').click()
              // cy.get('[data-value="25"]').click()
              // //cy.get('.MuiDataGrid-footerContainer').scrollTo('bottom',{ easing: 'linear' })
              // cy.wait(3000)
              // cy.get('#\\:r1\\:').type('jury duty')
              // cy.wait(3000)
              // cy.get('.MuiGrid-grid-sm-8 > .css-1yn1p95').click()
              //cy.get('.MuiAvatar-img').click()
              //cy.get('.MuiChip-label').click()
            })
        })
        
    })
