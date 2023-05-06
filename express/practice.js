const exxp = require('express')
const appl = exxp();

appl.get("",(req,res)=>{
    res.send("<h1>Hello from the server</h1>")
})
appl.listen(5050)