var jwt = require('jsonwebtoken')


const fetchuser = (req, res, next) => {

    //get the user from jwt token and append id to request object

    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzNDZlZmJiOTc4ZTc5ODczNjA2YzVlIn0sImlhdCI6MTY2NDQzOTI2OH0.D05vBUwBJmo205OHu1X5Tg37XNs0JgJ2_MKMCtFdHfk"
    const token = req.header('auth-token')
    console.log(token)
    if (!token) {
        res.status(401).send({ error: 'access denied' })
    }
    try {

        JWT_secretkey = 'we were on a break';
        const data = jwt.verify(token, JWT_secretkey);
        req.user = data.user;

    } catch (error) {
        res.status(401).send({ error: 'access denied; authenticate using a valid token' })

    }

    next()



}
module.exports = fetchuser;