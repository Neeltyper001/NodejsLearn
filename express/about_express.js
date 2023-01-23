const exp  = require('express');

const app = exp();

app.get('',(req,res)=>{
    res.send('This is the home page');
})

app.get('/about' , (req,res)=>{
    res.send('This is the about page');
})

app.get('/contact-us',(req,res)=>{
    res.send(`<h1>THis is the heading</h1>
    <h2>This is the subheading</h2>`);
})

app.listen(5000);