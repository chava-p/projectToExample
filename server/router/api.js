const router=require('express').Router();
const {createUser}=require('../controller/user')

router.post('/createUser',createUser)

module.exports=router