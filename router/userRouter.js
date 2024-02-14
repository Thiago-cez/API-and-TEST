const router = require('express').Router();

const { getUser } = require('../controller/userController')

router.get('/user', getUser)



module.exports = router;