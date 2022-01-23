// This module handles the requests coming to authRedirects
const userModal = require("../modal/user");

const authRedirect = {
    "googleRedirect": (req,res) => {
        console.log(req,'google redirect req');
        res.redirect('/me');
    }
};

module.exports = authRedirect;
