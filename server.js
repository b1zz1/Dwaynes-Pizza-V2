const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const res = require('express/lib/response')

const app = express()

const port = process.env.port || 8081
/*
const sql = mysql.createConnection({
    host:'',
    user:'',
    password:'',
    port:3036
})
*/
app.use(express.static(__dirname+'/'))
app.get('/',(req,res) => {
    res.sendFile(__dirname+'/index.html')
})

app.listen(8081, () => {
    console.log("Servidor online!-http://localhost:8081/")
})