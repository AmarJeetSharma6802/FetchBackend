import express from 'express'
import cors from 'cors'
import data from './userDesign.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get("/userDesign",(req,res)=>{
    res.json(data)
})

app.route("/userDesign/:id").get((req,res)=>{
    const id = parseInt(req.params.id, 10); 
    const user = data.find(user => user.id === id)
    if(!user){
        res.status(404).json({message: "User not found"})
    }
    res.json(user)

})

app.listen(8000 ,()=>{
    console.log("Server is running on port 000")
})