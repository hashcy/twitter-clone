const app = require('express')();

const isAuthorized = (req,res,next) => {
    if(req.isAuthenticated()){
        next();
    }else{
        res.redirect('/api/login/google');
    }
};

module.exports = isAuthorized;