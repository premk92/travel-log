# travel-log
Source: https://www.youtube.com/watch?v=5pQsl9u_10M
[x] Install dependencies (Express, Cors, Morgan (Logging), helmet (middle for secure headers))
[x] Intall Dev Dependencies - eslint, nodemon (npm i -D eslint nodemon)
[x] Create an express app and listen to the port 1337 and set up the scripts (node, nodemon, eslint)
    * To Install ESLINT: Command: npx eslint --init
    * Start the Server : npm run dev
[x] Add Middlewares in the express app 
    * Morgan, Helmet and Cors
    * Set up Json API for error response (app.get('/'))
    * Set up Not found error handle for invalid routes
    * Set up Error handling middle ware

Setup Not Found and Error Middlewares
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