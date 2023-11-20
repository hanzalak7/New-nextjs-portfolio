import nodemailer from 'nodemailer' 

export async function POST(req){
    const data = await req.json()
    const { to,subject , text} = data
    console.log({to,subject , text})

    const {SMTP_PASS,SMTP_EMAIL} = process.env
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:SMTP_EMAIL,
            pass:SMTP_PASS,
        }
    })

    const mailOptions = {
        from:SMTP_EMAIL,
        to:'hanzala7000k@gmail.com',
        subject:`mail from ${to} subject : ${subject}`,
        text:text
    }

    transporter.sendMail(mailOptions, function(err,info){
        if (err) {
            throw new Error(err);
          } else {
            console.log("Email Sent");
            return true;
          }
    })

    return new Response('done')
}