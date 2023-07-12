///////login/////////
function login() {
    const usuario = document.getElementById("user")
    const pass = document.getElementById("pass")

    //validar campos

    if (usuario.value == "" || pass.value == "") {
        document.getElementById("mensaje1").innerHTML = "no se admite campos vacios"
      //  alert("no se admiten campos vacios")
        //swal("no se admiten campos vacios!");
        Swal.fire(
            'error?',
            'no se admite campos en blanco?',
            'question')


    } else if (usuario == "admin" && pass== "root") {
        document.getElementById("mensaje1").innerHTML = "acceso correcto"
      //  alert("acceso correcto")
        //swal("acceso correcto!", "bienvenido!"+ usuario.value, "success");
        Swal.fire(
            'acceso correcto?',
            'bienvenido?',
            'question')
    } else {
        document.getElementById("mensaje1").innerHTML = "credenciales incorrectas"
      //  alert("credenciales incorrectas")
        //swal("credencial incorrecta!", "verifique usuario y contraseña!"+ usuario.value, "warning");
        Swal.fire(
            'error?',
            'credenciales incorrectas?',
            'question')
    }
}
//////////calculadora/////////
function sumar() {
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)
    let suma;

    ///validar campos
    if (isNaN(num1) || isNaN(num2)) {
       // alert("no se admite campos en blanco")
        Swal.fire(
            'error?',
            'no se admite campos en blanco?',
            'question'
          )
    } else {
        suma = num1 + num2
       // alert("la suma es:" + suma)
       Swal.fire("la suma es:" + suma)
    }
}
//restar
function restar() {
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)
    let resta;
    //validar campos
    if (isNaN(num1) || isNaN(num2)) {
       // alert("no se admiten campos en blanco")
       Swal.fire(
        'error?',
        'no se admite campos en blanco?',
        'question')
    } else {
        resta = num1 - num2
        //alert("la resta es:" + resta)
        Swal.fire("la resta es:" + resta)
    }
}

////multiplicar///////
function multiplicar() {
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)
    let multiplica;
    // validar campos

    if (isNaN(num1) || isNaN(num2)) {
     //   alert("no se admiten campos en blanco")
     Swal.fire(
        'error?',
        'no se admite campos en blanco?',
        'question')

    } else {
        multiplica = num1 * num2
        //alert("la multiplicacion es:" + multiplica)
        Swal.fire("la multiplicacion es:" + multiplica)
    }

}
////dividir///////
function dividir() {
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)
    let divide;
    // validar campos

    if (isNaN(num1) || isNaN(num2)) {
       // alert("no se admiten campos en blanco")
        Swal.fire(
            'error?',
            'no se admite campos en blanco?',
            'question')
    } else {
        divide = num1 / num2
        //alert("la division es:" + divide)
        Swal.fire("la division es:" + divide)
    }
}

///////lista de tareas//////////
function agregartarea(){
    const tarea = document.getElementById("tarea").value

    ///validar cmpos//
    if (tarea == "") {
      //  alert("no se admiten campos en blanco")
        Swal.fire({
            icon: 'error',
            title: 'error...',
            text: 'no se admite campos en blanco!',
            footer: 'ingrese texto porfavor?</a>'
          })
    } else {
        let nuevaTarea = document.createElement("li")
        nuevaTarea.textContent=tarea

        let lista= document.getElementById("lista")
        lista.appendChild(nuevaTarea)
    }
}
