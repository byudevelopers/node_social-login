module.exports = {
    facebook: {
        provider: 'facebook',
        // Used to encrypt the cookie assosiated with it
        //    idealy you'd replace with a generated 32 character password
        password: 'cookie_encryption_password_secure',
        isSecure: false,
        clientId: '<enter your app id here>',
        clientSecret: '<enter your client secret here>'
    }
};