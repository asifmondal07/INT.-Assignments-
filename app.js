import express from'express'
import config from './config.js'
import AiRoutes from './src/routes/INT.routes.js'


const app=express()
const port=config.port

app.use(express.json())

app.use("/api",AiRoutes)





app.listen(port,()=>{console.log("Server started ",port)})