import nodemailer from 'nodemailer';

export const EmailTrigger = async (name: string, email: string, otp: number) => {
  console.log(`${name} ${email} ${otp} => Sending OTP`);
  
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'gowthamrwebnox@gmail.com',
        pass: 'fbvb jeuq uhqb stzu'
      }
    });

    const mailOptions = {
      from: 'rgowthamraj5194@gmail.com',
      to: email,
      subject: 'Kamathenu Welcomes You!',
      text: `Hi ${name},Your OTP is: ${otp}`
    };

    const info = await transporter.sendMail(mailOptions)
    console.log(info.response.slice(0,3)+">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    return "MailSendSuccessfully"
    
  }
   catch (err) {
    console.log(err)
  }
};
