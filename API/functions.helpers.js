const { config } = require('dotenv')
const { default: axios } = require('axios')
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

const traverseThoughPages = async (
  url,
  obj,
  key = 'issues',
  maxPages = 1000
) => {
  let data = []
  let startAt = 0
  let total = null
  // return { data: x, total: 4312 }
  for (let _ = 0; _ < maxPages; _++) {
    const newData = await axios
      .get(url, {
        auth,
        params: headers({
          ...obj,
          startAt,
        }),
      })
      .then(({ data }) => data)
    startAt += 100

    data = [...data, ...(key ? newData[key] : newData)]
    total = newData.total
    const toCheck = key ? newData[key] : newData
    if (!toCheck || toCheck.length === 0) {
      // writeFileSync('./dataz.json', JSON.stringify(data, null, 2))
      break
    }
  }
  return { data, total }
}

module.exports = { headers, auth, traverseThoughPages }
