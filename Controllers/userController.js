const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = require("../Models/userModel");

exports.signup = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        
        const hashed = await bcrypt.hash(password, 10);
        
        await userModel.createUser(name, email, hashed);

        res.json({message:"user created"});
    }
    catch (err) {
        console.log(err);
        res.status(400).send("error");
    }
}

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;

        console.log(email, " ", password);

        const user = await userModel.findUserByEmail(email);

        console.log(user);

        if (!user) return res.status(404).send("user not found");

        const match = await bcrypt.compare(password, user.password);

        if (!match) return res.status(400).send("wrong password");

        const token = jwt.sign({user_id: user.user_id}, "secret");

        console.log(token);
        
        console.log("USER OBJECT:", user);
        console.log("USER ID:", user?.id);
        
        res.json({token});
        
    }
    catch (err) {
        console.log(err);
        res.status(400).send("error");
    }
}