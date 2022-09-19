const { Message, User, sequelize } = require('../models/index.js')
const bcrypt = require('bcryptjs')


const hashUserOne = bcrypt.hashSync("password_one", 10) 
const hashUserTwo = bcrypt.hashSync("password_two", 10) 


sequelize.sync()
.then(async () => {
    const users = await User.bulkCreate([
        {
            username: 'Alex',
            user_email: "hgkls@al.se",
            password_hash: hashUserOne,
            user_email: "hgkls@al.se",
            role: 'admin',
        },
        {
            username: 'Steph',
            user_email: "steph@steph.se",
            password_hash: hashUserTwo,
            user_email: "hgkls@ks.se",
            role: 'admin',
        }
    ])
         Message.bulkCreate([
            {
                message: 'Alex test',
                images: 'Test image här',
                user_id: users[0].user_id,
            },
            {
                message: 'Steph test message',
                images: 'Test image här',
                user_id: users[1].user_id,
            }
        ])
}, {sequelize}).catch(console.log)

// Task.sync()
// .then(() => {
// }, {sequelize})