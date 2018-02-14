let express = require('express');
let port = process.env.port || 8000;
let app = express();
let path = require('path');

//Challenge 1
app.get('/hello',(req,res)=>{
  res.send("Hello!");
})
//Challenge 2
app.post('/create/:name',(req,res)=>{
  let response = {
    'id' : 1,
    'name': req.params.name
  };
  res.json(response);
})

//Challenge 3
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'index.html'));
})



app.listen(port,()=>{
  console.log("Listening on port",port)
})
