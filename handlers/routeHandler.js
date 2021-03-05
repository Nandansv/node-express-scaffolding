const express = require('express')
const router = express.Router()

module.exports = router;


router.get('/getName',(req,res) => {
    res.send('Request Came in for GetName')
})

router.get('/getIdentity',(req,res) => {
    res.send('Request Came in for getIdentity')
})

router.get('/getSomethingelse',(req,res) => {
    res.send('Request Came in for getSomethingelse')
})