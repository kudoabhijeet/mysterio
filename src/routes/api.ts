import { Router } from 'express'


const route = Router()

route.get('/urls/:code', async (req, res) => {
    

    return res.status(200).json({
        status: 'success',
        data: ''
    })

})

route.post('/upload', async (req, res) => {
    // TODO: create a new shortcode entry and send the details back
    

})

route.put('/urls/:code', async (req, res) => {
    

    return res.status(201).json({
        status: "success",
        data: ''
    })
})

export default route