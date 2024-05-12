import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, email, mobile, message, service } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Configure your email provider here
      // Example configuration for Gmail:
      service: 'Gmail',
      auth: {
        user: 'henicoach@gmail.com',
        pass: 'cmdr qtos pjfi gikz',
      },
    });

    try {
      // Send email to client
      await transporter.sendMail({
        from: 'henicoach@gmail.com',
        to: email,
        subject:  `Thank you for choosing ${service} service`,
        text: `Dear ${fullName},\n\nThank you for choosing our ${service} service. Your message has been received, and we will get back to you as soon as possible.\n\nBest regards,\nHeni Coach HjarTeam`,
      });

      // Send mail with defined transport object to recipient (you can keep this part unchanged)
      await transporter.sendMail({
        from: 'henicoach@gmail.com',
        to: 'henicoach@gmail.com',
        subject: 'New Message from Contact Form',
        text: `
          Full Name: ${fullName}
          Email: ${email}
          Mobile: ${mobile}
          Message: ${message}
          Service: ${service}
        `,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
