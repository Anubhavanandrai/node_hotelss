import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
   
  },
  mobile: {
    type: Number,
    required: true,

  },
  email: {
    type: String,
    required: true,
    
  },
  address: {
    type: String
  }, 
  salary: {
    type: Number
  }
});

export const Person = mongoose.model("person", personSchema);
