const middleware = (req, res, next)=>{
    console.log("middleware works");
    next()
}
export default middleware