import { Request, Response, NextFunction } from "express"
import { User } from '../models/User'
import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const Auth = {
    private: async (req: Request, res: Response, next: NextFunction) => {
        let sucess = false

        //Fazer verificação de auth

        if(req.headers.authorization){
            /* Implementação com Basic Auth 
            
             console.log(req.headers.authorization)
             let hash: string = req.headers.authorization.substring(6) //ignorar a palavra Basic
             let decoded: string = Buffer.from(hash, 'base64').toString() //descriptografar o hash
             let data : string [] = decoded.split(':')//quebrar em array a partir do :

             if(data.length === 2){
                 let hasUser = await User.findOne({where: {email: data[0],password: data[1]}})
           
                 if(hasUser){
                     sucess = true
                 }
             }*/

             const [authType, token] = req.headers.authorization.split(' ')

             if(authType === 'Bearer'){
                try {
                    JWT.verify(
                        token, 
                        process.env.JWT_SECRET_KEY as string 
                        )
                    sucess = true
                } catch (error) {
                    
                }
             }
        }

        if(sucess){
            next()
        }else{
            res.status(403).json({error: 'There is no authoritazion!'})
        }
    }
}