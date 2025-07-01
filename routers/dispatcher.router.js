import messageRouter from "./messages.router.js";


// Create dispatcher function. 
const dispatcher = (server) => {
    server.use(`/bot/message`, messageRouter); 
}

export default dispatcher; 