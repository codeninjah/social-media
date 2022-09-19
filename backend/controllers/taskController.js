const { Message } = require('../models')

module.exports = {
    async getOne(req, res, next){
        try{
            const message = await Message.findOne({where:{id: req.params.id}})
            if(!message){
                //något felmeddelande
                res.status(404).json()
            }
            res.json(message)
        }catch(error){
            next(error)
        }
    },

    async getAll(req, res, next){
        const messages = await Message.findAll({where: {user_id : req.user.id}})
        res.json(messages)
    },

    async create(req, res, next){
        const { message, user_id} = req.body
        const msg = await Message.create({message, user_id})
        res.status(201).json(msg)
    },

    async update(req, res, next){
        try{
            const msg = await Message.findOne({where:{message_id: req.params.id}})
            const { message } = req.body //images
            if(!msg){
                res.status(404).json()
            }
            msg.message = message
            msg.save()
            res.json(msg)
        }catch(error){
            next(error)
        }
    },

    async delete(req, res, next){
        const msg = await Message.destroy({where: {message_id: req.params.id}})
        res.status(200).json({message: 'Message is deleted'})
    },
}