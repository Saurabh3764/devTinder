const express = require('express')
const port = 3000;

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello DashBoard")
})


app.get("/Test",(req,res)=>{
    res.send("Hello Test")
})

//use will match routes starting with '/' but get match path exact as '/'

// app.use("/",(req,res)=>{
//     res.send("Hello DashBoard")
// })


// app.use("/Test",(req,res)=>{
//     res.send("Hello Test")
// })


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})