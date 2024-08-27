import express from 'express'
import { database } from './dp/connection.js';
import userRouter from './src/module/user/user.routs.js';
const port = 5000
const app = express()
app.use(express.json());  



app.use(userRouter)
database()
app.listen(port, ()=>{
})



