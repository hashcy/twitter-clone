const app = require('express');
const router = app.Router();

router.get('/',(req,res) => {
    res.send("I am in !!");
});

module.exports = router;