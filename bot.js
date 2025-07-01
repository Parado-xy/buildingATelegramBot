import express from "express"; 
import dispatcher from "./routers/dispatcher.router.js";
import { errMiddleware } from "./middleware/error.middleware.js";

const server = express(); 

// for parsing application/json
server.use(express.json()); 

// for parsing application/x-www-form-urlencoded
server.use(express.urlencoded({extended: true})); 

// Import the dispatcher and use it to dispatch routes. 
dispatcher(server); 

// Use error handling middleware.
server.use(errMiddleware); 

// Set port; 
const PORT = 5000; 

// Set server to listening. 
server.listen(PORT, () => {
    console.log(`Telegram Bot Listening on :http://localhost:${PORT}`)
})