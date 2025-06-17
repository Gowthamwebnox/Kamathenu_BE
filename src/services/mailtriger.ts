

export const EmailTrigger=async()=>{
    const pas='fenr zqzy xosp ehep'
    const email='gowthamrwebnox@gmail.com '
    
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gowthamrwebnox@gmail.com',
      pass: 'fenr zqzy xosp ehep'
    }
  });
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient@example.com',
    subject: 'Hello from Nodemailer',
    text: 'This is a test email sent using Nodemailer with TypeScript'
  };
  const info = await transporter.sendMail(mailOptions);

}