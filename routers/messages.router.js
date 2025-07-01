// Import the router object from express. 
import { Router } from "express";

// Instantiate router object; 
const messageRouter = new Router(); 

// Export router object; 
export default messageRouter; 

// attach a message route. 
messageRouter.post(`/new-message`, async (req, res, next) => {
    try{
        const { message } = req.body;

        //Each message contains "text" and a "chat" object, which has an "id" which is the chat id

        if (!message || message.text.toLowerCase().indexOf("marco") < 0) {
          // In case a message is not present, or if our message does not have the word marco in it, do nothing and return an empty response
          return res.end();
        }

        console.log(`message: ${message}`); 
    }catch(error){

    }
})