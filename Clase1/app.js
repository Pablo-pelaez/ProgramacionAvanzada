var number1 = 7;
console.log(number1);
number1 = 9;
console.log(number1);

var number2 = 8;
console.log(number1);

//Operadores lógicos
// &&(and) ||(or) !(not)

 // Operadores relacionales
 // <, >, <=, >=, ==(comparar), !=(diferente de), ===(Verifica valor y tipo de dato)
// 6 == "6" (true)
// 6 === "6" (false)
//6 === 6.0 

//Condicionales

// if(number1 > number2){
//     console.log("El número " + number1 + " es mayor que " + number2 );
// }
// else{
//     console.log("El número " + number2 + " es mayor que " + number1 );
// }

//EJERCICIO JS
//DATOS:
// 1 credito pregrado = 50000
// 1 credito posgrado = 300000
//promedio >= 4.5 && alumno->pregrado => 28 creditos && 25% desc.
//promedio >= 4.0 && < 4.5 && alumno->pregrado => 25 creditos && 10% desc.
//promedio >= 3.5 && < 4.0 && alumno->pregrado => 20 creditos
//promedio >= 2.5 && < 3.5 && alumno->pregrado => 15 creditos
//promedio < 2.5 && alumno->pregrado => No Matriculado

//promedio >= 4.5 && alumno->posgrado => 20 creditos && 20% desc.
// promedio < 4.5 && alumno->posgrado => 10 creditos




function matriculaEstudiante(){

    var creditos;
    var valorTotal;
    var estudios = 'Pregrado';
    var promedio = 4

        if (estudios == 'Pregrado'){
            creditos = 50000;
            if(promedio >= 4.5){
                creditos = creditos * 28;
                valorTotal = creditos - (creditos * 0.25);
            }
            else{
                if(promedio >= 4 && promedio < 4.5){
                    creditos = creditos * 25;
                    valorTotal = creditos - (creditos * 0.10);
                }
                else{
                    if(promedio >= 3.5 && promedio < 4){
                        valorTotal = creditos * 20;
                    }
                    else{
                        if(promedio >= 2.5 && promedio < 3.5){
                            valorTotal = creditos * 15;
                        }
                        else{
                            if(promedio < 2.5 && promedio >= 0){
                                valorTotal = 0;
                            }
                        }
                    }
                }
            }


        }
        else if(estudios == 'Posgrado'){
            creditos = 300000;
            if(promedio >= 4.5){
                creditos = creditos * 20;
                valorTotal = creditos - (creditos * 0.2);
            }
            else{
                if(promedio < 4.5 && promedio >= 0){
                    valorTotal = creditos * 10;
                }
            }
        }
     
        if(valorTotal >= 2.5){
            console.log("El valor total a pagar por el estudiante es de: " + valorTotal);
        }    
        else{
            console.log("No puedes matricularte en esta ocasión");
        }
    
}

matriculaEstudiante();

