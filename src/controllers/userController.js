const express = require('express')
const response = express.response
const request = express.request
const path = require('path');
const Login = require('../models/homeModelUser.js')
const infoUserBase= require('../models/consultDataBase.js')
const validaRegisteUser = require('../models/registerUser.js')


class infor  {

      primary = (req = request , res = response)=>{
        const userLogin = new Login(req.body)
        
          res.send(userLogin.body)
      }
         secundary  = async (req = request , res = response)=>{
          const consultInfoDataBase = new infoUserBase()
        try {
            return  await consultInfoDataBase.userSubmitDate(req, res) 
            
            
        } catch (error) {
         //res.status(500).send('erro no controllers')
         error
        }
          
       }
    
}
module.exports = infor

