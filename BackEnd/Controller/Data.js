const Usermodel = require("../Model/auth")


const getData = (req,res)=>{
    console.log("Welcome To Home Page")
    res.send("Welcome To HomePage")
        // try {
        //     res.json("Welcome To Homepage")
        // } catch (error) {
        //     console.log(error,"Something Went Wrong")
        // }
    // res.json("Hello")
}


const Data =async(res,req) => {
    // const {name, email, gender, password, age, city} = req.body;
    const addData = req.body
        // if(error){
        //     console.log(error)
        // }else{
            try {
                const userData  = new Usermodel(addData)
                await userData.save()
                res.send(userData)
                console.log("Sucessfully Registered")
                // res.send({message: "sucessfully Registered"})
            } catch (error) {
                console.log(`error: ${error}`)
                // res.send({error: "Something Went Wrong"})
            }
        // }
}

module.exports = {getData,Data}