const express = require('express');
const path = require('path');

const app = express();
const public_path = path.join(__dirname,'public');

app.use(express.static(public_path));
app.set('views',path.join(__dirname,'views'))
app.set('view engine' , 'ejs');

app.get('/:page', (req, res) => {
    const page = req.params.page;
    res.sendFile(path.join(public_path, `${page}.html`));
  });

app.get('/info',(_,res) =>{
  const obj = {
    name: 'Mountain-Trackers',
    desc: 'private'
  }
  res.render('info',{obj})
})
app.get('/',(_,resp)=>{
    resp.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/about',(_,resp)=>{
    resp.sendFile(path.join(__dirname, 'public', 'about.html'))
})

app.get('/contact',(_,resp)=>{
    resp.sendFile(__dirname, 'public', 'contact.html')
})

app.get('/assets/scripts/animation.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'assets', 'scripts', 'animation.js'));
  });


  app.get('/assets/styles/index/index.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'assets', 'styles', 'index', 'index.css'));
  });
  
  app.get('/assets/styles/index/index-animation.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'assets', 'styles', 'index', 'index-animation.css'));
  });
  
  app.get('/assets/styles/about/about.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'assets', 'styles', 'about', 'about.css'));
  });
  
  app.get('/assets/styles/about/about-animation.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'assets', 'styles', 'about', 'about-animation.css'));
  });
  
  app.get('/assets/styles/contact/contact.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'assets', 'styles', 'contact', 'contact.css'));
  });
  
  app.get('/assets/styles/contact/contact-animation.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'assets', 'styles', 'contact', 'contact-animation.css'));
  });

// app.get('*', (_,resp)=>{
//     resp.sendFile(`${public_path}/notFound.html`)
// })

app.listen(5001);