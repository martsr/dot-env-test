
import express, {json} from 'express'


const app=express()
const port =process.env.PORT ?? 45000

app.use(json())
app.get('/ping',(req,res)=>{
    res.json({ping:'Server running'})
})

app.use('*',(req,res)=>{
    res.status(404).json({error:"Resource not found"})
})

app.listen(port,()=>console.log("SERVER LISTENING ON PORT: ",port))