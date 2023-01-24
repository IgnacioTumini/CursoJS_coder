// CALCULO INTERES //
function calcular_interes(monto, cuotas) {
  let interes;
  //const interesTresCuotas = parseFloat(0.15);
  //const interesSeisCuotas = parseFloat(0.3);
  //const interesDoceCuotas = parseFloat(0.6);

  if (cuotas == 3) {
    interes = monto * 0.15;

    return interes;
  } else if (cuotas == 6) {
    interes = monto * 0.3;
    return interes;
  } else if (cuotas == 12) {
    interes = monto * 0.6;
    return interes;
  } else return 0;
}
// FIN CALCULO //
// CALCULO TOTAL A PAGAR //

// OBJETO PRESTAMO //

class Prestamo {
  constructor(cliente, monto, cuotas, monto_final, id) {
    this.cliente = cliente;
    this.monto = monto;
    this.cuotas = cuotas;
    this.monto_final = monto_final;
    this.id = id;
  }
  get_datos() {
    console.log("<----------------->");
    console.log("Cliente: ", this.cliente);
    console.log("Prestamo pedido: $", this.monto);
    console.log("Cantidad de cuotas a pagar: ", this.cuotas);
    console.log("Prestamo a devolver: $", this.monto_final);
    console.log("Id del prestamo: ", this.id);
    console.log("");
  }
}
// FIN OBJETO //

// DECLARO LISTA DE OBJETOS //
let lista_prestamos = [];

// INTERACCION CON EL CLIENTE //
let fin;
let id = 1;
alert("Bienvenido a TumiPresta");
while (fin != 2) {
  let cliente = prompt("Ingrese su nombre y apellido");
  let monto = parseFloat(
    prompt("Ingrese el prestamo a solicitar entre $5000 y $60000")
  );

  while (monto > 60000 || monto < 5000) {
    alert(
      "Prestamo fuera de terminos por favor ingrese dentro de los solicitado"
    );
    monto = parseFloat(
      prompt("Ingrese el prestamo a solicitar entre $5000 y $60000")
    );
  }
  let cuotas = parseInt(prompt("ingrese las cuotas, 3,6 o 12"));
  while (cuotas != 3 && cuotas != 6 && cuotas != 12) {
    alert(
      "Cuotas fuera de terminos por favor ingrese dentro de los solicitado"
    );
    cuotas = parseInt(prompt("ingrese las cuotas, 3,6 o 12"));
  }
  monto_final = monto + calcular_interes(monto, cuotas);

  alert(
    "Su prestamo a pagar seria $" +
      (monto + calcular_interes(monto, cuotas)) +
      ", en cuotas de $" +
      (monto + calcular_interes(monto, cuotas)) / cuotas
  );
  fin = parseInt(
    prompt("si desea otro prestamos ponga 1, si desea salir ponga 2")
  );

  let nuevo_prestamo = new Prestamo(cliente, monto, cuotas, monto_final, id);
  lista_prestamos.push(nuevo_prestamo);
  id += 1;
}

alert("Gracias por confiar en nosotros!");
// FIN INTERACCION //

// INICIO RENDER DE PRESTAMOS //
for (let nuevo_prestamo of lista_prestamos) {
  nuevo_prestamo.get_datos();
}
// FIN RENDER //

// busqueda de prestamos //

function buscar_id(Prestamo) {
  return Prestamo.id == busqueda_prestamo;
}

fin = parseInt(prompt("Para buscar algun prestamo ingrese 1, sino 2"));
while (fin != 2) {
  busqueda_prestamo = parseInt(prompt("Ingrese el id del prestamo"));
  let resultado_busqueda = lista_prestamos.find(buscar_id);
  if (resultado_busqueda != undefined) {
    console.log("el prestamo buscado se encontro", resultado_busqueda);
  } else {
    alert("no se encontro el prestamo");
  }

  fin = parseInt(prompt("Para buscar algun prestamo mas ingrese 1, sino 2"));
}

//let resultado_busqueda = lista_prestamos.find(buscar_id);
//console.log("el prestamo buscado se encontro", resultado_busqueda);
