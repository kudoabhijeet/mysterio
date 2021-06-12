import { Router } from 'express'


const route = Router()

route.get('/all', async (req, res) => {
    // TODO: get all content from database with controllers and services running count query

    return res.status(200).json({
        status: 'success',
        data: ''
    })

})

route.post('/upload', async (req, res) => {
    // TODO: create a new entry to database

})

route.post('/submit', async (req, res) => {
    // TODO: record submission from user
    

})


export default route