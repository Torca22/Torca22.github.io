const nombre = document.getElementById("nombreAlumno")
const apellido = document.getElementById("apellidoAlumno")
const edad = document.getElementById("edad")
const dni = document.getElementById("dni")
const carreras = document.getElementById("carreras_de_grado")
const email = document.getElementById("email")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    
    if(nombre.value.length <3){
       warnings += `- El nombre no es valido <br>`
       entrar = true
    }
    if(apellido.value.length === 0){
        warnings += `- El apellido no es valido <br>`
        entrar = true
     }
     if(dni.value.length === 8){
     }
     else{
        warnings += `- El DNI no es valido <br>`
        entrar = true
     }

    if(!regexEmail.test(email.value)){
        warnings += `- El email no es valido <br>`
        entrar = true
    }
    if (carreras_de_grado.selectedIndex === 0){
        warnings += `- Seleccione una carrera <br>`
        entrar = true
    }
    if(consulta.value.length <3){
        warnings += `- No olvide escribir su consulta <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }

    
})

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  function togNav(){
    var element = document.getElementById("mySidebar");
    if (element.style.width == "250px") {
        element.style.width = "0";
    } else{
        element.style.width = "250px"
    }

}