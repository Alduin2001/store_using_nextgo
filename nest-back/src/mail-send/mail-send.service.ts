import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
@Injectable()
export class MailSendService {
    constructor(
        private readonly mailService:MailerService
    ){}
    async sendMail(config:
        {from:string,
            to:string,
            subject:string,
            text?:string,
            html?:string
        }){
        await this.mailService.sendMail({
            from:config.from,
            to:config.to,
            subject:config.subject,
            text:config.text,
            html:config.html || 'Включите html'
        })
    }
}
