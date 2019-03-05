const port = 5000

import { urlencoded, json } from 'body-parser';
import express from 'express';
const server = express()

server.use(urlencoded({extended: true}))
server.use(json())
server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}`)
})