const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

const corsOptions = {
  exposedHeaders: 'Authorization',
}
app.use(cors(corsOptions));
app.use(express.json())
app.use(routes)

app.listen(3333)
