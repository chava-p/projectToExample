const Users = require('../model/user')

const createUser = (req, res) => {
    
    const currentUser = new Users(
        req.body
    )
    currentUser.save().then(
        (data) => {
            res.status(200).json({ user: data })
        }
    ).catch(
        (err) => {
            console.log(err);
            res.status(500).json({ massage: "create user not sucsses" })
        }
    )
    
}

module.exports = { createUser }