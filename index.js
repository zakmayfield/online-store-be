/////imports/////
require('dotenv').config()
const server = require('./api/server.js')

/////decalre port/////
const PORT = process.env.PORT || 4000

/////setting up server to run on port 4000/////
server.listen(PORT, () => console.log(`\n Running on port ${PORT} \n`))