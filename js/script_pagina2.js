document.addEventListener('DOMContentLoaded', function() {
    // Programa 11 = programa que calcula el area de un triangulo en base a sus lados
    let formPrograma11 = document.getElementById('formPrograma11');
    formPrograma11.addEventListener('submit', function(event) {
        event.preventDefault();
        let lado1 = document.getElementById('Lado1').value;
        let lado2 = document.getElementById('Lado2').value;
        let lado3 = document.getElementById('Lado3').value;
        let s = (parseFloat(lado1) + parseFloat(lado2) + parseFloat(lado3)) / 2;
        let area = Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3));
        document.getElementById('area').textContent = 'El area del triangulo es: ' + area.toFixed(2);
    });
    // Programa 12 = Programa que calcula la distancia entre dos puntos (x1, y1) y (x2, y2)
    let formPrograma12 = document.getElementById('formPrograma12');
    formPrograma12.addEventListener('submit', function(event) {
        event.preventDefault();
        let x1 = document.getElementById('x1').value;
        let y1 = document.getElementById('y1').value;
        let x2 = document.getElementById('x2').value;
        let y2 = document.getElementById('y2').value;
        let distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        document.getElementById('distancia').textContent = 'La distancia entre los dos puntos es: ' + distancia.toFixed(2);
    });
    // Programa 13 = Programa que calcula el area y perimetro de un circulo
    let formPrograma13 = document.getElementById('formPrograma13');
    formPrograma13.addEventListener('submit', function(event) {
        event.preventDefault();
        let radio = document.getElementById('radioCirculo').value;
        let area = Math.PI * Math.pow(radio, 2);
        let perimetro = 2 * Math.PI * radio;
        document.getElementById('areaCirculo').textContent = 'El area del circulo es: ' + area.toFixed(2) + ' y su perimetro es: ' + perimetro.toFixed(2);
    });
    // Programa 14 = Programa que muestra si aprobaste si tu calificacion es mas de 7
    let formPrograma14 = document.getElementById('formPrograma14');
    formPrograma14.addEventListener('submit', function(event) {
        event.preventDefault();
        let calificacion = document.getElementById('calificacion').value;
        if (calificacion >= 8) {
            document.getElementById('aprobado').textContent = 'Aprobaste';
        } else {
            document.getElementById('aprobado').textContent = 'Reprobaste';
        }
    });
    // Programa 15 = Programa que aplica un aumento del 15% si su sueldo es menor a mil, si no imprima "No tienes aumento bro"
    // imprimir el sueldo con el aumento ya aplicado
    let formPrograma15 = document.getElementById('formPrograma15');
    formPrograma15.addEventListener('submit', function(event) {
        event.preventDefault();
        let sueldo = document.getElementById('sueldo').value;
        if (sueldo < 1000) {
            let aumento = sueldo * 1.15;
            document.getElementById('nuevoSueldo').textContent = 'Tu nuevo sueldo con el aumento es: ' + aumento.toFixed(2);
        } else {
            document.getElementById('nuevoSueldo').textContent = 'No tienes aumento bro';
        }
    });
    // Programa 16 = Programa que calcula la temperatura en base a los sonidos por minuto emitidos por un grillo
    let formPrograma16 = document.getElementById('formPrograma16');
    formPrograma16.addEventListener('submit', function(event) {
        event.preventDefault();
        let sonidos = document.getElementById('sonidos').value;
        let temperatura = (sonidos / 4) + 40;
        document.getElementById('temperatura').textContent = 'La temperatura es: ' + temperatura.toFixed(2);
    });
    // Programa 17 = Programa que comprueba si la expresion P^3 + Q^4 - 2 * P^2 < 680
    let formPrograma17 = document.getElementById('formPrograma17');
    formPrograma17.addEventListener('submit', function(event) {
        event.preventDefault();
        let p = document.getElementById('valorP').value;
        let q = document.getElementById('valorQ').value;
        let resultado = Math.pow(p, 3) + Math.pow(q, 4) - 2 * Math.pow(p, 2);
        if (resultado < 680) {
            document.getElementById('valor').textContent = 'La expresion es verdadera';
        } else {
            document.getElementById('valor').textContent = 'La expresion es falsa';
        }
    });
    // Programa 18 = Programa que aplica la formula general para resolver ecuaciones de segundo grado
    // ax^2 + bx + c = 0, primero comprobara si el resultado dentro de la raiz es positivo, si no, no se puede resolver
    let formPrograma18 = document.getElementById('formPrograma18');
    formPrograma18.addEventListener('submit', function(event) {
        event.preventDefault();
        let a = document.getElementById('valorA').value;
        let b = document.getElementById('valorB').value;
        let c = document.getElementById('valorC').value;
        let discriminante = Math.pow(b, 2) - (4 * a * c);

        if (discriminante < 0) {
            document.getElementById('respuesta').textContent = 'No se puede resolver';
        } else {
            let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
            let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
            document.getElementById('respuesta').textContent = 'x1 = ' + x1.toFixed(2) + ' x2 = ' + x2.toFixed(2);

        }
    });
    // Programa 19 = Programa que realiza una division entre dos numeros, si el divisor es 0, no se puede realizar la division
    let formPrograma19 = document.getElementById('formPrograma19');
    formPrograma19.addEventListener('submit', function(event) {
        event.preventDefault();
        let dividendo = document.getElementById('dividendo').value;
        let divisor = document.getElementById('divisor').value;
        if (divisor == 0) {
            document.getElementById('resultado').textContent = 'No se puede dividir entre 0';
        } else {
            let resultado = dividendo / divisor;
            document.getElementById('resultado').textContent = 'El resultado de la division es: ' + resultado.toFixed(2);
        }
    });





});