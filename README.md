# Full Stack Application For Travel Log

Source: https://www.youtube.com/watch?v=5pQsl9u_10M

### TODO

* [x] 1. Install dependencies (Express, Cors, Morgan (Logging), helmet (middle for secure headers))
* [x] 2. Intall Dev Dependencies - eslint, nodemon (npm i -D eslint nodemon)
* [x] 3. Create an express app and listen to the port 1337 and set up the scripts (node, nodemon, eslint)
            * [x] To Install ESLINT: Command: npx eslint --init
            * [x] Start the Server : npm run dev
* [x] 4. Add Middlewares in the express app 
            * [x] Morgan, Helmet and Cors
            * [x] Set up Json API for error response (app.get('/'))
            * [x] Set up Not found error handle for invalid routes
            * [x] Set up Error handling middle ware
            * [x] Move Error Handling to separate middleware file

Model DB
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