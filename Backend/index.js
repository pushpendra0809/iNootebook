  const connectToMongo = require("./db");
  const express = require('express')
  var cors = require('cors')

  connectToMongo();
const app = express()
const port = 5000
// var app = express()

app.use(cors())
 
app.use(express.json())

//Available Router
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
// app.use('/api/note',require('./routes/note'))
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
}) 

