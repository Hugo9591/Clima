const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const body = document.body;

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
});

function buscarClima(e){
    e.preventDefault();
    
    //Validar Campos
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if(ciudad === '' || pais === ''){
        mostrarError('Ambos campos son Obligatorios');
        return;
    }

    // consultar API
    consultarAPI(ciudad, pais);
}


function consultarAPI(ciudad, pais){
    const appId = 'b605bea9b4e9f4941a63be43deb4c34f';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    spinner();

    fetch(url)
        .then( respuesta => respuesta.json())
        .then( datos => {

            console.log(datos);
            limpiarHTML();

        //404 Error cunado no se encuentra la busqueda
        if(datos.cod === '404'){
            mostrarError('Ciudad no Encontrada');
            return;
        }

        mostrarClima(datos);
        
        });
}

function mostrarClima(datos){
    const {name, main: {temp, temp_max, temp_min} } = datos;

    //Convertir de grados a Kelvin
    const centigrados = kelvinCentigrados(temp);
    const max = kelvinCentigrados(temp_max);
    const min = kelvinCentigrados(temp_min);

    const nombreCiudad = document.createElement('P');
    nombreCiudad.textContent = `${name}`;
    nombreCiudad.classList.add('font-bold', 'text-6xl');

    const actual = document.createElement('P');
    actual.innerHTML = `${centigrados} &#8451;`;//Es una entidad para dar °C
    actual.classList.add('font-bold', 'text-6xl');

    //Crear el scripting
    //Temperatura maxima
    const tempMaxima = document.createElement('P');
    tempMaxima.innerHTML = `Max: ${max} &#8451`;
    tempMaxima.classList.add('text-xl');

    //Temperatura minima
    const tempMinima = document.createElement('P');
    tempMinima.innerHTML = `Min: ${min} &#8451`;
    tempMinima.classList.add('text-xl');

    const resultadoDiv = document.createElement('DIV');
    resultadoDiv.classList.add('text-center', 'text-white');

    //Agregar ciudad
    resultadoDiv.appendChild(nombreCiudad);

    //Agregar clima actual
    resultadoDiv.appendChild(actual);

    //Agregar clima min y max
    resultadoDiv.appendChild(tempMaxima);
    resultadoDiv.appendChild(tempMinima);

    resultado.appendChild(resultadoDiv);

    climaFondo(temp);
}

const kelvinCentigrados = grados =>parseInt(grados - 273.15);

function mostrarError(mensaje){

    const alerta = document.querySelector('.bg-red-100');

    if(!alerta){
        console.log(mensaje);

        const alerta = document.createElement('DIV');
        alerta.classList.add('bg-red-100', 'border-red-400', 
                                'text-red-700', 'px-4', 'py-3', 
                                'rounded', 'max-w-md', 'mx-auto', 
                                'mt-6', 'text-center',
                                'animacion')

        alerta.innerHTML = `
            <strong class="font-bold">Error: </strong>
            <span class="block">${mensaje}</span>
            
        `;

        container.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}


function spinner(){

    limpiarHTML();//Para asegurar que no haya HTML

    const divSpinner = document.createElement('DIV');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;

    resultado.appendChild(divSpinner);
}

function climaFondo(temperatura){
    if(temperatura > 20){
        body.classList.add('fondoCalor');
    }else if(temperatura < 5){
        body.classList.add('fondoFrio');
    }else{
        body.classList.remove('fondocalor', 'fondoFrio');
    }
}