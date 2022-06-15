const { request } = require("express");
const express = require("express");
const app = express();



app.use(express.static("public"))

app.set("view engine", "ejs");
// If the middleware should be used evereywhere define it at the top
// app.use(logger)


/**
 * Routing paths
**/

const userRouter = require("./routes/user"); // Take user.js paths(routes) from the routes folder

app.use("/user", userRouter); // Apply /user to all the paths(routes) from userRouter so you get /user/pathsFromUserRouter

// Middleware
function logger(request, respond, next){
    console.log(request.originalUrl)
    next()
}

app.listen(3000);
