//definicion del objeto
contacto = {
  cedula,
  nombre: "",
  apellido: "",
  email:"",
  telefono: "",
  ubicaciones: []
};
//array de obejtos que simula la base de datos
baseDatos = [];
//array que guarda los campos de texto de direccion y ciudad
ubicacion = [];
//contador de campos llenos de formulario
/* contador = 0; */

var tablaTitulos = document.getElementById("tabla");
// se agrega un eventlistener en la tabla para identificar en que boton se hace click
tablaTitulos.addEventListener("click", verificarClick);

function verificarClick(e) { 
    //console.log("este es el evento: "+e.target.parentNode.parentNode.rowIndex);
    var table = document.getElementById("tabla");
    var index = e.target.parentNode.parentNode.rowIndex;
    console.log("Este es el indice de la fila "+index)
    var row = table.rows[index]; // fila a eliminar
    var cell = row.cells[0]; // columna con el nombre
    var value = cell.innerHTML; // valor de la celda
    console.log("Contacto a eliminar: " + value);
    document.getElementById("buscar").value = value;
    //baseDatos.splice(index, 1);//Se elimina el objeto del array
    eliminar(); // se llama a eliminar para quitar el objeto
    tabla.deleteRow(index);//se elimina la fila a la que se le dio click
    
}
function capturar() { 
    //console.log("CAPTURADO");
    //Definicion del objeto contacto
    function Contacto(cedula,nombre,apellido,email,telefono,ubicacion) { 
        this.cedula = cedula;
        this.nombre = nombre; 
        this.apellido = apellido;
        this.email=email; 
        this.telefono=telefono;
        this.ubicaciones = ubicacion;
    }
    //capturando la informacion del formulario
    let cedulaCapturar = document.getElementById("cedula").value;
    let nombreCapturar = document.getElementById("nombre").value;
    let apellidoCapturar = document.getElementById("apellido").value;
    let emailCapturar = document.getElementById("correo").value;
    let telefonoCapturar = document.getElementById("phone").value;
    capturarUbicacion();
    // clase constructora del objeto contacto    
    nuevoContacto = new Contacto(cedulaCapturar,nombreCapturar,apellidoCapturar, emailCapturar, telefonoCapturar,ubicacion);
    console.log("Nuevo contacto"+ nuevoContacto);
    baseDatos.push(nuevoContacto);//crea el nuevo objeto en el array
    agregar();
   /*  contador = 0;
    habilitarBotones(); */
}
function agregarUbicacion() { 
    capturarUbicacion();
    var searchData = document.getElementById("cedula").value;//trae el contacto a buscar
  //busca el objeto con concidencia por Cedula
    var item = baseDatos.findIndex(elemento => elemento.cedula === searchData);
    if (item !== -1) { 
        console.log("esta es la ubicacion "+baseDatos[item].ubicaciones);
        baseDatos[item].ubicaciones.unshift(ubicacion);
        console.log("esta es la ubicacion actualizada "+baseDatos[item].ubicaciones);
        agregar();
        alert("pausa");
    } 
    
}
function capturarUbicacion() {
    let direccion = document.getElementById("direccion").value;
    let ciudad = document.getElementById("ciudad").value;
    ubicacion = [direccion, ciudad];
    console.log(ubicacion);
}
//agrega objeto a la tabla
function agregar() { 
    console.log("este es el nuevo contacto para agregar: "+nuevoContacto);
    console.log(baseDatos);
    //crea una nueva fila en la tabla con la informacion del objeto
    document.getElementById("tabla").innerHTML +=
        '<tbody><tr><td>' + nuevoContacto.cedula +
        '</td><td>' + nuevoContacto.nombre +
        '</td><td>'+ nuevoContacto.apellido +
        '</td><td>' + nuevoContacto.email +
        '</td><td>' + nuevoContacto.telefono +
        '</td><td>' + nuevoContacto.ubicaciones +
        '</td><td><i class="fa-sharp fa-solid fa-eraser IconoPeque" onclick="eliminar();"></i></td></ ></tbody > ';
    
}
//funcion que elimina el objeto del array
function eliminar() { 
    var searchData = document.getElementById("buscar").value;//trae el contacto a eliminar
    //busca el objeto con concidencia por nombre
    var item = baseDatos.findIndex(elemento => elemento.cedula === searchData);
    //console.log("registro encontrado " + item);
    if (item !== -1) {
        //console.log("Entro al si")
        baseDatos.splice(item, 1);
    }
    
    console.log(baseDatos);
}
function rellenarFormulario() { 
    var searchData = document.getElementById("cedula").value;//trae el contacto a buscar
  //busca el objeto con concidencia por Cedula
    var item = baseDatos.findIndex(elemento => elemento.cedula === searchData);
    if (item !== -1) {
        document.getElementById("nombre").value = baseDatos[item].nombre;
        document.getElementById("apellido").value = baseDatos[item].apellido;
        document.getElementById("correo").value = baseDatos[item].email;
        document.getElementById("phone").value = baseDatos[item].telefono;
        /* contador = 6;
        document.getElementById("ubicacion").disabled = false;
        document.getElementById("delete").disabled = false;
        habilitarBotones(); */
    }
    else {
        document.getElementById("ubicacion").disabled = true;
        document.getElementById("delete").disabled = true;
    }
}
function actualizarContacto() {
  var searchData = document.getElementById("cedula").value;//trae el contacto a buscar
  //busca el objeto con concidencia por Cedula
    var item = baseDatos.findIndex(elemento => elemento.cedula === searchData);
    if (item !== -1) {

        // Actualizar los campos del contacto
        baseDatos[item].nombre = document.getElementById("nombre").value;
        baseDatos[item].apellido = document.getElementById("apellido").value;
        baseDatos[item].email = document.getElementById("correo").value;
        baseDatos[item].telefono = document.getElementById("phone").value;
        // Retornar un mensaje de éxito
        alert("Contacto actualizado exitosamente.");
        /* contador = 0;
        //habilitarBotones(); */
    }
}
/* function habilitarBotones() { 
    alert(contador);
    if (contador >= 5) {
        document.getElementById("agregar").disabled = false;
        document.getElementById("actualizar").disabled = false;
    }
    else { 
        document.getElementById("agregar").disabled = true;
        document.getElementById("agregar").add('IconoGrande-deshabilitado');
        document.getElementById("actualizar").disabled = true;
        document.getElementById("actualizar").add('IconoGrande-deshabilitado');
        
    }
   
}
function contarCampos() { 
    contador += 1;
}
 */
