
const express = require('express')
const response = express.response
const request = express.request
const path = require('path');
const base = require('../database')

class dados {

        register = (req = request , res = response ) => {
                res.sendFile(path.join(__dirname, '..', 'views', 'register.html'))
            };

        login = (req = request , res = response)=>{
                res.sendFile(path.join(__dirname, '..', 'views' , 'login.html'))
        }

        database = (req = request , res = response)=>{
                res.send(base)
        }
} 
module.exports = dados







