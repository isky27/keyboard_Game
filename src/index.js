require("dotenv").config();

const express = require("express");

const cors = require("cors");

const connection = require("./config/db");

const app = express();

const PORT = process.env.PORT;

const userRouter = require("./Routers/Users/user.routes");
// const jobRouter = require('./Routers/Jobs/jobs.routes')
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use('/user', userRouter);
// app.use('/jobs', jobRouter)

app.listen(PORT, async ()=>{
    await connection();
    console.log(`http://localhost:${PORT}`)
})