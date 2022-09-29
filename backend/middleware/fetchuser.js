var jwt = require('jsonwebtoken')


const fetchuser = (req, res, next) => {

    //get the user from jwt token and append id to request object

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzNDgzMGIyNDcwZTY1MmY0YjI1ZjdlIn0sImlhdCI6MTY2NDQ1NzMyMn0.fJ4v96uET_dzEBOwcYpNagwuVz_JkC1ibLZKD6bCGJ8"
        // const token = req.header('auth-token')
        // console.log(token)
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