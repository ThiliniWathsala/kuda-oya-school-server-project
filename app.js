const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors');
const multer = require('multer');
// const db = require('./config/database');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
// db.authenticate()
//     .then(() => {
//         console.log('MySQL Database Connected');
//     })
//     .catch((err) => {
//         console.log(err);
//         log.error('Error: ' + err);
//     });

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/school', require('./routes/schoolR'));

// this need to type in controller
// const db = require('../../../../config/database');
// db.query(`select....`)


const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
