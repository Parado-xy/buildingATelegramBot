export const errMiddleware = (err, res, req, next) => {
    if(err){
        const error = {
            message: err.message,
            status: err.code
        }

        // log the error to the console.
        console.err(`AN ERROR OCCURED: \n${err}`); 

        // pass the error on to the next middleware. 
        next(error); 
    }
}