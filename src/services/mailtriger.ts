import nodemailer from 'nodemailer'

export const EmailTrigger=async(name:string,email:string,opt:number)=>{

    
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gowthamrwebnox@gmail.com',
      pass: 'fenr zqzy xosp ehep'
    }
  });
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: '',
    subject: 'Kamathenu people Welcome you ',
    text: 'Your OTP is'
  };
  const info = await transporter.sendMail(mailOptions);

}