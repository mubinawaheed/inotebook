const connectToMongo = require('./db')
connectToMongo()
const bodyParser = require('body-parser')
const express = require('express')
const app = express();
const port = 5500;
const authroute = require('./routes/auth')
const notesroute = require('./routes/note')

app.use(bodyParser.json())

//middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//available routes
app.use('/api/auth', authroute)
app.use('/api/notes', notesroute)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});