import app from './server'
import { connect } from './db/connect'

const port = process.env.PORT || 3000;
(async function start() {

    await connect()
    
    app.listen(port, () => {
        console.log(`Server listening on http://localhost:${port}`)
    })
    
    

})()