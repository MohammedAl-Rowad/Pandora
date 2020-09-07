const express = require('express')
const app = express()
const cors = require('cors')
const { default: axios } = require('axios')
const port = 3000
const endPoint = 'https://edraak.atlassian.net/rest/api/2'
const { config } = require('dotenv')
config()
app.use(cors())

const { USERNAME, API_TOKEN } = process.env

app.get('/data', async (req, res, next) => {
  try {
    // const data = await axios
    //   .get(,
    //     'https://edraak.atlassian.net/rest/api/2/EC2020',
    //     {
    //       auth: {
    //         username: USERNAME,
    //         password: API_TOKEN // password
    //       },
    //     }
    //   )
    //   .then(({ data }) => data)
    res.json(require('./data'))
  } catch (error) {
    console.error(error)
    res.end()
  }
})

app.get('/projects', async (req, res) => {
  try {
    const data = await axios
      .get(`${endPoint}/project`, {
        auth: {
          username: USERNAME,
          password: API_TOKEN, // password
        },
      })
      .then(({ data }) => data)
    res.json(data)
  } catch (error) {
    console.error(error)
    res.end()
  }
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
