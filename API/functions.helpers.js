const { config } = require('dotenv')
config()

const { USERNAME, API_TOKEN } = process.env

const headers = (addOrOverrideObj) => ({
  maxResults: 100,
  ...addOrOverrideObj,
})

const auth = {
  username: USERNAME,
  password: API_TOKEN, // password
}

module.exports = { headers, auth }
