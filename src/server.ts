import express from 'express'
import cors from 'cors'
import apiRoute from './routes/api'
const app = express() 

app.use(express.json())
app.use(cors())

app.get('/test', function (req, res) {
    res.send({
        "status": "running"
    })
  })
app.use('/api', apiRoute)

export default app