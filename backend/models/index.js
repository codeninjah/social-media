const Sequelize = require('sequelize')
const setupUser = require('./User')
const setupMessage = require('./Message')

// Glöm inte sätta relation
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/dbfile.sqlite'
})

const User = setupUser(sequelize)
const Message = setupMessage(sequelize)


//User.hasMany( Message, {foreignKey: 'message_id'} )
Message.belongsTo(User, {foreignKey: 'user_id'}); 

module.exports = {User, Message, sequelize}