import express from "express";
import UserRoutes from './routes/UserRoutes.js';
import studentRoutes from'./routes/studentRoutes.js'
import profileRoutes from './routes/profileRoutes.js'
import postRoutes from './routes/postRoutes.js'

import mongoose from "mongoose";

const app= express();
app.use(express.json());

// to parse incoming request
// app.use(express.morgan('dev'))





app.use('/user',UserRoutes)

app.use('/student',studentRoutes)

app.use('/profile',profileRoutes)

app.use('/post',postRoutes);


let port = 5000;
app.listen(port, () => {
    console.log(`port is running on :${port}`);
});




mongoose.connect('mongodb+srv://vdromanticstatus:ANivE9sDU8bE1rVe@cluster0.oovbd.mongodb.net/medicaltourism?retryWrites=true&w=majority')
.then(()=>{console.log("mongo DB connected successfully");})
.catch((err)=>{ console.log(err);})
