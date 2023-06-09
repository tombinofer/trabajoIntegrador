/*let listado = []; 

const consultarListado = async () =>{ 
    const datos = await fetch('https://reqres.in/api/users?page=2'); 
    const datosJason = await datos.json(); 
    return datosJason; 
} 

const consultarDatos = async () =>{ 
    const listado = await consultarListado();
    // console.log(listado.data); 
    const listaPersonas = listado.data; 
    const personas = listaPersonas.map(persona => persona.id + " " + persona.first_name + " " + persona.last_name); 
    //console.log(personas); 

    personas.forEach(persona => { 
        const li = document.createElement("li"); 
        li.textContent = persona 
        document.getElementById("personas").appendChild(li); }); 
    }
*/
window.addEventListener('load',()=> {
    //se crean variables y se obtiene informacion!
    let lat;
    let lon;

    let temperaturaValor = document.getElementById("temperatura-valor");
    let temperaturaDescripcion = document.getElementById("temperatura-descripcion");

    let ubicacion = document.getElementById("ubicacion");
    let iconoAnimado = document.getElementById("icono-animado");

    let vientoVelocidad = document.getElementById("viento-velocidad");

    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( position =>{
            //console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            //ubicacion actual
            //const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=6368c661993897e4feebbfe522004881`;
            
            //ubicacion por Ciudad
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Mendoza,AR&lang=es&units=metric&appid=6368c661993897e4feebbfe522004881`;
            //console.log(url);
            fetch(url)
                .then(response => {return response.json() })
                .then(data =>{
                    
                    console.log(data.main.temp);
                    //Se obtiene temperatura de data y se redondea
                    let temp = Math.round(data.main.temp);
                    temperaturaValor.textContent = `${temp} C°`;
                    console.log(data.weather[0].description);
                    //Se obtiene la descripcion de data y se colocar mayuscula.
                    let desc = data.weather[0].description;
                    temperaturaDescripcion.textContent = desc.toUpperCase();
                    //Se obtiene la ubicacion.
                    ubicacion.textContent = data.name;
                    //Se obtiene la velocidad del viento de data.
                    vientoVelocidad.textContent = `${data.wind.speed} m/s`;
                    //iconos estaticos
                    //let iconCode = data.weather[0].icon;
                    //const urlIcon = `https://openweathermap.org/img/wn/${iconCode}.png`;
                    
                    //iconos animados
                    //SEGUN LO OPCION DEL JSON SERA EL ICONO MOSTRADO.
                    switch(data.weather[0].main){
                        case 'Thunderstorm':
                            iconoAnimado.src='/icons/animated/thunder.svg'
                            console.log('TORMENTA');
                            break;
                        case 'Drizzle':
                            iconoAnimado.src='/icons/animated/rainy-2.svg'
                            console.log('LLOVIZNA');
                            break;
                        case 'Rain':
                            iconoAnimado.src='/icons/animated/rainy-7.svg'
                            console.log('LLUVIA');
                            break;
                        case 'Snow':
                            iconoAnimado.src='/icons/animated/snowy-6.svg'
                            console.log('NIEVE');
                            break;
                        case 'Clear':
                            iconoAnimado.src='/icons/animated/day.svg'
                            console.log('LIMPIO');
                            break;
                        case 'Atmosphere':
                            iconoAnimado.src='/icons/animated/weather.svg'
                            console.log('ATMOSFERA');
                            break;
                        case 'Clouds':
                            iconoAnimado.src='/icons/animated/cloudy-day-1.svg'
                            console.log('NUBES');
                            break;
                        default:
                            iconoAnimado.src='/icons/animated/cloudy-day-1.svg'
                            console.log('por defecto');
                        }   
                    }
                    
                )
                .catch(error =>{
                    console.log(error)
                } )
        })
    }
})






// Create a lightbox
(function() {
    var $lightbox = $("<div class='lightbox'></div>");
    var $img = $("<img>");
    var $caption = $("<p class='caption'></p>");

    // Add image and caption to lightbox

    $lightbox
    .append($img)
    .append($caption);

    // Add lighbox to document

    $('body').append($lightbox);

    $('.lightbox-gallery img').click(function(e) {
    e.preventDefault();

    // Get image link and description
    var src = $(this).attr("data-image-hd");
    var cap = $(this).attr("alt");

    // Add data to lighbox

    $img.attr('src', src);
    $caption.text(cap);

    // Show lightbox

    $lightbox.fadeIn('fast');

    $lightbox.click(function() {
    $lightbox.fadeOut('fast');
    });
});
});
function masInfo() {
    window.location.href = "contacto.html";
}






function validarDatos(){
//FORMULARIO VALIDACION

let nombre = $("#name").val();
//let correo = document.getElementById('email');
let telefono = document.getElementById('phone');
let mensaje = document.getElementById('message');
let error = document.getElementById('error');
error.style.color = "red";

if (nombre == ""){
    $("#msj-name").text("Completar el Nombre y Apellido");
} 

const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/ // 7 a 14 numeros.
}

var expresion = /\w+@\w+\.+[a-z]/;
var valContra =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
}






function ValidaSoloNumeros() {
    if ((event.keyCode < 48) || (event.keyCode > 57)) 
    event.returnValue = false;
}

function txNombres() {
    if ((event.keyCode != 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122))
    event.returnValue = false;
}

document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('formulario');
        formulario.addEventListener('submit', function() {
            formulario.reset();
        });
    });