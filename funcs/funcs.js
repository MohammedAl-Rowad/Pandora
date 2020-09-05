const data = require('./data.json')

const groupBy = (data, mapper) =>
  data.reduce(
    (groupedObj, { fields }) => ({
      ...groupedObj,
      [mapper(fields)]: 1 + (+[groupedObj[mapper(fields)]] || 0),
    }),
    {}
  )

const statuses = groupBy(data.issues, ({ status: { name } }) => name)

const issuesTypes = groupBy(data.issues, ({ issuetype: { name } }) => name)

const mapToCards = (obj) => {
  return Object.keys(obj).reduce(
    (arr, key) => [...arr, { name: key, value: obj[key] }],
    []
  )
}

console.log(
  statuses,
  issuesTypes,
  mapToCards(statuses),
  mapToCards(issuesTypes)
)
