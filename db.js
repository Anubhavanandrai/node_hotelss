import mongoose from "mongoose"

const URL="mongodb://localhost:27017/hotel"

const dbconnect = mongoose.connect(URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
    }).then(()=>{
        console.log("connected")
    }).catch((error) => {
        console.error("Error connecting to MongoDB:", error);
      });
    
      export default dbconnect; 
      