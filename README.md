# Full Stack Application For Travel Log

Source: https://www.youtube.com/watch?v=5pQsl9u_10M

### TODO

* [x] Install dependencies (Express, Cors, Morgan (Logging), helmet (middle for secure headers))
* [x] Intall Dev Dependencies - eslint, nodemon (npm i -D eslint nodemon)
* [x] Create an express app and listen to the port 1337 and set up the scripts (node, nodemon, eslint)
    * [x] To Install ESLINT: Command: npx eslint --init
    * [x] Start the Server : npm run dev
* [x] Add Middlewares in the express app 
    * [x] Morgan, Helmet and Cors
    * [x] Set up Json API for error response (app.get('/'))
    * [x] Set up Not found error handle for invalid routes
    * [x] Set up Error handling middle ware
    * [x] Move Error Handling to separate middleware file
* [x] Model DB
    * [x] Install Mongoose(Mongo DB Orm) inside Server Folder (npm i mongoose)
    * [x] Create the Mongoose Schema Model



What data will we store?
Setup Mongoose Model(s)
POST /logs
Create a new log entry
GET / logs
List all log entries
Setup Client
Create Form to add a new entry
Setup Map SDK on client
List all log entries on map
DEPLOY!