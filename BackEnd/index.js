const express = require("express")
const PORT = 4500
const connection = require("./Config/db")
const { clothRouter } = require("./Routes/routes")
const app = express()
app.use(express.json())
const cors = require("cors")
app.use(cors())

app.use("/data", clothRouter)
app.use("/adddata", clothRouter)
app.use("/deletecloth", clothRouter)

app.get("/", (req,res) => {
    res.send("Welcome To Homepage")
})




app.listen(PORT,async()=>{
   try {
    await connection
    console.log("Connected To DataBase")
   } catch (error) {
    console.log("Something went wrong")
    console.log(error)
   }
   console.log(`sever is running on port ${PORT}`)
})



