var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var fs = require('fs');

//Part two
//Challenge 1 + Modified for Challenge 4 Unique Ids
app.get('/create/:name/:age',(req,res)=>{
  let name = req.params.name;
  let age = req.params.age;
  let origJson = fs.readFileSync('./storage.json','utf8', (err)=>{
    if(err){console.log(err);}
  });
  origJson = JSON.parse(origJson);
  let users = origJson.users;
  if(users.length !== 0 ){
    var uniq_id = users[users.length-1]['id'] + 1;
  }else{
    var uniq_id = 1;
  }
  let usr = {
    'id'   : uniq_id,
    'name' : name,
    'age'  : age
  }
  origJson.users.push(usr);
  origJson = JSON.stringify(origJson);
  fs.writeFile('./storage.json', origJson, (err)=>{
    if(err){
      console.log(err);
    }
  });
  res.sendStatus(200);
})
//Challenge 2
app.get('/' , (req, res)=>{
  var storage = fs.readFileSync('./storage.json','utf8',(err)=>{
    console.log(storage);
  });
  res.json(storage);
})
//Challenge 3 + Modified for Challenge 4
app.get('/:id',(req,res)=>{
  let storage = fs.readFileSync('./storage.json','utf8',(err)=>{
    console.log(storage);
  });
  let result = false ;
  // for (let key in JSON.parse(storage)){
  //   result = JSON.parse(storage).users.id == [req.params.id] ? true : false;
  // }
  var users = JSON.parse(storage).users ;
  var user_found ;
  users.forEach((user)=>{
    if(user.id == [req.params.id]){
      result = true
      user_found = user;
    }
  })

  if(result){
    res.send(`Found user_id : ${user_found.id} \nUser Name: ${user_found.name}`);
  }else{
    res.send("NOT FOUND");
  }

})
app.listen(port, function() {
  console.log('Listening on port', port);
});
