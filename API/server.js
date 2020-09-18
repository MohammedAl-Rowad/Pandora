const express = require('express')
const app = express()
const cors = require('cors')
const { default: axios } = require('axios')
const port = 3000
const { config } = require('dotenv')
config()
const { ENDPOINT } = process.env

const { headers, auth, traverseThoughPages } = require('./functions.helpers')

app.use(cors())

const headersFunc = (id) => ({
  fields: id
    ? []
    : [
        'key',
        'name',
        'avatarUrls',
        'projectCategory',
        'projectTypeKey',
        'simplified',
        'style',
      ].join(),
  id,
})

app.get('/projects/:id?', async (req, res) => {
  const { id } = req.params
  const { userIds } = req.query
  const h = headersFunc(id)
  const assingee = userIds ? ` AND assignee IN (${userIds})` : ''
  try {
    const url = id
      ? `${ENDPOINT}/search${
          id === 'all' ? '' : `?jql=project=${id} ${assingee}`
        }`
      : `${ENDPOINT}/project`

    const data = id
      ? await traverseThoughPages(url, {
          fields: [
            'key',
            'name',
            'avatarUrls',
            'issuetype',
            'status',
            'name',
            'projectCategory',
            'projectTypeKey',
            'created',
            'simplified',
            'style',
          ].join(),
        })
      : await axios
          .get(url, {
            auth,
            params: headers(h),
          })
          .then(({ data }) => data)

    const project =
      !id || id === 'all'
        ? null
        : await axios
            .get(`${ENDPOINT}/project/${id}`, { auth, params: headers(h) })
            .then(({ data }) => data)

    res.json(
      !id ? data : { issues: [...data.data], project, total: data.total }
    )
  } catch (error) {
    console.error(error)
    res.end()
  }
})

app.get('/users', async (req, res) => {
  try {
    const data = await traverseThoughPages(
      `${ENDPOINT}/users?jql=active=true`,
      {},
      null
    )
    res.json(data)
  } catch (error) {
    console.error(error)
    res.end()
  }
})

app.get('/projects/:ids/:userId', async (req, res) => {
  const { ids, userId } = req.params
  let url = ''
  if (ids === 'all') {
    url = `${ENDPOINT}/search?jql=assignee IN (${userId})`
  } else {
    url = `${ENDPOINT}/search?jql=project IN (${ids}) AND assignee IN (${userId})`
  }

  res.json(
    await traverseThoughPages(url, {
      fields: [
        'key',
        'name',
        'avatarUrls',
        'issuetype',
        'status',
        'name',
        'created',
        'projectCategory',
        'projectTypeKey',
        'simplified',
        'style',
      ].join(),
    })
  )
})

app.get('/epics', async (req, res) => {
  try {
    const data = await traverseThoughPages(
      `${ENDPOINT}/search?jql=issuetype="Epic"`
    )
    res.json(data)
  } catch (error) {
    console.error(error)
    res.end()
  }
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
