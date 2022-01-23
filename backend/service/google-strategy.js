// This module allows user to sign-up/sign-in using OAuth2.0 using google

const googleStrategy = require('passport-google-oauth20').Strategy;
const clientCredentialas = require("../sensitiveInfo.json");
const passport = require('passport');
const {userModal} = require("../modal/user");

passport.use(new googleStrategy({
    clientID: clientCredentialas.web.client_id,
    clientSecret: clientCredentialas.web.client_secret,
    callbackURL: clientCredentialas.web.redirect_uris[0]
},async function(accessToken,refreshToken,profile,done){
    console.log(accessToken,refreshToken,profile,'profile');
    done(null,profile)
})
);
