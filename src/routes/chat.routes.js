const express = require("express")
const { authUser } = require("../middelware/auth.middelware")
const {createChat} = require('../controllers/chat.controler')



const router = express.Router();

router.post('/',authUser,createChat)




module.exports = router