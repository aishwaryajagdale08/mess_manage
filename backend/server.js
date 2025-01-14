import express from "express"
import cors from "cors"

import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import orderRouter from "./routes/orderRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

// DB Connection 
connectDB();

//api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.use("/api/order",orderRouter)
app.use("/api/user",userRouter)
app.get("/",(req , res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})
//mongodb+srv://Aishwarya:Aish1234@cluster0.nl58j1c.mongodb.net/?