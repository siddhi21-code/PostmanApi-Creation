import express from "express";

const app = express();
const PORT = 2000;


import TODOS from "./data.js";



app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 


app.get("/", (req, res) => {
    res.status(200).json({ data: null, message: "welcome todo api" });
})

app.listen(PORT,() =>{
    console.log('server is running on port ${port}..')
})
