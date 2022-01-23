const app = require('express');
const router = app.Router();

router.get('/',(req,res) => {
    if(req.user){
        res.send("I am in !!");
    }else{
        // TODO: redirect to login page
        res.redirect('/api/login/google')
    }
});

module.exports = router;