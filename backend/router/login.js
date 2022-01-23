const app = require('express');
const router = app.Router();
const {addUser} = require('../controller/user');
const passport = require('passport');
const googleStrategy = require('../service/google-strategy');


router.get('/google',passport.authenticate('google',{scope:['profile','email']}));
router.get('/google/callback',passport.authenticate('google',{
    failureRedirect:'/api/login',
    successRedirect:'/me'
}));

module.exports = router;