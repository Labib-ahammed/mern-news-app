import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const database = () => {
  try{

    mongoose.connect(process.env.DBURL);
    console.log("Connect to database successfully")
  }catch(error){
    console.log("Connection to database failed", error.message)
  }
};
export default database;
