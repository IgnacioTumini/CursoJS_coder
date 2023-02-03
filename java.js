// CALCULO INTERES //
function calcular_interes(monto, cuotas) {
  let interes;

  if (cuotas == 3) {
    interes = monto * 0.15;

    return interes;
  } else if (cuotas == 6) {
    interes = monto * 0.3;
    return interes;
  } else if (cuotas == 12) {
    interes = monto * 0.6;
    return interes;
  } else if (cuotas == 18) {
    interes = monto * 1.2;
    return interes;
  } else if (cuotas == 24) {
    interes = monto * 2.4;
    return interes;
  } else return 0;
}
// FIN CALCULO //

// OBJETO PRESTAMO //

class Prestamo {
  constructor(nombre, apellido, mail, monto, cuotas, monto_final, id) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
    this.monto = monto;
    this.cuotas = cuotas;
    this.monto_final = monto_final;
    this.id = id;
  }
  get_datos() {
    console.log("<----------------->");
    console.log("Nombre: ", this.nombre);
    console.log("Apellido: ", this.apellido);
    console.log("Mail: ", this.mail);
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

let id = 1;

function toma_datos() {
  let nombre = document.getElementById("exampleInputPassword1").value;
  let apellido = document.getElementById("exampleInputPassword6").value;
  let mail = document.getElementById("exampleInputEmail1").value;
  let monto = parseInt(document.getElementById("exampleInputPassword4").value);
  let cuotas = parseInt(document.getElementById("select_cuotas").value);

  monto_final = monto + calcular_interes(monto, cuotas);

  let nuevo_prestamo = new Prestamo(
    nombre,
    apellido,
    mail,
    monto,
    cuotas,
    monto_final,
    id
  );
  lista_prestamos.push(nuevo_prestamo);
  id += 1;

  // INICIO RENDER DE PRESTAMOS //

  for (let nuevo_prestamo of lista_prestamos) {
    console.clear;
    nuevo_prestamo.get_datos();
  }
  // FIN RENDER //
}
function buscar_id(Prestamo) {
  return Prestamo.id == busqueda_prestamo;
}

//fin = parseInt(prompt("Para buscar algun prestamo ingrese 1, sino 2"));
//while (fin != 2) {
//  busqueda_prestamo = parseInt(prompt("Ingrese el id del prestamo"));
//  let resultado_busqueda = lista_prestamos.find(buscar_id);
//  if (resultado_busqueda != undefined) {
//    console.log("el prestamo buscado se encontro", resultado_busqueda);
//  } else {
//alert("no se encontro el prestamo");
//}

//  fin = parseInt(prompt("Para buscar algun prestamo mas ingrese 1, sino 2"));

//let resultado_busqueda = lista_prestamos.find(buscar_id);
//console.log("el prestamo buscado se encontro", resultado_busqueda);
