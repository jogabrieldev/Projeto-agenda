const express = require('express')
const app = express()

exports.middlewareGlobal = (req , res, next)=>{
    console.log('middleware global esta executando')
    next()
}
exports.checkCsrfError =(err, req ,res ,next)=>{
    if(err)
    return res.render('404')
next()
}

