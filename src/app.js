if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();

//allow the cors and express api to be used by any website
const cors = require("cors");

//include application error handlers
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

//define application routes
const moviesRouter = require("./movies/movies.router");

const reviewsRouter =  require("./reviews/reviews.router");

const theatersRouter =  require("./theaters/theaters.router");

app.use(express.json());
app.use(cors());

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter);


//add use of application routes below

app.use(notFound);
app.use(errorHandler);

module.exports = app;
