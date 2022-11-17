import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
import apiRoute from './routes/api'
import phraseRoute from './routes/phraseRoute'
import userRoute from './routes/userRoute'
import emailRoute from './routes/emailRoute'

dotenv.config()

const server = express()

server.use(express.json())

server.use(cors())

server.use(express.static(path.join(__dirname, "../public")))
server.use(express.urlencoded({extended: true}))

server.use(apiRoute)
server.use(phraseRoute)
server.use(userRoute)
server.use(emailRoute)

server.use((req: Request, res: Response) => {
    res.status(404).json({error: 'Endpoint not found!'})
})

server.listen(process.env.PORT, () => console.log('Server running...'))