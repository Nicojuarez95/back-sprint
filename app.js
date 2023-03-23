import "dotenv/config.js"   //configuracion del archivo .env
import express, { response } from "express"
import path from "path" 
import cookieParser from "cookie-parser" 
import logger from "morgan" 
import { __dirname } from "./utils.js"
import indexRouter from './routes/index.js'             
import "dotenv/config.js"                  
import './config/database.js'                                               
import cors from 'cors'
import './config/database.js'  
import morgan from 'morgan'
import {errorHandler, errorNotFound} from './middlewares/error.js'
import bodyParser from 'body-parser'

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors());

//app.use para usar middlewares para enrutarme con esas "palabritas"
app.use('/', indexRouter);
app.use(errorNotFound)
app.use(errorHandler)

export default app
