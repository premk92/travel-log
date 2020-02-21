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
    * [x] Create the Mongoose Schema Model - 1.14.47
    * [x] Install .env inside Server (npm i dotenv), Create Env File, Set up the Database connection in Index.js
    * [x] Install Mongo DB - Use 'Mongo' in terminal to get the ip. Mondgo Port: http://localhost:27017/
* [x] POST / logs
    * [x] Create a router (logs.js) for with multiple routes and import the router in index.js
    * [x] Create a router Get request and post request for the route /api/logs in logs.js
    * [x] Install body parsing middleware (express.json()) in index.js - 1.37.11
    * [x] Attempt To Create A New Entry (Make the post request Async await, Create the entry) and handle the errors
    * [x] Create A Valid Entry 
    * [x] Return All Entries Using Modify the Get Route /api/logs - 1.57.40
* [x] 


Setup Client
Create Form to add a new entry
Setup Map SDK on client
List all log entries on map
DEPLOY!

Sample Valid Entry :
{
	"title" : "Empire State Building",
	"comment" : "Visited the top of the building. Great view",
	"lattitude" : 40.74,
	"longitude" : -73.98,
	"rating" : 7,
	"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/500px-Empire_State_Building_%28aerial_view%29.jpg",
	"visitDate" : "2020-02-21T13:01:21.605Z"
}