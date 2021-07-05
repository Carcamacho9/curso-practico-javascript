function calcularPrecioConDescuento( precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    var inputCupon = document.getElementById("InputCupon").value;
    if(inputCupon == ""){
        const inputPrecio = Number(document.getElementById("InputPrecio").value);
        const inputDescuento = Number(document.getElementById("InputDescuento").value);
        
        if(inputDescuento > 50){
            alert("Tenemos descuentos MUY buenos, pero tampoco tanto 😅")
        }else{
            const precioConDescuento = calcularPrecioConDescuento(inputPrecio, inputDescuento);

            const resultadoPrecio = document.getElementById("Resultado-Precio");
            resultadoPrecio.innerHTML = "<br>"
            resultadoPrecio.innerHTML += "El precio ya no es de <del>$" + inputPrecio + "</del><br>";
            resultadoPrecio.innerHTML += "<font size=6> Ahora con descuento es de $" + precioConDescuento + "</font><br>";
        }
    }else{
        const inputPrecio = Number(document.getElementById("InputPrecio").value);
        const inputDescuento = Number(document.getElementById("InputDescuento").value);
        const cupones = [
            {
                name: "No tengo un cupón",
                descuento: 5,
            },
            {
                name: "Quiero un cupón",
                descuento: 10,
            },
            {
                name: "Quiero dos cupones",
                descuento: 15,
            },
            {
                name: "Es la mejor tienda",
                descuento: 25,
            },
        ];
        if(inputCupon == cupones[0].name){
            const descuento = cupones[0].descuento + inputDescuento;
            calcularPrecioConDescuento(inputPrecio, descuento);
            const precioConDescuento = calcularPrecioConDescuento(inputPrecio, descuento);

            const resultadoPrecio = document.getElementById("Resultado-Precio");
            resultadoPrecio.innerHTML = "<br>"
            resultadoPrecio.innerHTML += "El precio ya no es de <del>$" + inputPrecio + "</del><br>";
            resultadoPrecio.innerHTML += "<font size=6> Ahora con descuento es de $" + precioConDescuento + "</font><br>";
        }else if(inputCupon == cupones[1].name){
            const descuento = cupones[1].descuento + inputDescuento;
            calcularPrecioConDescuento(inputPrecio, descuento);
            const precioConDescuento = calcularPrecioConDescuento(inputPrecio, descuento);

            const resultadoPrecio = document.getElementById("Resultado-Precio");
            resultadoPrecio.innerHTML = "<br>"
            resultadoPrecio.innerHTML += "El precio ya no es de <del>$" + inputPrecio + "</del><br>";
            resultadoPrecio.innerHTML += "<font size=6> Ahora con descuento es de $" + precioConDescuento + "</font><br>";
        }else if(inputCupon == cupones[2].name){
            const descuento = cupones[2].descuento + inputDescuento;
            calcularPrecioConDescuento(inputPrecio, descuento);
            const precioConDescuento = calcularPrecioConDescuento(inputPrecio,descuento);

            const resultadoPrecio = document.getElementById("Resultado-Precio");
            resultadoPrecio.innerHTML = "<br>"
            resultadoPrecio.innerHTML += "El precio ya no es de <del>$" + inputPrecio + "</del><br>";
            resultadoPrecio.innerHTML += "<font size=6> Ahora con descuento es de $" + precioConDescuento + "</font><br>";
        }else if(inputCupon == cupones[3].name){
            const descuento = cupones[3].descuento + inputDescuento;
            calcularPrecioConDescuento(inputPrecio, descuento);
            const precioConDescuento = calcularPrecioConDescuento(inputPrecio, descuento);

            const resultadoPrecio = document.getElementById("Resultado-Precio");
            resultadoPrecio.innerHTML = "<br>"
            resultadoPrecio.innerHTML += "El precio ya no es de <del>$" + inputPrecio + "</del><br>";
            resultadoPrecio.innerHTML += "<font size=6> Ahora con descuento es de $" + precioConDescuento + "</font><br>";
        }else{
            alert("El cupón '" + inputCupon + "' no es válido o no existe");
        }
    }
}

function quieroUnCupon(){
    const resultadoPrecio = document.getElementById("Resultado-Precio");
    resultadoPrecio.innerHTML = "¿Quieres un cupón? Sólo necesitas escribirlo, si no lo tienes escríbelo, si quieres dos cupones también escríbelo, si te parecemos la mejor tienda no olvides en decírnoslo."
}