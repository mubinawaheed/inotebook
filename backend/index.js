const connectToMongo = require('./db')
connectToMongo()
const bodyParser = require('body-parser')
const express = require('express')
const app = express();
const port = 5500;
const authroute = require('./routes/auth')
const notesroute = require('./routes/note')
const cors = require('cors')
    //post request requires an additional middle ware that is body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())
    //middleware
app.use(express.json());
app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

//available routes
app.use('/api/auth', authroute)
app.use('/api/notes', notesroute)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});