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
const status = mapToCards(groupBy(data.issues, ({ status: { name } }) => name))

console.log(
  status,
  mapToCards(groupBy(data.issues, ({ issuetype: { name } }) => name))
)

const keys = Object.keys(groupBy(data.issues, ({ status: { name } }) => name))

console.log(
  groupBy(data.issues, ({ created }) => new Date(created).getFullYear())
)

// {
//   "name": "Svalbard and Jan Mayen",
//   "series": [
//     {
//       "value": 6926,
//       "name": "2016-09-17T00:15:18.510Z"
//     },
//     {
//       "value": 2794,
//       "name": "2016-09-20T02:07:08.657Z"
//     },
//     {
//       "value": 5560,
//       "name": "2016-09-16T11:04:54.018Z"
//     },
//     {
//       "value": 2405,
//       "name": "2016-09-17T11:09:05.691Z"
//     },
//     {
//       "value": 6324,
//       "name": "2016-09-16T19:44:26.687Z"
//     }
//   ]
// },
