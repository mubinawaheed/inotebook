var jwt = require('jsonwebtoken')


const fetchuser = (req, res, next) => {

    //get the user from jwt token and append id to request object

    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzNDgzMGIyNDcwZTY1MmY0YjI1ZjdlIn0sImlhdCI6MTY2NDkwMTA3OH0.l-ppcJGl_MTLKYYeknMNl9SsfA29l90_HttKyLkRTYM"
    const token = req.header('auth_token')
        // console.log("this is the token", token)
    if (!token) {
        return res.status(401).send({ error: 'access denied in fetch user middleware, no auth token found' })
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
