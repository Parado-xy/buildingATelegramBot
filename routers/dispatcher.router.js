import messageRouter from "./messages.router";


// Create dispatcher function. 
const dispatcher = (server) => {
    server.use(`/bot/message`, messageRouter); 
}

export default dispatcher; 