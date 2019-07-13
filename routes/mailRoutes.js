const nodemailer = require("nodemailer");

module.exports = app => {
  app.post("/api/contact", (req, res) => {
    const output = `
    <div style="width: 500px">
      <p style="color: red"> You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    </div>
  `;

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "yanghakim0@gmail.com",
        pass: "143494040796Yh"
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: req.body.email, // sender address
      to: "yanghakim0@gmail.com", // list of receivers
      subject: "Portfolio Contact Request", // Subject line
      text: "Hello world?", // plain text body
      html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
};
