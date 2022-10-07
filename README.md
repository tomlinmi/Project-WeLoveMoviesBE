# Project-WeLoveMoviesBE

https://github.com/tomlinmi/Project-WeLoveMoviesBE.git

Deployed app: https://git.heroku.com/boiling-woodland-20073.git


This is the backend application for the WeLoveMovie!! App.  The Front End application can be found at: https://github.com/tomlinmi/project-movie-front-end

This project is tasked with setting up a database and building out specific routes so that users can gain access to data about movies, theaters, and reviews.


## Installation:
Run `npm install` to install project dependencies
Run `npm start` to start the application on localhost:3000


## Running tests
The test suite is included in the project.  

To run the tests, you can run the following command:

`npm test` in the project folder

Note that the tests make use of an in-memory SQLite database.

Note: When updating a record in an in-memory SQLite database, the server does not automatically respond with an array of updated records like PostgreSQL does. As a result, when updating a record, you will need to query the database again to return updated record.

## Database
The database for this project is available on Postgres.  It is connected to DBeaver to view the tables and migrated data.
