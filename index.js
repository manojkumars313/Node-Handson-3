// middleware function
const globalMiddleware = (req, res, next) => {
  console.log("This middleware is applicable to all routes.");
  // call next() to move on to the next middleware/route handler
  next();
};

// app.js
const express = require("express");
const app = express();

// use the middleware function for all routes
app.use(globalMiddleware);

// example route handler
app.get("/", (req, res) => {
  res.send("This is the homepage.");
});

// start server
app.listen(3000, () => {
  console.log("Server started on port 3000.");
});
