import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}/Ecom`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}


export default connectDB
// const mongoose = require('mongoose');
// // mongoose connection
// mongoose.connect('mongodb://127.0.0.1:27017/test',{useNewUrlParser:true,
// useCreateIndex:true, useFindAndModify:true, 
// useUnifiedTopology:true}).then(()=>{console.log('sucess')})
// .catch((err)=>{console.log(err)})