function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado;
}  


function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 


function diametroCirculo(radio){
    return radio * 2;
} 

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

function areaCirculo(radio){
    return (radio * radio) * PI;
} 

var resultadoCuadrado = document.getElementById("Resultado-cuadrado");

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    resultadoCuadrado.innerHTML = "<font size=4> El perímetro de tu cuadrado es: </font> </br>";
    resultadoCuadrado.innerHTML += "<font size=6> " + perimetro + " centímetros";
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    resultadoCuadrado.innerHTML = "<font size=4> El área de tu cuadrado es: </font> </br>";
    resultadoCuadrado.innerHTML += "<font size=6> " + area + " centímetros²";
}

var resultadoTriangulo = document.getElementById("Resultado-triangulo");

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("InputTriangulo1");
    const value1 = parseInt(lado1.value);
    const lado2 = document.getElementById("InputTriangulo2");
    const value2 = parseInt(lado2.value);
    const base = document.getElementById("InputTriangulo3");
    const value3 = parseInt(base.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    resultadoTriangulo.innerHTML = "<font size=4> El perímetro de tu triángulo es: </font> </br>";
    resultadoTriangulo.innerHTML += "<font size=6> " + perimetro + " centímetros";
}

function calcularAreaTriangulo(){
    const altura = document.getElementById("InputTriangulo4");
    const value1 = parseInt(altura.value);
    const base = document.getElementById("InputTriangulo3");
    const value2 = parseInt(base.value);

    const area = areaTriangulo(value2, value1);
    resultadoTriangulo.innerHTML = "<font size=4> El área de tu triángulo es: </font> </br>";
    resultadoTriangulo.innerHTML += "<font size=6> " + area + " centímetros²";
}

var resultadoCirculo = document.getElementById("Resultado-circulo");

function calcularPerimetroCirculo(){
    const radio = document.getElementById("InputCirculo");
    const value = radio.value;

    const perimetro = perimetroCirculo(value);
    resultadoCirculo.innerHTML = "<font size=4> El perímetro de tu círculo es: </font> </br>";
    resultadoCirculo.innerHTML += "<font size=6> " + perimetro + " centímetros";
}


function calcularAreaCirculo(){
    const radio = document.getElementById("InputCirculo");
    const value = radio.value;

    const area = areaCirculo(value);
    resultadoCirculo.innerHTML = "<font size=4> El área de tu círculo es: </font> </br>";
    resultadoCirculo.innerHTML += "<font size=6> " + area + " centímetros²";
}