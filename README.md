# Aplicación de Consulta del Clima  

## Descripcion
Este proyecto es una página web que permite consultar el clima de cualquier ciudad usando la API de OpenWeatherMap. 
Los usuarios ingresan el nombre de la ciudad y el país, y al hacer clic en el botón de consulta, la aplicación muestra la temperatura actual, mínima y máxima del día en grados Celsius. 
Si la temperatura supera los 20°C, el fondo cambia a una imagen soleada; si es menor a 5°C, cambia a una imagen con nieve. 
Se utilizan HTML, Tailwind CSS, CSS personalizado y JavaScript para la lógica y validaciones.

## Características  
- Consulta el clima ingresando el nombre de la ciudad y el país.  
- Muestra temperatura actual, mínima y máxima en grados Celsius.  
- Validaciones de campos vacíos y ciudades inexistentes.  
- Cambio dinámico de fondo según la temperatura:  
  - Soleado si la temperatura es mayor a 20°C.  
  - Nieve si la temperatura es menor a 5°C.  
- Conversión de grados Fahrenheit a Celsius con JavaScript.  

## Tecnologías Utilizadas  
- **HTML5**  
- **Tailwind CSS** + CSS personalizado  
- **JavaScript** (manejo de API y lógica de validaciones)  
- **API OpenWeatherMap** (para obtener datos del clima)  

## Instalación y Uso  
1. Clona este repositorio:  
   ```bash
   git clone https://github.com/Hugo9591/Clima.git
2. Abre el archivo index.html en tu navegador.
  - Ingresa el nombre de una ciudad y su país.
  - Haz clic en "Consultar Clima" para ver los resultados.
- Notas
Necesitas una clave de API de OpenWeatherMap para que funcione la consulta.
Puedes obtener una clave gratuita en https://openweathermap.org/.
