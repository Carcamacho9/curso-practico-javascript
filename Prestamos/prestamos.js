
function calcularPrestamo(){
    const dinero = Number(document.getElementById("dinero").value);
    const tasaInteres = Number(document.getElementById("interes").value);
    const plazo = Number(document.getElementById("plazo").value);
    if(dinero == " " && tasaInteres == " " && plazo == " "){
        alert("Diligencia los campos necesarios: \n ¿Cuánto necesitas?\n ¿A qué plazo? \n ¿A qué interés?");
    }else if(dinero == " "){
        alert("Diligencia los campos necesarios: \n ¿Cuánto necesitas?");
    }else if(plazo == " "){
        alert("Diligencia los campos necesarios:\n ¿A qué plazo?");
    }else if(tasaInteres == " "){
        alert("Diligencia los campos necesarios:\n ¿A qué interés?");
    }else{
        const porcenInt = calcularInteres(tasaInteres, dinero);
        const cuotas = calcularCuotas(dinero, plazo, porcenInt);
        const resultado = document.getElementById("resultado");

        resultado.innerHTML = "<strong>Tu cuota mensual sería de: </strong>" + formatoMoneda("es-CO", "COP", 0, cuotas) + "<br>";
        resultado.innerHTML += "<strong>Número de pagos: </strong>" +  plazo + "<br>";
        resultado.innerHTML += "<strong>Interés a pagar (mensual): </strong>" + formatoMoneda("es-CO", "COP", 0, porcenInt) + "<br>";
        resultado.innerHTML += "<strong>Valor del préstamo: </strong>" + formatoMoneda("es-CO", "COP", 0, dinero) + "<br>";
    }
};
//Aquí convertimos el valor ingresado en % a número decimal para operar con el dinero para obtener el valor de los intereses
function calcularInteres(tasa, dinero){
    const porcentaje = tasa / 100;
    const valor = dinero * porcentaje; 
    return valor;
}
//Aquí hacemos la operación, dividir el dinero por el tiempo y sumar la tasa por mes
function calcularCuotas(dinero, tiempo, tasa){
    const valor = dinero / tiempo;
    const cuota = parseInt(valor + tasa);
    return cuota;
}
//Agregamos formato de moneda
function formatoMoneda (locales, moneda, decimales, numero) {
    var formato = new Intl.NumberFormat(locales, {
      style: 'currency',
      currency: moneda,
      minimumFractionDigits: decimales
    }).format(numero);
    return formato;
  }