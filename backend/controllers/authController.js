const { User } = require("../models");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports = {
  async authenticate(req, res) {
    try{
    const user = await User.findOne({where: {username: req.body.username}})   

    if(user && (await bcrypt.compare(req.body.password, user.password_hash))){

      const payload = {
        id: user.user_id,
        name: user.username,
        role: user.role
      }

      const token = jwt.sign(payload, process.env.JWT_SECRET_TOKEN)
      //skicka token till db och sedan tillbaka!
      user.token = token
      //res.json({token, payload})
      res.status(200).json({user, token})
    }else{
      res.status(400).send("Invalid Credentials")
    }
    
  } catch(err){
    console.log(err)
  }
  },
};