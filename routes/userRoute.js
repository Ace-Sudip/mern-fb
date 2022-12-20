const express = require("express")
const router = express.Router()
const User = require("../models/user")
const bcrypt = require('bcryptjs')


router.post('/register', async (req, res) => {
  
    

    const newuser = User({ firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email, password: bcrypt.hashSync(req.body.password) })
 
    try {
        const user = await newuser.save();
        res.send("User registered successfully.")

    } catch (error) {
        return res.status(400).json({ message: "error" })

    }
    

})


router.get("/userdetails", async (req, res) => {


    try {
        const rooms = await User.find({});
        res.send(rooms);

    } catch (error) {
        return res.status(400).json({ message: "error" })
    }

});

// router.post('/login', async (req, res) => {
//     const { email,password} = req.body
//     try {
//         const user = await User.findOne({ email: email, password: password })
//         if ( user ) {
            
//             const temp = {
//                 firstname: user.firstname,
//                 lastname: user.lastname,
//                 email: user.email
//             }
//             res.send(temp)
//         }
//         else {
//             return res.status(400).json({ message: "incorrect detail" })
//         }

//     } catch (error) {
//         return res.status(400).json({ message: "Error" })

//     }
// })

router.post('/login', async(req,res)=>{
    const {email, password} = req.body
    let user;
    try {
        user = await User.findOne({email})
    } catch (error) {
        res.status(400).json({err: "login failed"})
        
    }
const correctPassword = bcrypt.compareSync(req.body.password,user.password)
if(correctPassword){
                const temp = {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email
            }
            res.send(temp)
        }
        else {
            return res.status(400).json({ message: "incorrect detail" })

}
 

})






module.exports = router