import nodemailer from 'nodemailer';

export const EmailTrigger = async (emailTriggerData: any): Promise<string | any> => {
  console.log(emailTriggerData)
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'gowthamrwebnox@gmail.com',
        pass: 'fbvb jeuq uhqb stzu',
      }
    });
if(emailTriggerData.otp!==undefined){
    var mailOptions = {
      from: 'rgowthamraj5194@gmail.com',
      to: emailTriggerData.email,
      subject: 'Kamathenu Welcomes You!',
      text: `Hi ${emailTriggerData.name},Your OTP is: ${emailTriggerData.otp}`
    };
    const info = await transporter.sendMail(mailOptions)
  }
    if(emailTriggerData.message!==undefined){
       var mailMessage = {
        from: 'rgowthamraj5194@gmail.com',
        to: emailTriggerData.email,
        subject: `${emailTriggerData.subject} - ${emailTriggerData.name}`,
        text: `${emailTriggerData.message}`
      };
      const info = await transporter.sendMail(mailMessage)
    }

    
    
    return "MailSendSuccessfully"
    
  }
   catch (err) {
    console.log(err)
  }
};
