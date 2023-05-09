import nodemailer from "nodemailer";
import env from 'dotenv';





export async function  sendConfirmationEmail (email,activationCode)  {
 
  try {
    const transporter = nodemailer.createTransport({

      service: "Gmail",
      auth: { 

        user:"hamzabenayed786@gmail.com",
        pass: "sdwmbcilfnjwkkgp", 
      },
     // tls: {rejectUnauthorized: false}
 
    });
    const listofnumber = "0123456789";
    
    await transporter.sendMail({

     from: "hamza.benayed@esprit.tn",
      to: email,
      subject: "Please confirm your account",
      text: "Email Confirmation " ,
       html: `<h1> Hi ! This is your confirmation code </h1>
        <h3> ${activationCode}</h3>`,
    });
    
    console.log("email sent sucessfully");
  } catch (error) {
    console.log("email not sent");
    console.log(error);
  }
};

export default sendConfirmationEmail;
