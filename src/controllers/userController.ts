import { Request, Response } from "express"
import JWT from 'jsonwebtoken'
import { User } from '../models/User'
import dotenv from 'dotenv'

dotenv.config()

export const register = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password){
        let { email, password } = req.body
        
        let hasUser = await User.findOne({where:{email}})

        if(!hasUser){
            let newUser = await User.create({email, password})
        
            const token = JWT.sign(
                        {id: newUser.id, email: newUser.email },
                        process.env.JWT_SECRET_KEY as string,
                        {expiresIn: '2h'}
            )

            res.status(201).json({id: newUser.id, token})
        }else{
            res.status(400).json({error: 'This user exists already!'})
        }
    }else {
        res.status(404).json({error: 'There is empty field!'})
    }
}

export const login = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password){
        let email: string = req.body.email
        let password: string = req.body.password

        let user = await User.findOne({
            where: {
                email,
                password
            }
        })

        if(user){
            //gerar o token
           const token = JWT.sign(
                { id: user.id, email: user.email }, //campos que o token vai armazenar
                process.env.JWT_SECRET_KEY as string, // o hash que vai ser usado. Arquivo .env
                { expiresIn: '2h' } //tempo de expiração do token 2 horas
            )
            res.json(({status: true, token}))
            return
        }
    }
        res.json({status: false})
}

export const list =async (req: Request, res: Response) => {
    let users = await User.findAll()
    let list: string[] = []

    for(let i in users){
        list.push(users[i].email)
    }

    res.status(200).json({list})
}