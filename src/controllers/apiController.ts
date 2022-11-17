import { Request, Response } from "express"
import { Phrase } from '../models/Phrase'

export const getRandomNumber = (req: Request, res: Response) => {
    let nRandom = Math.floor(Math.random() * 10)
    res.status(200).json({number: nRandom})
}

export const sendName = (req: Request, res: Response) => {
    let name: string = req.params.name
    res.status(200).json({name})
}