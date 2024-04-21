document.addEventListener('DOMContentLoaded', function() {
    /**Programa que dada la categoria de un trabajador y su sueldo,
     * calcule el aumento corresppondiente teniendo en cuenta los siguientes datos
     * Categoria // Aumento
     * 1  // 15%
     * 2  // 10%
     * 3  // 8%
     * 4  // 7%
     * El usuario debe introducir el sueldo y la categoria
     */
    let formPrograma31 = document.getElementById('formPrograma31');
    formPrograma31.addEventListener('submit', function(event) {
        event.preventDefault();
        let sueldo = document.getElementById('sueldo').value;
        let categoria = document.getElementById('categoria').value;
        switch (categoria) {
            case '1':
                sueldo = sueldo * 1.15;
                break;
            case '2':
                sueldo = sueldo * 1.10;
                break;
            case '3':
                sueldo = sueldo * 1.08;
                break;
            case '4':
                sueldo = sueldo * 1.07;
                break;
            default:
                break;
        }
        document.getElementById('respuesta31').textContent = 'El sueldo final es: $' + sueldo.toFixed(2);
    });
    /**El costo de llamadas inetrnacionales dependen de la zona geografica
     * en la que se encuentra el pais de destino y el numero de minutos hablados
     * Clave // Zona // Costo por minuto
     * 12  // America del Norte // $2.00
     * 15  // America Central // $2.50
     * 18  // America del Sur // $4.00
     * 19  // Europa // $3.00
     * 23  // Asia // $6.00
     * 25  // Africa // $6.50
     * 29 // Oceania // $5.00
     * El usuario debe introducir la clave de la zona y el numero de minutos
     */
    let formPrograma32 = document.getElementById('formPrograma32');
    formPrograma32.addEventListener('submit', function(event) {
        event.preventDefault();
        let minutos = document.getElementById('minutos').value;
        let clave = document.getElementById('clave').value;
        switch (clave) {
            case '12':
                minutos = minutos * 2;
                break;
            case '15':
                minutos = minutos * 2.5;
                break;
            case '18':
                minutos = minutos * 4;
                break;
            case '19':
                minutos = minutos * 3;
                break;
            case '23':
                minutos = minutos * 6;
                break;
            case '25':
                minutos = minutos * 6.5;
                break;
            case '29':
                minutos = minutos * 5;
                break;
            default:
                break;
        }
        document.getElementById('respuesta32').textContent = 'El costo total es: $' + minutos.toFixed(2);
    });
    /**Programa 33 = Programa que permite calcular que hay que pagarle a un trabajador teniendo en cuenta
     * sus sueldos, horas extra trabajadas para el pago de horas extra se toma en cuenta la siguiente informacion
     * Precio Hora Extra // Categoria
     * $30  // 1
     * $38  // 2
     * $50  // 3
     * $70  // 4
     * El usuario debe introducir las horas extra y la categoria
     */
    let formPrograma33 = document.getElementById('formPrograma33');
    formPrograma33.addEventListener('submit', function(event) {
        event.preventDefault();
        let horas = document.getElementById('horas33').value;
        let categoria = document.getElementById('categoria33').value;
        switch (categoria) {
            case '1':
                horas = horas * 30;
                break;
            case '2':
                horas = horas * 38;
                break;
            case '3':
                horas = horas * 50;
                break;
            case '4':
                horas = horas * 70;
                break;
            default:
                break;
        }
        document.getElementById('respuesta33').textContent = 'El pago total es: $' + horas.toFixed(2);
    });
    /** Programa 34 = Programa que tal que dada la matricula de un alumno, la carrera en la que esta inscrito
     * cuatrimeste y su promedio, determine si es apto para pertenecer a alguna de las carreras de UTT,
     * de ser aceptado, imprimir carrera, matricula y la palabra "aceptado"
     * Carrera  // Promedio  // Cuatrimestre
     * TICS // 8.8       // 5
     * MECA // 8.5     // 5
     * ADMIN // 8.5    // 5
     * PROCESOS // 8.5    // 5
     * El ususario debe introducir la matricula, carrera cuatrimestre y promedio
     */
    let formPrograma34 = document.getElementById('formPrograma34');
    formPrograma34.addEventListener('submit', function(event) {
        event.preventDefault();
        let matricula = document.getElementById('matricula34').value;
        let carrera = document.getElementById('carrera34').value;
        let cuatrimestre = document.getElementById('cuatrimestre34').value;
        let promedio = document.getElementById('promedio34').value;
        let aceptado = 'No aceptado';
        switch (carrera) {
            case 'TICS':
                if (promedio >= 8.8 && cuatrimestre == 5) {
                    aceptado = 'Aceptado';
                }
                break;
            case 'MECA':
                if (promedio >= 8.5 && cuatrimestre == 5) {
                    aceptado = 'Aceptado';
                }
                break;
            case 'ADMIN':
                if (promedio >= 8.5 && cuatrimestre == 5) {
                    aceptado = 'Aceptado';
                }
                break;
            case 'PROCESOS':
                if (promedio >= 8.5 && cuatrimestre == 5) {
                    aceptado = 'Aceptado';
                }
                break;
            default:
                break;
        }
        document.getElementById('respuesta34').textContent = 'Matricula: ' + matricula + ' Carrera: ' + carrera + ' ' + aceptado;
    });
    /**Programa 35 = En un hospital se le ha hecho un estudio sobre pacientes registrados durante los ultimos 10 años
     * con el objetvo de hacer una aproximacion de los costos de interacion por paciente
     * Tipo de enfermedad  // Costo * dia
     * 1  // 25.00
     * 2  // 16.00
     * 3  // 20.00
     * 4  // 32.00
     */
    let formPrograma35 = document.getElementById('formPrograma35');
    formPrograma35.addEventListener('submit', function(event) {
        event.preventDefault();
        let dias = document.getElementById('dias35').value;
        let enfermedad = document.getElementById('enfermedad35').value;
        switch (enfermedad) {
            case '1':
                dias = dias * 25;
                break;
            case '2':
                dias = dias * 16;
                break;
            case '3':
                dias = dias * 20;
                break;
            case '4':
                dias = dias * 32;
                break;
            default:
                break;
        }
        document.getElementById('respuesta35').textContent = 'El costo total es: $' + dias.toFixed(2);
    });
    /**Programa 36 = Programa tal que dado como dato una temperatura en grados
     * determine el deporte que sea propiedad
     * DEPORTE   // TEMPERATURA
     * Natacion  //  >85
     * Tenis    // 70 < temp <= 85
     * Golf   //  32 < temp <= 70
     * Esqui   // temp <= 32
     * Marcha  //  <= 10
     */
    let formPrograma36 = document.getElementById('formPrograma36');
    formPrograma36.addEventListener('submit', function(event) {
        event.preventDefault();
        let temperatura = document.getElementById('temperatura36').value;
        let deporte = '';
        if (temperatura > 85) {
            deporte = 'Natacion';
        } else if (temperatura > 70) {
            deporte = 'Tenis';
        } else if (temperatura > 32) {
            deporte = 'Golf';
        } else if (temperatura > 10) {
            deporte = 'Esqui';
        } else {
            deporte = 'Marcha';
        }
        document.getElementById('respuesta36').textContent = 'Deporte: ' + deporte;
    });
    /**Programa tal que dado el sueldo de 10 trabajadores
     * de una empresa obtenga el total de nomina,
     * considere a demas que no puede utilizar estructuras algoritmicas repetitivas para el caso
     * en el caso dos si utilizarlas
     */
    let formPrograma37 = document.getElementById('formPrograma37');
    formPrograma37.addEventListener('submit', function(event) {
        event.preventDefault();
        let sueldo1 = document.getElementById('sueldo1').value;
        let sueldo2 = document.getElementById('sueldo2').value;
        let sueldo3 = document.getElementById('sueldo3').value;
        let sueldo4 = document.getElementById('sueldo4').value;
        let sueldo5 = document.getElementById('sueldo5').value;
        let sueldo6 = document.getElementById('sueldo6').value;
        let sueldo7 = document.getElementById('sueldo7').value;
        let sueldo8 = document.getElementById('sueldo8').value;
        let sueldo9 = document.getElementById('sueldo9').value;
        let sueldo10 = document.getElementById('sueldo10').value;
        let total = parseFloat(sueldo1) + parseFloat(sueldo2) + parseFloat(sueldo3) + parseFloat(sueldo4) + parseFloat(sueldo5) + parseFloat(sueldo6) + parseFloat(sueldo7) + parseFloat(sueldo8) + parseFloat(sueldo9) + parseFloat(sueldo10);
        document.getElementById('respuesta37').textContent = 'Total de nomina: $' + total.toFixed(2);
    });
    let formPrograma37_2 = document.getElementById('formPrograma37-2');
    formPrograma37_2.addEventListener('submit', function(event) {
        event.preventDefault();
        let sueldos = document.querySelectorAll('.sueldo-2');
        let total = 0;
        sueldos.forEach(sueldo => {
            total += parseFloat(sueldo.value);
        });
        document.getElementById('respuesta37-2').textContent = 'Total de nomina: $' + total.toFixed(2);
    });
    /**Programa tal que dado numeros enteros obtenga el numero de 0 que hay entre esos numeros */
    let formPrograma38 = document.getElementById('formPrograma38');
    formPrograma38.addEventListener('submit', function(event) {
        event.preventDefault();
        let ciclos = parseInt(document.getElementById('ciclos38').value);
        document.getElementById('ciclos38').value = '';
        newFormPrograma38 = document.createElement('form');
        newFormPrograma38.setAttribute('id', 'formPrograma38-2');
        let label1 = document.createElement('label');
        label1.textContent = 'Numero: ';
        label1.setAttribute('for', 'numero1-38');
        let input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('id', 'numero1-38');
        input.name = 'numero1-38';
        let button = document.createElement('button');
        button.type = 'submit';
        button.textContent = 'Enviar';
        newFormPrograma38.appendChild(label1);
        newFormPrograma38.appendChild(input);
        newFormPrograma38.appendChild(button);
        document.getElementById('cuerpoPrograma38').appendChild(newFormPrograma38);
        formPrograma38.style.display = 'none';
        let ceros = 0;
        let contador = 0;
        let formPrograma38_2 = document.getElementById('formPrograma38-2');
        formPrograma38_2.addEventListener('submit', function(event) {
            event.preventDefault();
            let numero = parseInt(document.getElementById('numero1-38').value);
            if (numero == 0) {
                ceros++;
            }
            contador++;
            document.getElementById('respuesta38').textContent = 'Numeros Introducidos = ' + contador;
            document.getElementById('numero1-38').value = '';
            if (contador === ciclos) {
                document.getElementById('respuesta38').textContent += ' Ceros = ' + ceros;
                formPrograma38_2.style.display = 'none';
            }
            document.getElementById('botonReiniciar38').addEventListener('click', function() {
                formPrograma38.style.display = 'block';
                formPrograma38_2.style.display = 'none';
                document.getElementById('respuesta38').textContent = '';
                document.getElementById('cuerpoPrograma38').removeChild(newFormPrograma38);
            });
        });
    });
    /**Programa tal que dado 270 numeros,
     * obtenga la suma de los impares y el promedio de los pares */
    let formPrograma39 = document.getElementById('formPrograma39');
    let ciclos = 5;
    let impares = 0;
    let pares = 0;
    let contador = 0;
    formPrograma39.addEventListener('submit', function(event) {
        event.preventDefault();
        let numero = parseInt(document.getElementById('numero39').value);
        document.getElementById('numero39').value = '';
        if (numero % 2 === 0) {
            pares += numero;
        } else {
            impares += numero;
        }
        contador++;
        document.getElementById('respuesta39').textContent = 'Numeros Introducidos = ' + contador;
        if (contador === ciclos){
            document.getElementById('respuesta39').textContent = 'Suma de impares = ' + impares + ' Promedio de pares = ' + (pares / ciclos);
            formPrograma39.style.display = 'none';
        }
        document.getElementById('botonReiniciar39').addEventListener('click', function() {
            formPrograma39.style.display = 'block';
            document.getElementById('respuesta39').textContent = '';
            contador = 0;
            pares = 0;
            impares = 0;
        });
    });
    /**Programa 40 = Programa que le un numero entero n y calcule el resultado
     * de la siguiente serie: 
     * 1 - 1/2 + 1/3 - 1/4 + 1/5 - 1/6 + ... + 1/n
     */
    let formPrograma40 = document.getElementById('formPrograma40');
    formPrograma40.addEventListener('submit', function(event) {
        event.preventDefault();
        let numero = parseInt(document.getElementById('numero40').value);
        document.getElementById('numero40').value = '';
        let signo = '+';
        let serie = '1 ';
        for (let i = 2; i <= numero; i++) {
            if (i % 2 === 0){
                signo = '-';
            }
            else {
                signo = '+';
            }
            serie += signo + ' (1/' + i + ') ';
        }
        document.getElementById('respuesta40').textContent = serie;
        document.getElementById('botonReiniciar40').addEventListener('click', function() {
            document.getElementById('respuesta40').textContent = ''; 
        });
    });
});
