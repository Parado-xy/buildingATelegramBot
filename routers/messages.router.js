// Import the router object from express. 
import { Router } from "express";

// Import axios for sending request. 
import axios from "axios";

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

        const BOT_TOKEN = process.env.BOT_TOKEN || "7686242328:AAGI9B8ya5viZeNsYQ69sZq-6WpZlGJNoOo";

        axios
          .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            chat_id: message.chat.id,
            text: "Welcome to the WatchJallaCode Telegram channel!",
          })
          .then((response) => {
            // We get here if the message was successfully posted
            console.log("Message posted");
            res.end("ok");
          })
          .catch((error) => {
            console.error("Failed to send message:", error);
            next(error);
          });
    }catch(error){
        next(error); 
    }
})