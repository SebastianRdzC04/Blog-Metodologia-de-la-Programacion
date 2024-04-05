document.addEventListener('DOMContentLoaded', function() {
    var formPrograma1 = document.getElementById('formPrograma1');
    formPrograma1.addEventListener('submit', function(event) {
        event.preventDefault();
        var valorA = parseFloat(document.getElementById('valorA').value);
        var valorB = parseFloat(document.getElementById('valorB').value);

        var resultado = Math.pow((valorA + valorB), 2) / 3;

        document.getElementById('respuestaPrograma1').textContent = 'El resultado es: ' + resultado;
    });

    var formPrograma2 = document.getElementById('formPrograma2');
    formPrograma2.addEventListener('submit', function(event) {
        event.preventDefault();
        var cali1 = document.getElementById('Cali1').value;
        var cali2 = document.getElementById('Cali2').value;
        var cali3 = document.getElementById('Cali3').value;
        var cali4 = document.getElementById('Cali4').value;
        var cali5 = document.getElementById('Cali5').value;

        var resultado = (parseFloat(cali1) + parseFloat(cali2) + parseFloat(cali3) + 
                        parseFloat(cali4) + parseFloat(cali5)) / 5;
        
        document.getElementById('respuestaPrograma2').textContent = 'El promedio es: ' + resultado;
    });
    var formPrograma3 = document.getElementById('formPrograma3');
    formPrograma3.addEventListener('submit', function(event){
        event.preventDefault();
        var num = document.getElementById('numero').value;
        resultado = Math.pow(num, 2);
        var resultado2 = Math.pow(num, 3);

        document.getElementById('respuestaPrograma3').textContent = 'El cuadrado de ' + num + 
        ' es: ' + resultado + ' y su cubo es: ' + resultado2;

    });
    var formPrograma4 = document.getElementById('formPrograma4');
    formPrograma4.addEventListener('submit', function(event){
        event.preventDefault();
        var precio = document.getElementById('precioProducto').value;
        var monto = document.getElementById('montoEntregado').value;
        resultado = monto - precio;
        document.getElementById('respuestaPrograma4').textContent = 'El cambio a entregar es: ' + resultado;
    });
    var formPrograma5 = document.getElementById('formPrograma5');
    formPrograma5.addEventListener('submit', function(event){
        event.preventDefault();
        var base = parseFloat(document.getElementById('base').value);
        var altura = parseFloat(document.getElementById('altura').value);
        var area = base * altura;
        var perimetro = 2 * (base + altura);
        document.getElementById('respuestaPrograma5').textContent = 'El area del rectangulo es: ' + area + 
        ' y su perimetro es: ' + perimetro;
        var znr = document.getElementById('znr');
        znr.style.height = altura + 'cm';
        znr.style.width = base + 'cm';
        znr.style.display = 'block';

    });


});
