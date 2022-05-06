import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8328b9a7021729",
    pass: "a7879736b61534"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
        from: "Equipe Feedget <oi@gmail.com>",
        to: "Kaique Moreira <kaiquemoreiracloud@gmail.com>",
        subject,
        html: body,
        })
    }
}