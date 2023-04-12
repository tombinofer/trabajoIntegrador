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
                    let temp = Math.round(data.main.temp);
                    temperaturaValor.textContent = `${temp} C°`;
                    console.log(data.weather[0].description);
                    let desc = data.weather[0].description;
                    temperaturaDescripcion.textContent = desc.toUpperCase();
                    ubicacion.textContent = data.name;
                    vientoVelocidad.textContent = `${data.wind.speed} m/s`;
                    //iconos estaticos
                    //let iconCode = data.weather[0].icon;
                    //const urlIcon = `https://openweathermap.org/img/wn/${iconCode}.png`;
                    
                    //iconos animados
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
