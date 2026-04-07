const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    
    const token = req.headers.authorization?.split(" ")[1];
    
    if (!token) return res.status(400).send("No Token");

    try {
        const decoded = jwt.verify(token, "secret");
        req.user = decoded;
        console.log(decoded);
        next();
    }
    catch (err) {
        console.log(err);
        res.status(400).send("error");
    }
}