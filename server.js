const express = require('express')
const app = express()
const router = require('./routes')
const path = require('path')


app.use(express.static(path.join(__dirname, 'public' )))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(router)



app.listen(3000 , ()=>{
try {
    console.log('esta rodando na porta 3000')
} catch (error) {
    console.log('Erro de conexão!!!  ')
}
})