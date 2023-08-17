const express = require('express');
const app = express();

const reqFilter = (req, res , next)=>{
    if(!req.query.age){
        res.send("<h1>Please enter your age <h1>")
    }

    else{
        if(req.query.age < 18){
            res.send("<h1>Invalid age </h1>");
        }

        else {
            next();
        }

        
    }
}

app.use(reqFilter)

app.get('/',(req , res)=>{
    res.send("<h1>Hello</h1>")
})

app.get('/about',(req, res)=>{
    res.send("<h2>This is about us </h2>")
})

app.listen(5002);