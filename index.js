const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');


const clientModel = require('./models/clientModel');
const lawyerModel = require('./models/lawyerModel');
const verifyToken = require('./verifyToken');
mongoose.connect("mongodb://localhost:27017/JurisJunction")
.then(()=>{})
.catch((err)=>{})

const app = express();
app.use(express.json());
app.use(cors());
app.post("/register/client",(req,res)=>{
    let clientData = req.body;
    bcrypt.genSalt(10,(err,salt)=>{
        if(!err){
            bcrypt.hash(clientData.password,salt,async (err,hpass)=>{
                if(!err){
                    clientData.password = hpass;
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

app.post("/register/lawyer",(req,res)=>{
    let lawyerData = req.body;
    bcrypt.genSalt(10,(err,salt)=>{
        if(!err){
            bcrypt.hash(lawyerData.password,salt,async (err,hpass)=>{
                if(!err){
                    lawyerData.password = hpass;
                    try{
                        let doc = await lawyerModel.create(lawyerData);
                        res.status(201).send({message : "Lawyer registration successfull"});
                    }
                    catch(err){
                        res.status(500).send({message : "Some problem in lawyer registration"})
                    }
                }
            })
        }
    })
})


app.post("/login/lawyer",async (req,res)=>{
    let lawyerCred = req.body;
    try{
        const lawyer = await lawyerModel.findOne({email : lawyerCred.email});
        if(lawyer !== null){
            bcrypt.compare(lawyerCred.password , lawyer.password , (err,success)=>{
                if(success===true){
                    jwt.sign({email : lawyerCred.email} , "JurisJunction" , (err,token)=>{
                        if(!err){
                            res.send({message : "Login Success" , token:token ,userid : lawyer._id});
                        }
                    })
                }
                else{
                    res.status(403).send({message : "Incorrect password"});
                }
            })
        }
        else{
            res.status(404).send({message : "Lawyer not found"});
        }
    }
    catch(err){
        res.status(500).send({message : "Some Problem"});
    }
})


app.post("/login/client",async (req,res)=>{
    let clientCred = req.body;
    try{
        const client = await clientModel.findOne({email : clientCred.email});
        if(client !== null){
            bcrypt.compare(clientCred.password , client.password , (err,success)=>{
                if(success===true){
                    jwt.sign({email : clientCred.email} , "JurisJunction" , (err,token)=>{
                        if(!err){
                            res.send({message : "Login Success" , token:token ,userid : client._id});
                        }
                    })
                }
                else{
                    res.status(403).send({message : "Incorrect password"});
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

app.listen(1122,()=>{})