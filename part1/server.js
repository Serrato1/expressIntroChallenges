let express = require('express');
let port = process.env.port || 8000;
let app = express();
let path = require('path');

// app.use(function(req, res) {
//   res.sendStatus(404);
// });

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

//Challenge 4
app.get('/verify/:age',(req,res)=>{
  let age = req.params.age;
  if(age > 13){
    res.sendStatus(200);
  }else{
    res.sendStatus(403);
  }
})





app.listen(port,()=>{
  console.log("Listening on port",port)
})
