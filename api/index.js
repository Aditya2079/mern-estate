import express from 'express'
import mongoose, { get } from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routs/user.route.js';
import authRouter from './routs/auth.route.js';
dotenv.config(); 

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

const app=express();
app.use(express.json());

app.listen(3000,()=>{
    console.log('server os runing on 3000')
}
);
app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);