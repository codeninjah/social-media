const jwt = require('jsonwebtoken')
require('dotenv').config({path: './config/.env'})

module.exports = {
  admin:(req, res, next) => {
        
        try{
            if(!req.headers.authorization){
                return res.status(401).json({error: 'Please login in'})
              }
        const token = req.header("Authorization").replace("Bearer ", "")
        console.log("Token is: ", token) //skriver ut
        const user = jwt.verify(token, process.env.JWT_SECRET_TOKEN) //detta körs
        console.log("User is: ", user) // skriver ut
        if(user.role !== 'admin'){
            throw new Error('Forbidden')
        }
    
          req.user = user
        
        next()
 
    }catch(error){
        console.log("Error is: ", error)
      if(error instanceof jwt.TokenExpiredError){
        res.status(403).json({error: 'Please login in again'})
      }else{
        res.status(401).json({error: 'Invalid token'})
      }
    }
  }, 
  user:(req, res, next) => {
    if(!req.headers.authorization){
        return res.status(401).json({error: 'Please login in'})
    }
    try{
        const token = req.header("Authorization").replace("Bearer ", "")
        const user = jwt.verify(token, process.env.JWT_SECRET_TOKEN)
        console.log("User is: ", user)

        if(user.role !== 'user'){
            throw new Error('Forbidden')
        }

        req.user = user
    
        next()
      
    }catch(error){
      console.log("Error is: ", error)
      if(error instanceof jwt.TokenExpiredError){
        res.status(403).json({error: 'Please login in again'})
      }else{
        res.status(401).json({error: 'Invalid token'})
      }
    }
},
  common: (req, res, next) => {
    try{
      if(!req.headers.authorization){
          return res.status(401).json({error: 'Please login in'})
        }
        const token = req.header("Authorization").replace("Bearer ", "")
        console.log("Token is: ", token) //skriver ut
        const user = jwt.verify(token, process.env.JWT_SECRET_TOKEN) //detta körs
        console.log("User is: ", user) // skriver ut
        if(user.role == 'admin' || user.role == 'user' || user.role == "common"){
            //throw new Error('Forbidden')
            req.user = user
        }

          //req.user = user
        
        next()

      }catch(error){
        console.log("Error is: ", error)
      if(error instanceof jwt.TokenExpiredError){
        res.status(403).json({error: 'Please login in again'})
      }else{
        res.status(401).json({error: 'Invalid token'})
      }
      }
    }, 
  }