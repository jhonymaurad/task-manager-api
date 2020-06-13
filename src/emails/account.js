const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jhonymaurad@gmail.com',
    subject: 'Thaks for joining in!',
    text: `Welcome to the app ${name}, let me kow how you get along with the app.`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jhonymaurad@gmail.com',
    subject: 'Sorry to see you go!',
    text: `We are sorry to see you go, ${name}, hope you come back soon`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
