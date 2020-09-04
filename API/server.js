const express = require('express')
const app = express()
const cors = require('cors')
const { default: axios } = require('axios')
const port = 3000

app.use(cors())

app.get('/data', async (req, res, next) => {
  const data = await axios.get().then(({ data }) => data)

  res.json(data)
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
