let jwt = require("jsonwebtoken");

let bcrypt = require("bcrypt");

let jwtSecret = "Some Secret";

let checkJwt = function (req, res, next){
    console.log("processing jwt auth check");

    // read the token from the header
    let token;
    if(req.headers.authorization){
        let bearer = req.headers.auth.split(" ");
        token = bearer[1];
    } else token=null;

    // if the token is not valid, there is nothing to check
    if(!token) return res.status(401).send("Unauthorized");

    // verify the token
    jwt.verify(token, jwtSecret, (err, decoded) => {
        // if we get an error message then the token is not decoded
        if(err){
            console.log("Did not verify JWT");
            return res.status(401).send("Unauthorized");
        }

        // the token is valid, store the username from token in the request,
        // so that it is available to all following this call
        console.log(decoded);
        req.username = decoded.username;
        req.isAdmin = decoded.role == "Admin";

        // then call next middleware function in chain
        next();

    })
};

let isAdmin = (req, res, next) => {
    console.log("inside checking for admin");
    next();
};

module.exports = {checkJwt, isAdmin};