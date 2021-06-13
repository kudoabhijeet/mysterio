import { Router } from 'express'
import { createQuestion, getQuestions } from '../controllers/questions.controller'


const route = Router()

route.get('/all', async (req, res) => {
    // TODO: get all content from database with controllers and services running count query
    const questions = await getQuestions()
    return res.status(200).json({
        status: 'success',
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