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

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("apellido", apellido);

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
    nuevo_prestamo.get_datos();
  }
  // FIN RENDER //
  let contenedor_muestra_usuario = document.querySelector(
    ".lista_del_prestamo"
  );
  let muestra_usuario = `<div class="input-group flex-nowrap mb-3">
   <span class="input-group-text" id="addon-wrapping4"
     >Total por mes</span
   >
   <input
     disabled
     type="number"
     class="form-control"
     id="exampleInputPassword10"
   />
 </div>
 <div class="input-group flex-nowrap mb-3">
   <span class="input-group-text" id="addon-wrapping3"
     >Pago total</span
   >
   <input
     disabled
     type="number"
     class="form-control"
     id="exampleInputPassword11"
   />
 </div>
 <div class="input-group flex-nowrap mb-3">
   <span class="input-group-text" id="addon-wrapping2"
     >Total de intereses</span
   >
   <input
     disabled
     type="number"
     class="form-control"
     id="exampleInputPassword12"
   />
 </div> 
 <div class="w-100 d-flex justify-content-center p-3">
 <button type="button" onclick= "enviar_prestamo()" class="btn btn-light hover_boton">¡HAZ CLICK Y OBTENÉ TU PRÉSTAMO!</button>
 </div>`;
  contenedor_muestra_usuario.innerHTML = muestra_usuario;
  let input_cuota = document.getElementById("exampleInputPassword10");
  let inpunt_total = document.getElementById("exampleInputPassword11");
  let input_interes = document.getElementById("exampleInputPassword12");

  input_cuota.value = monto_final / cuotas;
  inpunt_total.value = monto_final;
  input_interes.value = calcular_interes(monto, cuotas);
}

function enviar_prestamo() {
  let local_nombre = localStorage.getItem("nombre");
  let local_apellido = localStorage.getItem("apellido");
  Swal.fire({
    title: "¡Hola," + local_nombre + " " + local_apellido + "!",
    text: "Tu préstamo esta listo, te estaremos enviando un mail a tu correo.",
    icon: "success",
    timer: 4000,
  });
}
let contenedor_muestra_clima = document.querySelector(".div_clima");

let latitud;
let longitud;

function mostrar_posicion(posicion) {
  latitud = posicion.coords.latitude;
  longitud = posicion.coords.longitude;
}

navigator.geolocation.getCurrentPosition(mostrar_posicion);

let key = "a8aa41cb98e4703cfe8d3a18109b09aa";

fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=" +
    latitud +
    "&lon=" +
    longitud +
    "&appid=" +
    key
)
  .then((respose) => respose.json())
  .then((data) => {
    contenedor_muestra_clima.innerHTML = `<p class="letra_footer clima">Temp. hoy :${data.main.temp}</p>`;
  });

//function buscar_id(Prestamo) {
//  return Prestamo.id == busqueda_prestamo;
//}

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
//{contenedor_muestra_clima.innerHTML = `<p class="letra_footer clima">Temp. hoy : ${data.main.temp}</p>`;}
