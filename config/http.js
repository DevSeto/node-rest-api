var process = require("process");

module.exports = {
  production: {
    port: process.env.PORT || 3010,
    authURL: "http://localhost:3000",
    authInnerURL: "http://localhost:33000",
    requestTimeout: 10000,

  },
  development: {
    port: process.env.PORT || 3010,
    authURL: "http://localhost:3000",
    authInnerURL: "http://localhost:33000",
    requestTimeout: 10000,
  }
}