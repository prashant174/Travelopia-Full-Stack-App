const express=require('express');

const travellerRouter=express.Router();

const {TravellerModel}=require('../model/traveller.model')

travellerRouter.post('/fillTravellerDetails',async(req,res)=>{
    try{
       const payload=req.body;
      
        const data=new TravellerModel(payload);
        await data.save();
        res.status(201).json({"msg":"Post successfull"})
  
     
    } 
    catch(err){
       console.log(err)
        res.status(500).json({'msg':"Something went wrong"})
    }
})

travellerRouter.get('/getTravellerDetails',async(req,res)=>{
    try{
   const travellerData=await TravellerModel.find();
     res.status(201).json({'msg':'details successfully fetched','travellerData':travellerData})
    }
    catch(err){
        res.status(500).json({'msg':"Something went wrong"})
    }
})

module.exports={travellerRouter}