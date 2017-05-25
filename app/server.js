
/*******
Form handling
*****/

var nodemailer = require("nodemailer");
var xoauth2 = require('xoauth2');


var generator = xoauth2.createXOAuth2Generator({
    user: {userEmail},
    clientId: {clientId},
    clientSecret: {clientSecret}
});
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        /*type:'OAuth2',
        user: 'sirsendugope1994@gmail.com',
        pass: '15980000',
        clientId: '653150863416-a8vq2or5gde19md57jh9le04dt0gemdf.apps.googleusercontent.com',
        clientSecret: 'FD1U56_pdWlgtydpmBdB1DoJ'*/
        xoauth2: generator
    }
});

/*transporter.set('oauth2_provision_cb', (user, renew, callback) => {
    let accessToken = nodemailer.userTokens[user];
    if(!accessToken){
        return callback(new Error('Unknown user'));
    }else{
        return callback(null, accessToken);
    }
});

transporter.on('token', token => {
    console.log('A new access token was generated');
    console.log('User: %s', token.user);
    console.log('Access Token: %s', token.accessToken);
    console.log('Expires: %s', new Date(token.expires));
});

transporter.sendMail({
    from: 'sirsendugope1994@gmail.com',
    to: 'sirsendugope@gmail.com',
    subject: 'Message',
    text: 'I hope this message gets through!',
    auth: {
        user: 'sirsendugope1994@gmail.com',
        pass: '15980000',
        clientId: '653150863416-a8vq2or5gde19md57jh9le04dt0gemdf.apps.googleusercontent.com',
        clientSecret: 'FD1U56_pdWlgtydpmBdB1DoJ'
    }


   
});*/

// setup email data with unicode symbols
let mailOptions = {
    from: '"Sirsendu" <sirsendugope1994@gmail.com>', // sender address
    to: 'sirsendugope@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};


// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});