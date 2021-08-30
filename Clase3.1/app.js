/**
 * npm init --yes (Crear proyecto rápidamente)
 npm install (i) permite la instalación de dependencias en el proyecto
 Express-> (framework de nodeJS) Permite la creación de API's Rest con node js

 API
 -servidor
 - Crear endpoints con sus respectivos métodos de consulta
 - Dar respuesta al servidor
 */

const express = require('express'); //Importar la biblioteca
const app = express();

//midlewards
app.use(express.json());

//Endpoint
//localhost://3000/users
app.get('/users', (request, response)=> {
    response.send("Welcome Back");
    console.log(request.query);
});

app.get('/test', (request, response)=> {
    response.send('Hello World, this is a test');
});

app.post('/register', (request, response)=> {
    console.log(request.body);
    response.send('You are registered')
})

app.put('/updateUser', (request, response)=> {
    console.log(request.body);
    response.send('Data has been updated')
})

app.delete('/deleteUser', (request, response)=> {
    console.log(request.body);
    response.send('Data has been deleted')
})

//Listen
app.listen(3000, ()=> {
    console.log("The server is running on port: 3000")
})


