const express=require("express")
const cors=require("cors")
const {connection}=require("./config/db")
const {travellerRouter}=require("./routes/travel.route")
const app=express()
require('dotenv').config()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
  res.send("api working successfully")
})
app.use("/api",travellerRouter)

let port=process.env.PORT||8000
app.listen(port,async()=>{
    try{
      await connection
      console.log("mongodb connected")
    }catch(err){
        console.log(err)
    }
    console.log(`server running on port ${port}`)
})