const {userModal} = require('../modal/user');

// Add a user

const addUser = (req,res,next) => {

    const userDetails = new userModal(req.body);
    userDetails.save((err,data) => {
        if(err){
            return res.status(400).json({
                msg:err
            })
        }
        res.json({
            msg: "User added successfully"
        })
    })

}

module.exports = {addUser};