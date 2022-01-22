// This module handles the authorization redirects
const app = require('express');
const router = app.Router();
const authRedirect = require("../controller/authRedirect")

router.get('/googleredirect',authRedirect.googleRedirect);

module.exports = router;