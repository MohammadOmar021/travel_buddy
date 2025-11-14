import nodemailer from 'nodemailer';



const verifycode = Math.floor(100000 + Math.random() * 900000);


export const sendEmail = async (req, res) => {
    try {
        const { email } = req.body;
         const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "umerbhatti021@gmail.com",
        pass: "",
      },
    });
    await transporter.sendMail({
        from: "umerbhatti021@gmail.com",
        to: email,
        subject: "Verification Email",
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verification OTP</title>
</head>
<body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f4f4f4;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px; margin:auto; background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
    
    <!-- Header -->
    <tr>
      <td align="center" style="background-color:#4CAF50; padding:30px 0;">
        <h1 style="color:#ffffff; font-size:28px; margin:0;">Verify Your Email</h1>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding:40px 30px 20px 30px; text-align:center;">
        <p style="font-size:16px; color:#333333; margin:0 0 20px 0;">
          Hello,
        </p>
        <p style="font-size:16px; color:#333333; margin:0 0 30px 0;">
          Use the following OTP to verify your email address. This code is valid for the next 10 minutes.
        </p>
        <!-- OTP Code -->
        <div style="display:inline-block; background-color:#f1f1f1; padding:15px 25px; border-radius:6px; font-size:24px; letter-spacing:4px; font-weight:bold; margin-bottom:30px;">
          ${verifycode}
        </div>

        <p style="font-size:14px; color:#777777; margin:0;">
          If you did not request this code, please ignore this email.
        </p>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td align="center" style="background-color:#f4f4f4; padding:20px; font-size:12px; color:#999999;">
        &copy; 2025 Your Company. All rights reserved.
      </td>
    </tr>
  </table>
</body>
</html>
`
    });
    res.json({
        message: "Email sent successfully",
        status: true
    });
    } catch (error) {
        res.json({
            message: "Failed to send email",
            status: false
        });
    }
}