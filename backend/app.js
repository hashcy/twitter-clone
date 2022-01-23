const app = require('express')();
const mongoose = require("mongoose");   //To connect to mongoDb database
const morgan = require("morgan");       //To log request details
const bodyParser = require("body-parser");      //parses incoming request bodies to hand it over to the middlewares

const loginRoute = require('./router/login');
const authRedirect = require('./router/authRedirect');
const userProfile = require('./router/me');

const sensitiveInfo = require("./sensitiveInfo.json")

mongoose.connect(sensitiveInfo.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("\n[*] DATABASE CONNECTED\n"))
.catch((err) => console.error(err))

//middlewares
app.use(morgan('dev'));     //morgan middleware
app.use(bodyParser.json());     //body parser middleware in json format

//routes middleware
//route for incoming api request
app.use('/api/login',loginRoute);
app.use('/auth',authRedirect)
app.use('/me',userProfile);

const port = process.env.PORT || 8000;      //port to run server on

//listener
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});