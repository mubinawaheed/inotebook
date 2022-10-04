var jwt = require('jsonwebtoken')


const fetchuser = (req, res, next) => {

    //get the user from jwt token and append id to request object

    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzNDgzMGIyNDcwZTY1MmY0YjI1ZjdlIn0sImlhdCI6MTY2NDg4MTcyOH0.TZQkrWQzLXO6_TRsD1VcAz9dftQb9fgcg0r4Hl1BNUE"
    const token = req.header('auth_token')
    console.log(token)
    if (!token) {
        return res.status(401).send({ error: 'access denied in fetch user middleware, no auth token found' })
    }
    try {
        JWT_secretkey = 'we were on a break';
        const data = jwt.verify(token, JWT_secretkey);
        console.log("this is data", data.user)
        req.user = data.user;

    } catch (error) {
        res.status(401).send({ error: 'access denied; authenticate using a valid token' })
    }
    next()
}
module.exports = fetchuser;