import express from "express";
const app=express()
import mongoose from "mongoose";
const{Schema}=mongoose
app.use(express.json());

mongoose.connect("mongodb+srv://divinator_148:div148gup@cluster0.c2ieflo.mongodb.net/",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//Schema

const sch=new Schema({
    name:String,
    email:String,
    id:Number,
},{versionKey:false})
const monmodel=mongoose.mode1("NEWCOL",sch);


//POST
app.post("/post",async(req,res)=>{
    console.log("inside post function");
    const data=new monmodel({
        name:req.body.name,
        email:req.body.email,
        id:req.body.id
    });
    const val=data.save();
    res.send("posted")
});


app.post("/postinc",async(req,res)=>{
    console.log("inside post function");
    counter.findOneAndUpdate(
        {id:100},
        {"$inc":{"seq":1}},
        {new:true},(error,c)=>{
            let seqId;
            if(c==null){
                const newCounter=new counter({id:100,seq:1});
                newCounter.save()
                seqId=1
            }
            else{
                seqId=c.seq
            }
            const data=new monmodel({
                name:req.body.name,
                email:req.body.email,
                id:seqId
            });
            const val=data.save();
        }
    );
    res.send("posted");
})
