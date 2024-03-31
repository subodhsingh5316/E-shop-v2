import express from 'express';
import productRouter from './routes/productRouter.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv'
dotenv.config();

const ports = process.env.PORT ||8000;
const app = express();
connectDB();
app.get('/',(req,res)=>{
    res.send('API is running...')
})

app.use('/api/products',productRouter);
app.use(notFound);
app.use(errorHandler);


app.listen(ports,()=>console.log(`Server running on port ${ports}`))