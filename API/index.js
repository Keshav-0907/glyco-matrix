const express = require('express')
const app = express()
const Routes = require('./router/Routes')

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        msg : 'API is working!'
    })
})

app.use('/', Routes)



app.listen(8080, () => {
    console.log('Server is running on port 8080')
})