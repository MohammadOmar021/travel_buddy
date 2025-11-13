import express, {  urlencoded } from 'express'
import mongoose  from 'mongoose';
import { route } from './routes/index.js';
import cors from 'cors'
const app = express();
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(cors())
const PORT = 3000;

const URI = "mongodb+srv://admin:admin@cluster0.suv6jcj.mongodb.net/?appName=Cluster0"
mongoose.connect(URI)
.then((res)=>{
        console.log("MongoDB COnnected")
}).catch((err)=>{
        console.log("MongoDB Error", err.message)
})


app.use('/api',route)

app.listen(PORT, ()=>{
    console.log(`Server Running on ${PORT}`)
})


