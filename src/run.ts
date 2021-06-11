import app from './server'
import { connect } from './db/connect'


(async function start() {

    // await connect()
    
    app.listen(3000, () => {
        console.log('Server started on http://localhost:3000')
    })
    
    

})()