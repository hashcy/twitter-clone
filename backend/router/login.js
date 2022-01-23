const app = require('express');
const router = app.Router();
const {addUser} = require('../controller/user');
const passport = require('passport');
require('../service/google-strategy');

// passport.use("google",googleOauthStrategy);

router.get('/login/google',passport.authenticate('google', { scope:[ "email", "profile" ]}));
router.get('/login/google/callback',passport.authenticate('google',{
    failureRedirect:'/api/login',
    successRedirect:'/me'
}));

router.get('/logout',(req,res) => {
    req.logout();
    req.session.destroy();
    res.send("Goodbye!!")
})

module.exports = router;