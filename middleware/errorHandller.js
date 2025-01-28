const {constants}=require("../constants");
const errorHandler=(err,req,res,next)=>{
    const statuscode=res.statuscode ? res.statuscode:500;
    switch(statuscode){
        case constants.VALIDATION_ERROR:
            res.json({
                title:"Validation error",
                message:err.message,
                stacktrace:err.stack
            });
        case constants.NOT_FOUND:
            res.json({
                title:"Not Found",
                message:err.message,
                stacktrace:err.stack
            });
        case constants.SERVER_ERROR:
            res.json({
                title:"Server Error",
                message:err.message,
                stacktrace:err.stack
            });
        case constants.UNAUTHORIZED:
            res.json({
                title:"Un-Authorized",
                message:err.message,
                stacktrace:err.stack
            });
        case constants.FORBIDDEN:
            res.json({
                title:"For-Bidden",
                message:err.message,
                stacktrace:err.stack
            });
        default:
            console.log("All Good No Error");
            break;
    }
};

module.exports=errorHandler;