import nodemailer from 'nodemailer';

export const EmailTrigger = async (name: string, email: string, otp: number) => {
  console.log(`${name} ${email} ${otp} => Sending OTP`);
  
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'gowthamrwebnox@gmail.com',
        pass: 'fenr zqzy xosp ehep'
      }
    });

    const mailOptions = {
      from: 'gowthamrwebnox@gmail.com',
      to: email,
      subject: 'Kamathenu Welcomes You!',
      text: `Hi ${name},\n\nYour OTP is: ${otp}\n\nThanks,\nKamathenu Team`
    };

    const info = await transporter.sendMail(mailOptions);

  } catch (err) {
    
  }
};
