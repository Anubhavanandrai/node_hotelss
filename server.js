// app.js
import express from 'express';
import dbconnect from './db.js';
import { Person } from './models/person.js';
import bodyParser from 'body-parser';

const app = express();
const port = 8000;
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Helllllllllllllo World');
  });


  app.get('/chicken',(req,res)=>{
    res.send("checken bn rha h sir");
  })

  app.get('/idli',(req,res)=>{

    const variety={
        "name":"brijwasi",
        "menu":"idlii rava",
        "spices":"fungi chicku"
    }
    res.send(variety);
  })


  app.post("/persondetails",async(req,res)=>{
    try{
const data=req.body
const newperson= new Person(data)
console.log("saved ")
const response=await newperson.save()

res.status(200).json(response)
    }
    catch(error){
        console.log("i am getting error of something " ,error)
    }

  })



  
app.get("/emp",async(req,res)=>{
try{
const resp= await Person.find()
res.status(200).json(resp)
}
catch(error){
console.log(error)
}

})




app.get("/emp/:work",async(req,res)=>{
    const workrequired=req.params.work;
try{
    if(workrequired=="chef" || workrequired=="waiter"|| workrequired=="manager"){
const resp= await Person.find({work:workrequired})
res.status(200).json(resp)
    }
}
catch(error){
    console.log(error) 
}
})



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
