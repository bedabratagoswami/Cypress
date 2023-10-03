var jwt = require('jsonwebtoken');
const client_iddd = Cypress.env('cypress.env.json')
Cypress.Commands.add('login', () => {
  return cy
    .request({
      method: 'POST',
      url: 'https://login.microsoftonline.com/ca2ba8c3-b4b1-4aad-9251-d2dca59fd212/oauth2/token',
      form: true,
      body: {
        grant_type: 'password',
        tenant: 'ca2ba8c3-b4b1-4aad-9251-d2dca59fd212',
        client_id: '862ff324-c86a-4a2b-9bd7-30054e8c7ee2',
        client_secret: 'D6K8Q~stHIIMpjWtHjh7lMZU0ppPwi6gkEC5fcYj',
        username: 'abc@dummy.com',
        password: '************',
        resource: '862ff324-c86a-4a2b-9bd7-30054e8c7ee2',
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    })
    .then((response) => {
      sessionStorage.setItem('access_token', response.body.access_token);
    });
    
});

