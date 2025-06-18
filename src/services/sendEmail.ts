import nodemailer from 'nodemailer';

export const EmailTrigger = async (name: string, email: string, otp: number) => {
  console.log(`${name} ${email} ${otp} => Sending OTP`);
  
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'gowthamrwebnox@gmail.com',
        pass: 'jrfc muqv ohgy ckrp'
      }
    });

    const mailOptions = {
      from: 'gowthamrwebnox@gmail.com',
      to: email,
      subject: 'Kamathenu Welcomes You!',
      text: `Hi ${name},Your OTP is: ${otp}`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(info)
    
  }
   catch (err) {
    console.log(err)
  }
};
