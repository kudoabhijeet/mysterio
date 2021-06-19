import { Router } from 'express'
import { createQuestion, getQuestions } from '../controllers/questions.controller'
const bodyParser = require('body-parser')
const route = Router()

route.use(bodyParser.json())

route.get('/all', async (req, res) => {
    // TODO: get all content from database with controllers and services running count query
    var sum = 0
    const questions = await getQuestions()
    questions.forEach(question => {
        sum += question.correctScore
    })
    return res.status(200).json({
        status: 'success',
        score: sum,
        data: questions
    })
})

route.post('/upload', async (req, res) => {
    // TODO: create a new entry to database
    const hint = req.body.hint
    const url = req.body.imageURL
    const score = req.body.correctScore

    const savedQuestion = await createQuestion(hint, url, score)
    return res.status(200).json({
        status: 'success',
        data: savedQuestion
    })

})

route.post('/submit', async (req, res) => {
    // TODO: record submission from user

})


export default route