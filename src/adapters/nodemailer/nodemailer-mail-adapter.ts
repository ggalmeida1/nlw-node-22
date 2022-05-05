import { MailAdapter, SendMailData } from '../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "79dcb6b84231da",
    pass: "075d22ad0c1e9c"
  }
});


export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Almeida Dev <contact@almeidadev.com>',
      to: 'Gabriel Almeida <biel88sud@gmail.com>',
      subject,
      html: body,
    })
  };
}