// VARIABLES

let suma = 0
let sum = 0
let aprobados = 0
let reprobados = 0
let cant
let cant2
let cant3
let cant4
let nota
let nota2
let alumnos = []
let eleccion
let carreras
let materias
let profe
let prom
let prom2
let switch1
let switch2
let switch3
let clicked = 0
let clicked2 = 0
let numeros = "0123456789"
const assist = 0.8

// FIN VARIABLES

// FUNCIONES

function Aprobados(nota){
    if(nota>6) {
        aprobados++
    } else {
        reprobados++
    }
}
function promedio(notas,cantidad){
    prom = notas / cantidad
    return prom
}
function carreraCase(carrera){
    alert(`Su carrera posee ${carrera} materias a cursar. `)
    do {
        cant4 = parseInt(prompt("Ingrese la cantidad de materias que lleva aprobadas"))
        if(isNaN(cant4) || cant4<0) {
            alert("Ingrese un numero valido.")
        }
    } while(isNaN(cant4) || cant4<0)
    if(cant4 == carrera){
        alert("Felicidades, Acabaste tu carrera!")
    } else{
        materias = carrera - cant4
        alert(`Todavia te faltan ${materias} materias por aprobar. `)
    }
}
let eventClick = function(event){
    event.preventDefault()
    profe = document.getElementById('name').value
    let nuevoForm = document.getElementById('nuevoForm')
    fetch('alumnos.json')
    .then(response => response.json())
    .then(alumnos => {
        alumnos.forEach(alumno =>{
            nuevoForm.innerHTML += `
            <b>${alumno.apellido}</b>, <i>${alumno.nombre}</i>:
            <input type="text" id="nota${alumno.id}" placeholder="Ingrese la nota nº ${alumno.id}" required>        `
        })
    })
    nuevoForm.innerHTML += `
        <input type="submit" id="boton2" placeholder="Enviar Notas"></input>
        `
    const button = document.getElementById("boton")
    Swal.fire({
        icon: 'success',
        title: 'Datos enviados correctamente.',
      })
    clicked = 1
    if(clicked == 1) {
        form = removeEventListener('submit', eventClick)
    }
}
let eventClick2 = function(evento){
    evento.preventDefault()
    let tabla = document.getElementById('tabla')
    Swal.fire({
        icon: 'success',
        title: 'Datos enviados correctamente.',
      })
    const button2 = document.getElementById("boton2")
    tabla.innerHTML += `
        <h5>El promedio es: ${prom}.</h5>
        <h5>Hay ${aprobados} aprobado/s.</h5>
        <h5>Hay ${reprobados} reprobado/s.</h5>
        <h5>Los alumnos presentados al examen fueron: 
        ${alumnos}.</h5>
        <h5>El profesor que evaluó fué: 
        ${profe}.</h5>
        <input type="submit" id="boton3" placeholder="Siguiente"></input>
        `
    clicked2 = 1
    if(clicked2 == 1) {
        form = removeEventListener('submit', eventClick2)
    }
}

/* let boton2 = document.getElementById("boton2")
boton2.addEventListener('click', () => {
    Swal.fire({
        icon: 'success',
        title: 'Datos enviados correctamente.',
      })
}) */

// FIN FUNCIONES

// PRIMERA PARTE

let form = document.getElementById('form')

form = addEventListener('submit', eventClick)
        

for(let i=1; i<=cant ;i++) {
    alumnos[i] = document.getElementById(`nombre${i}`).value
    Aprobados(document.getElementById(`nota${i}`).value)
    suma = suma + nota
}

prom = promedio(suma,cant)
alumnos.shift()

let nuevoForm = document.getElementById('nuevoForm')

nuevoForm = addEventListener('submit', eventClick2)


// FIN PRIMERA PARTE

// SWITCH 

let cases = document.getElementById('cases')
cases.innerHTML += `
    <h5>Ingrese el numero que desee: 1: Promedio de notas - 2: Cálculo de asistencia - 3: Cálculo de Materias restantes</h5>
    <input type="text" id="case1" placeholder=""></input>
    <input type="submit" id="boton4" placeholder="Siguiente"></input>
`
eleccion = document.getElementById('case1').value

    switch (eleccion) {
        case "1":
            cases.innerHTML += `
                <h5>Ingrese la cantidad de notas a promediar</h5>
                <input type="text" id="cant2" placeholder=""></input>
                <input type="submit" id="boton5" placeholder="Siguiente"></input>
                `
            cant2 = document.getElementById('cant2')
            switch1 = document.getElementById('switch1')
            for(let i=1; i<=cant2 ;i++) {
                switch1.innerHTML += `
                <h5>Ingrese la nota nº ${i}</h5>
                <input type="text" id="nota2" placeholder=""></input>
                `
                nota2 = document.getElementById(nota2)
                sum = sum + nota2
            }
            switch1.innerHTML += `
                <input type="submit" id="boton6" placeholder="Siguiente"></input>
                `
            prom2 = promedio(sum,cant2)

            alert(`Su promedio general es: ${prom2}`)
            break
    
        case "2":
            cases.innerHTML += `
                <h3>Debe asistir por reglamento al 80% de las clases</h3>
                <h5>Ingrese la cantidad de clases en el año</h5>
                <input type="text" id="cant3" placeholder=""></input>
                <input type="submit" id="boton7" placeholder="Siguiente"></input>
                `
            cant3 = document.getElementById('cant2')
            switch2 = document.getElementById('switch2')

            let clases = cant3 * assist
            
            alert(`Debes asistir al menos a ${clases} clases. `)
            break
    
    
        case "3":            
            cases.innerHTML += `
                <h5>Ingrese el numero de su carrera: 1: Ingenieria en Sistemas - 2: Profesorado de Matematicas - 3: Agrimensura - 4: Arquitectura - 5: Medicina</h5>
                <input type="text" id="carreras" placeholder=""></input>
                <input type="submit" id="boton5" placeholder="Siguiente"></input>
            `
            carreras = document.getElementById('carreras')

            switch (carreras) {
                case "1":
                    const ing = 50
                    carreraCase(ing)
                    break
                case "2":
                    const pro = 27
                    carreraCase(pro)
                    break
                case "3":
                    const agr = 34
                    carreraCase(agr)
                    break
                case "4":
                    const arq = 42
                    carreraCase(arq)
                    break
                case "5":
                    const med = 45
                    carreraCase(med)
                    break
            }
            break
    } 

// FIN SWITCH

// DARKMODE

let darkMode;

if(localStorage.getItem('darkMode')) { 
    darkMode = localStorage.getItem('darkMode')
} else {
    localStorage.setItem('darkMode', 'light')
}

let botonDarkMode = document.querySelector('#botonDarkMode')
let botonLightMode = document.querySelector('#botonLightMode')

if(darkMode == 'dark') {
    document.body.classList.add('darkMode')
} 

botonDarkMode.addEventListener('click', ()=> {
    document.body.classList.add('darkMode')
    localStorage.setItem('darkMode', 'dark')
})

botonLightMode.addEventListener('click', ()=> {
    document.body.classList.remove('darkMode')
    localStorage.setItem('darkMode', 'light')
})

// FIN DARK MODE