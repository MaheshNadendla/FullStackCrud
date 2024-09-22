const User = require("../models/user.js");

const create = async (req,res)=>{

    try{

    const {fname,lname,email,password} = req.body;

    const exists = await User.findOne({email});
    if(exists)
    {
       return res.status(409).json({msg : "user already exists", status : false});
    }

    const newUser = new User({fname,lname,email,password});
    newUser.save();

    res.status(201).json({msg : "UserCreated Sucess", status : true});


    }
    catch(err){

        res.status(500).json({msg : "Internal Server error", status : false});


    }


};


const print = async (req,res)=>{

    try{

    const data = await User.find();

    res.status(200).json(data);


    }
    catch(err){

        res.status(404).json({msg : "Internal Server error", status : false});


    }


};

const del = async (req,res)=>{

    try{

   
    const id = req.params.id;

    const x = await User.findByIdAndDelete(id);

    if(!x)
        return res.status(404).json({fuck: "user not found"});


    return res.status(200).json(x,{user : "data is this "},{msg : "del sucess"});
    }
    catch(err){

       return res.status(404).json({fuck: "error"});


    }


};

const getone = async (req,res)=>{

    try{

    const id = req.params.id;

    const data = await User.findById(id);

    if(!data)
    {
        return res.status(404).json({msg : "user not found"});
    }
    res.status(200).json(data);


    }
    catch(err){

        res.status(404).json({msg : "Internal Server error", status : false});


    }


};



const update = async (req,res)=>{

    try{

    const id = req.params.id;

    const data = await User.findById(id);

    if(!data)
    {
        return res.status(404).json({msg : "user not found"});
    }

    const updatedData = await User.findByIdAndUpdate(id,req.body,{new : true}); 
    return res.status(200).json(updatedData);


    }
    catch(err){

       return  res.status(404).json({msg : "Internal Server error", status : false});


    }


};




module.exports = {create,print,del,getone,update};