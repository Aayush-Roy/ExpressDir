const express = require("express");
// console.log(express)
const app = express();
let port = 8080;
app.listen(port,()=>{
    console.log(`app listening ${port}`)
})
app.get("/",(req,res)=>{
    res.send("you contacted root path")
})
// app.get("/apple",(req,res)=>{
//     res.send("you contacted apple path")
// })
// app.use((req,res)=>{
//     console.log(`request recieved`);
//     let fruit = {
//         name:"apple",
//         color:"red",
//     }
//     let json = JSON.stringify(fruit);
//     res.send(` ${json}`)
// })
app.get("/:username/:id",(req,res)=>{
   let {username,id}=req.params;
   let str = `<h1>Welcom @${username}</h1>`;
   res.send(str)
})
