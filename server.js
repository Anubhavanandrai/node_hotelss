// app.js
import express from 'express';
import dbconnect from './db.js';
import { Person } from './models/person.js';
import bodyParser from 'body-parser';
import personRouter from "./Routes/person.route.js";

const app = express();
const port = 8000;
app.use(bodyParser.json());


app.use('/emp', personRouter);
app.get("/", (req, res) => {
  res.send("API is Running ....");
});
  



app.listen(port, () => {
  console.log(`Server running my server at http://localhost:${port}`);
});
