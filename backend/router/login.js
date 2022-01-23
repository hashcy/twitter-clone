const app = require('express');
const router = app.Router();
const {addUser} = require('../controller/user');
const passport = require('passport');
require('../service/google-strategy');

// passport.use("google",googleOauthStrategy);

router.get('/google',passport.authenticate('google', { scope:[ "email", "profile" ]}));
router.get('/google/callback',passport.authenticate('google',{
    failureRedirect:'/api/login',
    successRedirect:'/me'
}));

module.exports = router;