const app = require('express')();
const mongoose = require("mongoose");   //To connect to mongoDb database
const morgan = require("morgan");       //To log request details
const bodyParser = require("body-parser");      //parses incoming request bodies to hand it over to the middlewares
const passport = require('passport');
const loginRoute = require('./router/login');
const authRedirect = require('./router/authRedirect');
const userProfile = require('./router/me');
const session = require('express-session');
const isAuthorized = require("./middleware/isAuthorized");
const sensitiveInfo = require("./sensitiveInfo.json")

mongoose.connect(sensitiveInfo.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("\n[*] DATABASE CONNECTED\n"))
.catch((err) => console.error(err))

app.use(session({
    secret: "my sesison secret key",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 8 * 60 * 60 * 1000 }
}));
app.use(passport.initialize());
app.use(passport.session());

//middlewares
app.use(morgan('dev'));     //morgan middleware
app.use(bodyParser.json());     //body parser middleware in json format

//routes middleware
//route for incoming api request
app.use('/api/',loginRoute);
app.use('/auth',authRedirect)
app.use('/me',isAuthorized, userProfile);

const port = process.env.PORT || 8000;      //port to run server on

//listener
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});