require('dotenv').config()
const app = require('./src/app')


// this callback works when our server is running
app.listen(3000, () => { 
    console.log('Server is running on port http://localhost:3000')
})