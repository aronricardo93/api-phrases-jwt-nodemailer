import { Request, Response}  from "express";
import { Phrase } from '../models/Phrase'

export const createPhrases = async (req: Request, res: Response) =>  {
    let { author, txt } = req.body

    const phrase = await Phrase.create({
        author, txt
    })
    res.status(201).json({author, txt})
}

export const listPhrases = async (req: Request, res: Response) => {
    let list = await Phrase.findAll()

    res.status(200).json(list)
}

export const getPhrase = async (req:Request, res:Response) => {
    let { id } = req.params

    let phrase = await Phrase.findByPk(id)

    if(phrase){
        res.status(200).json(phrase)
    }else{
        res.status(404).json(`Phrase with id ${id} not found!`)
    }    
}

export const updatePhrase = async (req:Request, res:Response) => {
    let { id } = req.params
    let newInfos = req.body

    let phrase = await Phrase.findByPk(id)

    if(phrase){
        await Phrase.update(newInfos, {
            where: {
                id: Number(id)
            }
        })
        phrase = await Phrase.findByPk(id)
        res.status(200).json(phrase)
    }else{
        res.status(404).json(`Phrase with id ${id} not found!`)
    }    

}

export const deletePhrase = async (req: Request, res: Response) => {
    let { id } = req.params
    let phrase = await Phrase.findByPk(id)

    if(phrase){
        await Phrase.destroy({
            where: {
                id: id
            }
        })
        res.status(204).json({})
    }else{
        res.status(404).json({error: `ID ${id} not found!`})
    }
    
}