const data = require('./data.json')

const groupBy = (data, mapper) =>
  data.reduce(
    (groupedObj, { fields }) => ({
      ...groupedObj,
      [mapper(fields)]: 1 + (+[groupedObj[mapper(fields)]] || 0),
    }),
    {}
  )

const mapToCards = (obj) =>
  Object.keys(obj).reduce(
    (arr, key) => [...arr, { name: key, value: obj[key] }],
    []
  )

console.log(
  mapToCards(groupBy(data.issues, ({ status: { name } }) => name)),
  mapToCards(groupBy(data.issues, ({ issuetype: { name } }) => name))
)
