// Función ingreso de datos del usuario

function datosIngresados (e) {
    e.preventDefault();
    const nombreCompleto = document.getElementById("nombreCompleto").value;
    const id = document.getElementById("documento").value;
    const correo = document.getElementById("email").value;
    console.log(nombreCompleto)
    console.log(id)
    console.log(correo)
    bienvenidos("Bienvenido " + nombreCompleto + ". " + "¡Registración exitosa! Tu usuario es: " + id + ". Podrás ver tu contraseña asignada por defecto en tu correo electrónico. Es necesario que la cambies en un plazo de 24 hs. Luego, estarás listo para operar.")

    const user1 = new user(id, correo, "asd12345");
    console.log(user1);
    
    
    const listaUsuarios = [id, correo, nombreCompleto];
    listaUsuarios.push("Acceso por página web");
    console.log(listaUsuarios)


    const enJSON = JSON.stringify(user1);
    localStorage.setItem("Usuario registrado", enJSON)
}

const formularioUsuario = document.getElementById("formularioUsuario")
formularioUsuario.addEventListener("submit", datosIngresados)


function bienvenidos (acceso) {
    const registroUsuario = document.createElement("p")
    registroUsuario.textContent = acceso
    registroUsuario.classList.toggle("bienvenidos")
    const usuarios = document.getElementById("bienvenida")
    usuarios.appendChild(registroUsuario)
}


class user {
    constructor(id, mail, password) {
        this.usuario = id;
        this.correoElectronico = mail;
        this.contraseña = password;
    }
}


// Función consulta plazo fijo online

let tasa = 125 / 365 / 100;

function simularPF (e) {
    e.preventDefault();
    const capital = Number(document.getElementById("capital").value);
    const plazo = Number(document.getElementById("plazo").value);
    console.log(capital)
    console.log(plazo)
    console.log(new Date())


    if (capital*plazo*tasa >= 1000 && plazo > 30){
        realizarCalculo("El resultado de tu inversión sería $" + capital * plazo * tasa)
    } else {
        error("Error: El monto mínimo a invertir son $1000 y el plazo mínimo de inversión son 30 días.");
    }
}

function error (msj) {
    const datoIncorrecto = document.createElement("p")
    datoIncorrecto.textContent = msj
    datoIncorrecto.classList.toggle("error")
    const msjError = document.getElementById("plazoFijo")
    msjError.appendChild(datoIncorrecto)
}


const formularioPF = document.getElementById("formularioPF")
formularioPF.addEventListener("submit", simularPF)


function realizarCalculo (resultadoSimulacion) {
    const simulacionPF = document.createElement("p")
    simulacionPF.textContent = resultadoSimulacion
    simulacionPF.classList.toggle("calculos")
    const pf = document.getElementById("plazoFijo")
    pf.appendChild(simulacionPF)
}



// Función consulta otras alternativas de inversión


    const inversiones = document.getElementById("otrasInversiones");
    const res = document.getElementById("res")
    const btn = addEventListener("click", ()=>{
        switch(inversiones.value) {
            case "FCI":
                res.innerHTML =
                '<p class="opcInv">Invierte en un FCI con rendimientos del 1,37% diarios</p>'
                break;
            case "TP":
                res.innerHTML =
                '<p class="opcInv">Invertí en TP con rendimientos en dólares de un 8% anual </p>'
                break; 
            case "INV":
                res.innerHTML =
                '<p class="opcInv">Invertí en acciones, bonos y obligaciones negociables con rendimientos cercanos al 200% anual. Solo para perfiles de alto riesgo </p>'
                break;
        }

    })




