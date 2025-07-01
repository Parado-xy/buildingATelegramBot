export const errMiddleware = (err, req, res, next) => {
    if(err){
        const status = err.status || 500;
        const message = err.message || 'Something went wrong';

        // log the error to the console.
        console.error(`AN ERROR OCCURED: \n${err}`); 

        // send an error response to the client
        res.status(status).json({
            status,
            message,
        });
    }
}