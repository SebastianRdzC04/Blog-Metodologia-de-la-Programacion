document.addEventListener('DOMContentLoaded', function() {
    // Programa 21 = Programa que imprime si un alumno aprobo si su callificacion es 8 o mas
    let formPrograma21 = document.getElementById('formPrograma21');
    formPrograma21.addEventListener('submit', function(event) {
        event.preventDefault();
        let calificacion = document.getElementById('calificacion').value;
        if (calificacion >= 8) {
            document.getElementById('estado').textContent = 'Aprobado';
        } else {
            document.getElementById('estado').textContent = 'Reprobado';
        }
    });
    // Programa 22 = Programa que aplica un aumento del 15% al sueldo de un trabajador en caso de ser inferior a 1000,
    // en caso contrario se le aplica un aumento del 12%
    let formPrograma22 = document.getElementById('formPrograma22');
    formPrograma22.addEventListener('submit', function(event) {
        event.preventDefault();
        let sueldo = document.getElementById('sueldo').value;
        if (sueldo < 1000) {
            sueldo = sueldo * 1.15;
        } else {
            sueldo = sueldo * 1.12;
        }
        document.getElementById('nuevoSueldo').textContent = 'El sueldo final es: $' + sueldo.toFixed(2);
    });
    // Programa 23 = Programa que calcula la temperatura en base a los sonidos por minuto de un grillo
    let formPrograma23 = document.getElementById('formPrograma23');
    formPrograma23.addEventListener('submit', function(event) {
        event.preventDefault();
        let sonidos = document.getElementById('sonidos').value;
        let temp = (sonidos / 4) + 40;
        document.getElementById('temperatura').textContent = 'La temperatura es: ' + temp.toFixed(2) + '°C';
    });
    // Programa 24 = Programa que calcula el promedio de 5 calificaciones y si el promedio es mayor a 8 imprime aprobado
    let formPrograma24 = document.getElementById('formPrograma24');
    formPrograma24.addEventListener('submit', function(event) {
        event.preventDefault();
        let unidad1 = parseFloat(document.getElementById('unidad1').value);
        let unidad2 = parseFloat(document.getElementById('unidad2').value);
        let unidad3 = parseFloat(document.getElementById('unidad3').value);
        let unidad4 = parseFloat(document.getElementById('unidad4').value);
        let unidad5 = parseFloat(document.getElementById('unidad5').value);
        let promedio = (unidad1 + unidad2 + unidad3 + unidad4 + unidad5) / 5;
        if (promedio >= 8) {
            console.log('Aprobado');
            document.getElementById('estadoS').textContent = 'Aprobado';
        } else {
            console.log('Reprobado');
            document.getElementById('estadoS').textContent = 'Reprobado';
        }
    });
    // Programa 25 = Programa que determina si un numero es positivo o negativo
    let formPrograma25 = document.getElementById('formPrograma25');
    formPrograma25.addEventListener('submit', function(event) {
        event.preventDefault();
        let numero = document.getElementById('numero').value;
        if (numero > 0) {
            document.getElementById('estadoN').textContent = 'Positivo';
        } else {
            document.getElementById('estadoN').textContent = 'Negativo';
        }
    });
    /**
     * Programa 26 = Programa que efectua descuentos a productos en base a su precio
     * Si el monto es menor a $500 no hay descuento
     * Si el monto es mayor a $500 y menor a $1000 se aplica un descuento del 5%
     * Si el monto es mayor a $1000 y menor a $7000 se aplica un descuento del 11%
     * Si el monto es mayor a $7000 y menor a $15000 se aplica un descuento del 18%
     * Si el monto es mayor a $15000 se aplica un descuento del 25%
     */
    let formPrograma26 = document.getElementById('formPrograma26');
    formPrograma26.addEventListener('submit', function(event) {
        event.preventDefault();
        let monto = document.getElementById('monto').value;
        if (monto < 500) {
            document.getElementById('montoFinal').textContent = 'No hay descuento';
        } else if (monto >= 500 && monto < 1000) {
            monto = monto * 0.95;
            document.getElementById('montoFinal').textContent = 'El precio con descuento es: $' + monto.toFixed(2);
        } else if (monto >= 1000 && monto < 7000) {
            monto = monto * 0.89;
            document.getElementById('montoFinal').textContent = 'El precio con descuento es: $' + monto.toFixed(2);
        } else if (monto >= 7000 && monto < 15000) {
            monto = monto * 0.82;
            document.getElementById('montoFinal').textContent = 'El precio con descuento es: $' + monto.toFixed(2);
        } else {
            monto = monto * 0.75;
            document.getElementById('montoFinal').textContent = 'El precio con descuento es: $' + monto.toFixed(2);
        }
    }); 
    /*Programa que calcula un impuesto, los primeros 20 pesos no causan impuestos, los siguientes 20 pesos
    tienen el 30% de impuesto y el resto 40% de impuesto, pero si el costo del producto es mayor a $500,
    se hace el 50%*/
    let formPrograma27 = document.getElementById('formPrograma27');
    formPrograma27.addEventListener('submit', function(event) {
        event.preventDefault();
        let costo = document.getElementById('precio').value;
        let impuesto = 0;
        if (costo <= 20) {
            impuesto = 0;
        } else if (costo > 20 && costo <= 40) {
            impuesto = costo * 0.3;
        } else if (costo > 40 && costo <= 500) {
            impuesto = costo * 0.4;
        } else {
            impuesto = costo * 0.5;
        }
        document.getElementById('impuesto').textContent = 'El impuesto es: $' + impuesto.toFixed(2);
    });
    // Programa 28 = Programa que calcula si un numero es par o impar
    let formPrograma28 = document.getElementById('formPrograma28');
    formPrograma28.addEventListener('submit', function(event) {
        event.preventDefault();
        let numero = document.getElementById('numeroP').value;
        console.log(numero);
        console.log(numero % 2);
        if (numero % 2 == 0) {
            document.getElementById('estadoP').textContent = 'Par';
        } else {
            document.getElementById('estadoP').textContent = 'Impar';
        }
    });

});