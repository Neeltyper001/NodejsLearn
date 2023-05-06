const express = require('express')

const app = express();

app.get('',(request, response)=>{
    response.send(`<h1>Welcome to the home page</h1><a href="/about">About</a><a href="/contact">About</a>`);
})
app.get('/about',(request, response)=>{
    response.send(`<h1>This is about us</h1>`);
})
app.get('/contact',(request, response)=>{
    response.send(`<h1>This is contact us</h1>`);
})

app.listen(8000);