import "dotenv/config.js"   //configuracion del archivo .env
import express from "express"
import path from "path" 
import cookieParser from "cookie-parser" 
import logger from "morgan" 
import { __dirname } from "./utils.js"
import indexRouter from './routes/index.js'
import mangaRouter from '../minga-back/routes/manga.js'
import cors from 'cors'
import './config/database.js'  

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors());

//app.use para usar middlewares para enrutarme con esas "palabritas"
app.use('/', indexRouter);
app.use('/manga', mangaRouter);

export default app
