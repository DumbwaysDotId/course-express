const isLoggedIn = true

//Dummy authenticated middleware
exports.authenticated = (req, res, next)=>{
    if(isLoggedIn)
        next()
    else{
        res.send({
            message: "You are Unauthenticated!"
        })
    }    
}