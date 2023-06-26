const express = require("express")
const ClothModel = require("../Model/cloth.model")
const mongoose = require("mongoose")
const clothRouter = express.Router()
clothRouter.use(express.json())



clothRouter.get("/",async(req,res) => {
    let findUsersDataQuery = req.query
    try {
        const myUsers = await ClothModel.find(findUsersDataQuery)
        res.send(myUsers)
    } catch (error) {
        console.log(error)
        res.send({"err":"something went wrong"})
    }
})

clothRouter.post("/", async(req,res) => {
    const data = req.body
    const model = new ClothModel(data) 
    await model.save()
    console.log(model)
    // console.log(data)
    res.send("Data Added Sucessfully")
})

clothRouter.patch("/edituser/:id", async(req,res) => {
    const EditUserId = req.params.id
    const payload = req.body
    try {
        await ClothModel.findByIdAndUpdate({_id:EditUserId},payload)
        res.send(`Upadated the ${EditUserId} sucessfully ` )
    } catch (error) {
        console.log(error)
        res.send({"err":"Something went wrong"})
    }
})

// clothRouter.put("/replacedata",(req,res) => {

// })

clothRouter.delete("/:id",async(req,res) => {
    const DeleteUser = req.params.id
    try {
        let model = await ClothModel.findByIdAndDelete(DeleteUser)
        console.log(model)
        console.log(DeleteUser)
        res.send(`Deleted sucessfully ` )
    } catch (error) {
        console.log(error)
        res.send({"err": "Something went wrong"})
    }
})

module.exports = {
    clothRouter
}