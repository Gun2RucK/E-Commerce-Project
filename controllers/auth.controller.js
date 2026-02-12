const bcrypt = require('bcryptjs')
const user_model = require("../models/user.model")

// need to write the controller / logic to register a user

// create/register a user, should be available as a module everywhere
exports.signup = async (req,res) => {
    
    //logic to create the user
    //1. read req body
    const request_body = req.body  // this gets me the req body in the form of js obj  

   
    
    const userObj = {
        name : request_body.name,
        userId : request_body.userId,
        email : request_body.email,
        userType : request_body.userType,
        password : bcrypt.hashSync(request_body.password,8)

    }

    try{
        const user_created = await user_model.create(userObj)
        // return now
        res.status(201).send(user_created) // 201 means successfully created
    }catch(err){
        console.log("Error while registering the user...",err)
        res.status(500).send({
            message : "Some Error Happened while registering the user"
        }) //500 means internal server error
    }
    
}

