const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const AllRouters = require("./routes/userRoute");





const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api",AllRouters);

require("dotenv").config();

const PORT = process.env.PORT ||  8080;

const url = process.env.MONGO_CONN;
 
app.listen(PORT,(req,res)=>{

    console.log(`Server is running on ${PORT}`);
})

mongoose.connect(url).then( ()=>{
    console.log("Mongoo Is Connected")
    }
).catch(
    (err)=>{
        console.log(err);
    }
)






