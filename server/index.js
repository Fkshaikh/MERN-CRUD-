import express from "express";
import router from "./routes/routes.js";
import cors from "cors"
import bodyParser from "body-parser";



const app = express();
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use("/",router)



// InsertData("2","faisal","fk","@email.com","987612");



app.listen(8766,()=>{
    console.log("Server Listening on port :8766");
})

