const { Sequelize, Model, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");
//require("dotenv").config();


class User extends Model{
    static async authenticate(username, password){
        const user = await User.findOne({where: {username}})
        if(!user){
            throw new Error('Invalid username')
        }
        if(!bcrypt.compareSync(password, user.password_hash)){
            throw new Error('Invalid password')
        }
        return user
    }
}
function setupUser(sequelize){
    User.init({
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
        password_hash: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        role: {
            type: DataTypes.TEXT,
            enum: ["admin", "user"],
            defaultValue: "user",
            allowNull: false
        },
    },
    {
        sequelize: sequelize,
        modelName: 'User',
        hooks: {
            beforeCreate(instance, options){
                instance.password_hash = bcrypt.hashSync(instance.password_hash)
            }
        }
    }
    )

    return User
}

module.exports = setupUser