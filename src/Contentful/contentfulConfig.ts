const contenful = require('contentful')

const client = contenful.createClient({
  space: process.env.SPACE,
  accessToken: process.env.ACCESS_TOKEN
})

export {client}