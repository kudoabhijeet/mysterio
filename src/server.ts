import express from 'express'
import cors from 'cors'

const app = express() 

app.use(express.json())
app.use(cors())

app.get('/', function (req, res) {
    res.send({
        "status": "running"
    })
  })
// app.use('/api', apiRoute)
// app.use('/', redirectRoute)


export default app