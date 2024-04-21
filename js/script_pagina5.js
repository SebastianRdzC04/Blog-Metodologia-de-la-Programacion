document.addEventListener('DOMContentLoaded', function() {
    /**Programa que dado nunmeros enteros como datos, obtenga cuantos numeros
     * leidos son mayores a 0, calcule el promedio de los numeros positivos y obtenga
     * el promedio de todos los numeros leidos.
     */
    let formPrograma41 = document.getElementById('formPrograma41');
    let contador = 0;
    let numPositivos = 0;
    let numTodos = 0;
    formPrograma41.addEventListener('submit', function(event) {
        event.preventDefault();
        let numero = parseInt(document.getElementById('numero41').value);
        document.getElementById('numero41').value = '';

        if (numero >0) {
            contador++;
            numPositivos += numero;
        }
        numTodos += numero;
        document.getElementById('respuesta41').textContent = 'Numeros introducidos: ' + contador;
        document.getElementById('botonReiniciar41').addEventListener('click', function() {
            document.getElementById('formPrograma41').style.display = 'block';
            document.getElementById('respuesta41').innerHTML = '';
            contador = 0;
            numPositivos = 0;
            numTodos = 0;
        });
        if (numero === 0) {
            document.getElementById('formPrograma41').style.display = 'none';
            document.getElementById('respuesta41').innerHTML = 'Promedio de los numeros positivos: ' + (numPositivos/contador).toFixed(2) +
            '<br> Promedio de todos los numeros: ' + (numTodos/contador).toFixed(2) +
            '<br>Numeros Introducidos: ' + contador;
        }
        
    });

    /**Programa 42 = Programa que calcula el total de gastos hechos en unas vacaciones
     * no hay un numero determinado de gastos, el programa termina cuando el usuario
     * indroduzca un valor igual a "0"
     */
    let formPrograma42 = document.getElementById('formPrograma42');
    let totalGastos = 0;
    let ciclo = 0;
    formPrograma42.addEventListener('submit', function(event) {
        event.preventDefault();
        let gasto = parseInt(document.getElementById('gasto42').value);
        document.getElementById('gasto42').value = '';
        totalGastos += gasto;
        ciclo++;
        document.getElementById('respuesta42').textContent = 'Gastos introducidos: ' + ciclo;
        if (gasto === 0) {
            document.getElementById('formPrograma42').style.display = 'none';
            document.getElementById('respuesta42').innerHTML = 'Total de gastos: ' + totalGastos;
        }
        document.getElementById('botonReiniciar42').addEventListener('click', function() {
            document.getElementById('formPrograma42').style.display = 'block';
            document.getElementById('respuesta42').innerHTML = '';
            totalGastos = 0;
            ciclo = 0;
        });
    });
    /**Programa que dado un grupo de numeros naturales positivos, calcule
     *  e imprima el cubo de esos numeros.
     */
    let formPrograma43 = document.getElementById('formPrograma43');
    formPrograma43.addEventListener('submit', function(event) {
        event.preventDefault();
        let numero = parseInt(document.getElementById('numero43').value);
        document.getElementById('numero43').value = '';
        document.getElementById('respuesta43').textContent = 'Cubo de ' + numero + ' = ' + Math.pow(numero, 3);
    });
    /**Programa 44 = Programa que calcula el aumento de sueldo para un grupo de trabajadores
     * de una empresa que teniendo en cuenta el siguiente criterio. Si el sueldo es inferior a 1000
     * el aumento sera del 15%, Si el sueldo es mayor o igual a 1000 el aumento sera del 12%
     */
    let formPrograma44 = document.getElementById('formPrograma44');
    formPrograma44.addEventListener('submit', function(event) {
        event.preventDefault();
        let sueldo = parseInt(document.getElementById('sueldo44').value);
        document.getElementById('sueldo44').value = '';
        let aumento = 0;
        if (sueldo < 1000) {
            aumento = sueldo * 0.15;
        } else {
            aumento = sueldo * 0.12;
        }
        document.getElementById('respuesta44').textContent = 'Aumento de sueldo: ' + (sueldo + aumento);
    });
    /**Programa que dado N numeros enteros como dato obtenga cuantos numeros leidos
     * son mayores a 0, calcule el promedio de todos los numeros positivos
     * y calcule el promedio de todos los numeros leidos
     */
    let formPrograma45 = document.getElementById('formPrograma45');
    let contador45 = 0;
    let numPositivos45 = 0;
    let numTodos45 = 0;
    formPrograma45.addEventListener('submit', function(event) {
        event.preventDefault();
        let numero = parseInt(document.getElementById('numero45').value);
        document.getElementById('numero45').value = '';
        if (numero > 0) {
            numPositivos45 += numero;
        }
        numTodos45 += numero;
        contador45++;
        document.getElementById('respuesta45').textContent = 'Numeros introducidos: ' + contador45;
        document.getElementById('botonReiniciar45').addEventListener('click', function() {
            document.getElementById('formPrograma45').style.display = 'block';
            document.getElementById('respuesta45').innerHTML = '';
            contador45 = 0;
            numPositivos45 = 0;
            numTodos45 = 0;
        });
        if (numero === 0) {
            document.getElementById('formPrograma45').style.display = 'none';
            document.getElementById('respuesta45').innerHTML = 'Promedio de los numeros positivos: ' + (numPositivos45/contador45).toFixed(2) +
            '<br>Promedio de todos los numeros: ' + (numTodos45/contador45).toFixed(2) +
            '<br>Numeros introducidos: ' + contador45;
        }
    });
    /** Programa 46 = Programa que dado un numero por el usuario, imprima los numeros 
     * de la secuencia de Fibonacci hasta el numero introducido
     */
    let formPrograma46 = document.getElementById('formPrograma46');
    formPrograma46.addEventListener('submit', function(event) {
        event.preventDefault();
        let serie = '';
        let numero = parseInt(document.getElementById('numero46').value);
        document.getElementById('numero46').value = '';
        let num1 = 0;
        let num2 = 1;
        for (let i = 1; i <= numero; i++) {
            if (num1 === 0) {
                serie += num1 + ', ' + num2 + ', ';
            }
            let sig = num1 + num2;
            num1 = num2;
            num2 = sig;
            serie += sig + ', ';
        }
        document.getElementById('respuesta46').textContent = 'Secuencia de Fibonacci: ' + serie;
        document.getElementById('botonReiniciar46').addEventListener('click', function() {
            document.getElementById('respuesta46').innerHTML = '';
        });
    });
    /**Examen Programacion = Programa que pide mostrara una tabla de multiplicar, ingresando el numero,
     * el inicio de la tabla, el final de la tabla y el orden de la tabla
     */
    let formExamen = document.getElementById('formExamen');
    formExamen.addEventListener('submit', function(event){
        event.preventDefault();
        let num = document.getElementById('numeroExamen').value;
        let inicio =parseInt(document.getElementById('inicioExamen').value);
        let final = parseInt(document.getElementById('finalExamen').value);
        let orden = document.getElementById('ordenExamen').value;
        document.getElementById('numeroExamen').value = '';
        document.getElementById('finalExamen').value = '';
        document.getElementById('ordenExamen').value = '';
        document.getElementById('inicioExamen').value = '';

        let tabla = ''
        if (orden === '1'){
            if (final < inicio){
                let guardado = inicio;
                inicio = final;
                final = guardado;
            }
            for (let i = inicio; i <= final; i++){
                tabla +=  num +' * ' + i + ' = ' + (num * i) + '<br>';
            }
        }
        else if (orden === '2'){
            if (final < inicio){
                let guardado = inicio;
                inicio = final;
                final = guardado;
            }
            for (let i = final; i >= inicio; i--){
                tabla += num + ' * ' + i + ' = ' + (num * i) + '<br>';
              //  document.getElementById('respEx').innerHTML = 'Tabla de multiplicar <br>' + tabla;

            }
        }
        document.getElementById('respEx').innerHTML = 'Tabla de multiplicar <br>' + tabla;
        document.getElementById('botonReiniciarExamen').addEventListener('click', function(){
            document.getElementById('respEx').innerHTML = ''
        });
    });
});