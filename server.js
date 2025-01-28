const express=require('express');
const errorHandler = require('./middleware/errorHandller');
const connectDb = require('./config/dbconnection');
const dotenv=require('dotenv').config();

//connect the database
connectDb();

const app=express();
//const port=5000;
const port=process.env.PORT||5000;

//app.get('/api/contacts',(req,res)=>{
    //res.send("Get all the Contacts");
    //res.json({message:"Get all contacts"})
    //res.status(200).json({message:"Get all contacts"})
//});

//middleware
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use(errorHandler);


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});