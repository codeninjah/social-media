const { User, Message } = require('../models')

async function setup(){
    await User.sync({force: true})
    await Message.sync({force: true})
}

setup()