/**
 * npm init --yes (Crear proyecto rápidamente)
 npm install (i) permite la instalación de dependencias en el proyecto
 Express-> (framework de nodeJS) Permite la creación de API's Rest con node js

 API
 -servidor
 - Crear endpoints con sus respectivos métodos de consulta
 - Dar respuesta al servidor
 */
// const express = require('express'); //Importar la biblioteca

import express from 'express';
import mongoose from 'mongoose';
//  import CompanyModel from 'CompanyModel';
import Company from './models/CompanyModel.js';
const app = express();
const port = 3001

//midlewards
// app.use(express.json());

//Endpoint
//localhost://3000/users
app.get('/', async (request, response)=> {
    try {
        const data = await Company.find().sort({founded_month: -1}).limit(8);
        response.json(data);
    }
    catch(e) {
        response.json(e);
    }
});


//Listen
app.listen(3000, async ()=> {
    try {
            await mongoose.connect('mongodb://localhost:27017/PRAvanzada', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }
    catch(e) {
        console.log("Error de la conexión a la DB")
    }
    console.log(`The server is running at http://localhost: ${port} `)
})


