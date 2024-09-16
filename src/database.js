const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password:'101010',
    host:'127.0.0.1',
    port:5432,
    database:'submit_dados'
})
pool.connect().then(()=>{
    console.log('conexão bem sucedida')
}).catch((erro)=>{
    console.log('não foi feito a conexão ')
})
module.exports = pool