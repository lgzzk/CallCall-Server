const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

// 加载环境变量
dotenv.config();

// 连接数据库
connectDB();

// 路由文件
const authRouter = require('./routes/auth');
const messageRouter = require('./routes/message');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 挂载路由
app.use('/api/auth', authRouter);
app.use('/api/message', messageRouter)

// 错误处理中间件
app.use(errorHandler);

module.exports = app;
