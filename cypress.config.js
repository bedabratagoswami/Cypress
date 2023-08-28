const { defineConfig } = require("cypress");
const { setDebuggingPortMyService, aadLogin } = require('./cypress/addLogin');

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // on('before:browser:launch', (browser = {}, launchOptions) => {
      //   /* ... */
      //   console.log(launchOptions.args);
      //  if (browser.name === "chrome") {
      //    launchOptions.args.push("--incognito");
      //  }
      //  return launchOptions;
      // })
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
    },
  },

});
