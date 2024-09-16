
const express = require('express')
const response = express.response
const request = express.request
const pool = require('../database.js')
class consultDataBase {
    constructor(){
      
    }

    async userSubmitDate(req = request , res = response){ 
        try {
            const query = 'INSERT INTO dados (email , senha) VALUES ($1, $2)';
        const {mail , pin}=  req.body
        
         if(!mail || !pin)return res.send ('insira os dados')
        const values = [mail , pin];
       
        await pool.query(query , values)
         
          res.send('enviado com sucesso')
    
        } catch (error) {
            console.error(error)
           alert = ('Erro ao inserir usuario')
        }
        
      }
}
module.exports = consultDataBase