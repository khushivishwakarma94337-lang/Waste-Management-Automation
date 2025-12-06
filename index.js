const express=require("express");
const app=express();
app.use(express.static("public"));
const port=3000;
let Query=[];
let nextid=0;
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/form",(req,res)=>{
    res.render("index.ejs");

});

app.post("/request",(req,res)=>{
    let{name,location}=req.body;
    Query.push({id:nextid++,
        name:name,
        location:location,
        });
    

});
app.get("/home/complaint",(req,res)=>{
    res.render("complaint.ejs");
    
    
});
app.post("/add",(req,res)=>{    
    let {username,query}=req.body;


    query=Query.find((p)=> username===p.username);

    Query.push({query});
    res.render("dashboard.ejs",{Query});

});
app.listen(port,()=>{
 console.log("isten");
});