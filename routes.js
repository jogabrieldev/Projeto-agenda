const express = require('express')
const route = express.Router()
const response = require('./src/controllers/home.js')
const userSubmit = require('./src/controllers/userController.js')

const respost = new response
const userResponse = new userSubmit

route.get('/register', respost.register)
route.post('register' , )
route.post('/login' , userResponse.primary)
route.get('/login' , respost.login)
route.get('/' , respost.database)
module.exports = route
