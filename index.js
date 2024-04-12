const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');


const clientModel = require('./models/clientModel');
const AdvocateModel = require('./models/AdvocateModel');
const verifyToken = require('./verifyToken');


const requestModel = require('./models/requestModel.js');
mongoose.connect("mongodb://localhost:27017/JurisJunction")
.then(()=>{
    console.log("hr");
})
.catch((err)=>{})

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    Credential: true,
  }

  const app = express();
  app.use(cors(corsOptions));
app.use(express.json());

app.post("/pages/client/register",(req,res)=>{
    let clientData = req.body;
    console.log(clientData)
    bcrypt.genSalt(10,(err,salt)=>{
        if(!err){
            bcrypt.hash(clientData.Password,salt,async (err,hpass)=>{
                if(!err){
                    clientData.Password = hpass;
                    try{
                        let doc = await clientModel.create(clientData);
                        res.status(201).send({message : "Client registration successfull"});
                    }
                    catch(err){
                        res.status(500).send({message : "Some problem in client registration"})
                    }
                }
            })
        }
    })
})

app.post("/pages/Advocate/register",(req,res)=>{
    let AdvocateData = req.body;
    console.log(AdvocateData)
    bcrypt.genSalt(10,(err,salt)=>{
        if(!err){
            console.log('done')
            bcrypt.hash(AdvocateData.Password,salt,async (err,hpass)=>{
                
                if(!err){
                    AdvocateData.Password = hpass;
                    try{
                        let doc = await AdvocateModel.create(AdvocateData);
                        
                     
                        res.status(201).send({message : "Advocate registration successfull"});
                    }
                    catch(err){
                        
                        res.status(500).send({message : "Some problem in Advocate registration"})
                        console.log(err)
                    }
                }
            })
        }
    })
})


app.post("/pages/Advocate/login",async (req,res)=>{
    let AdvocateCred = req.body;

    console.log(AdvocateCred)
    try{
        const Advocate = await AdvocateModel.findOne({Email : AdvocateCred.Email});
        if(Advocate !== null){
            bcrypt.compare(AdvocateCred.Password , Advocate.Password , (err,success)=>{
                if(success==true){
                    console.log(req.body)
                    jwt.sign({email : AdvocateCred.email} , "JurisJunction" , (err,token)=>{
                        if(!err){
                       
                            res.send({message : "Login Success" , token:token ,userid : Advocate._id});
                        }
                    })
                }
                else{
                    res.status(403).send({message : "Incorrect Password"});
                }
            })
        }
        else{
            res.status(404).send({message : "Advocate not found"});
        }
    }
    catch(err){
        res.status(500).send({message : "Some Problem"});
    }
})


app.post("/pages/client/login",async (req,res)=>{
    let clientCred = req.body;
    try{
        const client = await clientModel.findOne({Email : clientCred.Email});
        if(client !== null){
            bcrypt.compare(clientCred.Password , client.Password , (err,success)=>{
                if(success==true){
                    jwt.sign({email : clientCred.Email} , "JurisJunction" , (err,token)=>{
                        if(!err){
                            res.send({message : "Login Success" , token:token ,userid : client._id});
                        }
                    })
                }
                else{
                    res.status(403).send({message : "Incorrect Password"});
                }
            })
        }
        else{
            res.status(404).send({message : "Client not found"});
        }
    }
    catch(err){
        res.status(500).send({message : "Some Problem"});
    }
})

app.get("/pages/filter/Advocate" , verifyToken , async(req,res)=>{
    try{
        let Advocate = await AdvocateModel.find();
        res.send(Advocate);
    }
    catch(err){
        console.log(err);
        res.status(500).send({message : "Some Problem while fetching Advocate data"});
    }
})

app.get("/pages/filter/Advocate/:name",verifyToken,async (req,res)=>{
    try{
        let Advocate = await AdvocateModel.find({name :{$regex:req.params.name,$options : 'i'}});
        if(Advocate.length != 0){
            res.send(Advocate);
        }
        else{
            res.status(404).send({message : "Advocate not found"});
        }
    }
    catch(err){
        res.status(500).send({message : "Some problem in finding the Advocate"});
    }
})

app.get("/pages/filter",verifyToken,async (req,res)=>{
    try{
    let filterCred = req.body;
    let Advocate = await AdvocateModel.find({Location : filterCred.Location} , {specialization : filterCred.specialization});
    if(Advocate.length != 0){
        res.send(Advocate)
    }
    else{
        res.send({message : "No Lawyer Found"});
    }
    }
    catch(err){
        res.status(500).send({message : "Some technical problem"});
    }
    
})
 

app.post("/pages/requestPost", async (req,res)=>{
    let reqCred = req.body;
    try {
        let data = await requestModel.create(reqCred);
        res.status(201).send({message : "Request sent"});
    }
    catch(err){
        res.status(500).send({message : "Some Problem in sending the request"});
    }
})
    
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});