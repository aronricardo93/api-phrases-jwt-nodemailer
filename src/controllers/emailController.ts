import { Request, Response } from 'express'
import nodemailer from 'nodemailer'

export const contato = async (req: Request, res: Response) => {
    //passo 1 : configurar o transporter(servidor smtp, responsável pelo envio de emails)
    let transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "b74d97d47458bb",
          pass: "315e4f3afd6c00"
        }
      });
    //passo 2 : configurar a mensagem
    let message = {
        /*from: 'aronricardo@hotmail.com', //pode ser Aron Ricardo <aronricardo@hotmail.com>
        to: 'teste@email.com',
        subject: 'Assunto aleatório',
        html: 'Opa, <strong>Teste</strong>, como vai?',
        text: 'Opa, teste, como vai?' //caso o sever smtp não suporte html*/
        
        from: req.body.from, 
        to: 'teste@email.com',
        subject: req.body.subject,
        html: req.body.html,
        text: req.body.text 
    }
    //passo 3 : enviar a mensagem
    let info = await transport.sendMail(message)

    res.json('E-mail sent!')
}


