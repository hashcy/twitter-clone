// This module allows user to sign-up/sign-in using OAuth2.0 using google

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const clientCredentialas = require("../sensitiveInfo.json");
const passport = require('passport');
const {userModal} = require("../modal/user");

passport.serializeUser(function(profile, done) {
    done(null, profile);
});


passport.deserializeUser(function(profile, done) {
    done(null, profile);
});


passport.use(new GoogleStrategy({
    clientID: clientCredentialas.web.client_id,
    clientSecret: clientCredentialas.web.client_secret,
    callbackURL: clientCredentialas.web.redirect_uris[0],
    passReqToCallback: true
},async (request,accessToken,refreshToken,profile,done)=>{
    let user_info = profile._json;
    // console.log(user_info)
    // check if user is registered or not based on email
    let isPresent = await userModal.findOne({"email":user_info.email});
    if(!isPresent){
        // TODO: ask for DOB and username by opening a modal window
        // TODO: pass this whole info afterward
        // TODO: ask for bio

        let newUser = new userModal({
            "name":user_info.name,
            // "DOB":dob,
            "username":user_info.name.replace(" ",""),
            // "bio":bio,
            "email":user_info.email,
            "joinedOn": new Date().toISOString(),
            "followers":{},
            "following":{},
            "displayPicture":user_info.picture,
            "backgroundPicture":""
        })
        await newUser.save();
    }
    return done(null, user_info)
}));
