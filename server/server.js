import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import connect from "./database/connection.js";
import ContactModel from "./models/ContactModel.js"
const app = express();


/**middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

const PORT = process.env.NODE_ENV === "production" || "local" ? 3000 : 5000;

app.get("/", (req,res) => {
    res.status(201).json('This is the default route')
})

//initialize db connection before starting server 
connect()
    .then(() => {
        try {
            app.listen(PORT, () => {
                console.log("Server started sucessfully")
            })
        } catch (error) {
            console.log(error.message)
        }
    }).catch(error => {
        console.log(error.message)
    })
    