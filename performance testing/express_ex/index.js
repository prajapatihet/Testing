const  express = require('express');
const app = express();
const PORT = 9000;

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get('/about',(req,res)=>{
    res.send("Welcome to about");
})
app.get("/home",(req,res)=>{
    res.send("Welcome to Home");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} `);
})