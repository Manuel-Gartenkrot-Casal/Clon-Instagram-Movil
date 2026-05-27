# Organización del proyecto

```plaintext
react/
├── public/        ← imagenes utilizadas
│   ├── camara.png
│   ├── config.png
│   ├── newPost.png
│   ├── Send.png
│   ├── story1.png
│   ├── story2.png
│   ├── story3.png
│   ├── story4.png
│   ├── story5.png
│   ├── story6.png
│   └── story7.png
│
└── src/
    ├── services/  ← llamada a api
    │   └── api.js
    │
    ├── App.jsx
    ├── barraLateral.jsx  
    ├── cajaLikesSeguidores.jsx  
    ├── fotoPerfil.jsx 
    ├── Header.jsx  
    ├── headerImagenes.jsx  
    ├── loader.jsx 
    ├── main.jsx
    ├── nombreEmpresa.jsx
    ├── opcionesBarraLateral.jsx 
    ├── publicacion.jsx 
    ├── publicacionDetail.jsx 
    ├── publicaciones.jsx 
    ├── searchBar.jsx 
    ├── stories.jsx
    └── story.jsx 
```
# Responsabilidad de los componentes

* **`barraLateral`**: Contiene la barra lateral mostrando el perfil del usuario, estadisticas (llamando al componente cajaLikesSeguidores) y las opciones de navegacion que hay (llamando a OpcionesBarraLateral)
* **`cajaLikeSeguidores`**: Recibe por props la cantidad de likes y seguidores del usuario cargado y los muestra en pantalla junto a un emoji
* **`fotoPerfil`**: Recibe por props una imagen y la muestra estilandola con el circulo de colores característico de instagram
* **`header`**: Muestra la parte superior de la página, le manda al componente NombreEmpresa el nombre de la empresa de la actual página, luego ejecuta el componente SearchBar y por último muestra todos los íconos del header
* **`headerImagenes`**: Recibe mediante props las imagenes del header que se tienen que mostrar y las estila mandandolas a la parte superior derecha 
* **`loader`**: Cuando se abre la pagina se muestra el loader mientras cargan las imagenes
* **`main`**: Punto de entrada a la página, llama a los componentes: app, header, stories, BarraLateral y Publicaciones
* **`nombreEmpresa`**: Recibe mediante props el nombre de la empresa de la página y se muestra con un estilo
* **`opcionesBarraLateral`**: Muestra las opciones de navegacion que hay en la página
* **`publicacion`**: Llama a api para obtener las imagenes de los gatos y las muestra. También se puede seleccionar un gato cuando tocas el boton ver detalle, si hay uno seleccionado te manda  a PublicacionDetail donde le manda toda la info del gato seleccionado.
* **`publicacionDetail`**: Recibe mediante props la informacion del gato seleccionado y la muestra. Ademas implementamos con un useState un boton para los likes de la publicacion y hardcodeamos 3 comentarios
* **`publicaciones`**: Encargado de llamar al componente publicacion
* **`searchBar`**: Componente que tiene el buscador del header
* **`stories`**:  ← Tiene en un useState 7 stories hardcodeadas, las cuales con un map son recorridas y le manda al componente story el id, username e imagen de cada story
* **`story`**: Recibe mediante props la información de cada story y la imagen se la manda a Foto perfil para que la estile y ademas muestra el username

# hooks utilizados
* **`useState`**: utilizado para gestionar el estado local, como los likes, guardar las imágenes de los gatos, seleccionar gato, establecer cuando usar el loading, likes y guardar las stories.
* **`useEffect`**: utilizado para llamar a la API al cargar la página, 

# Diseño figma
https://www.figma.com/es-es/comunidad/file/1004033523744290376/instagram-modern-web-design

# Visualización individual de publicaciones
* En publicacion.jsx cuando tocas el boton ver detalles, el useState de gatoSeleccionado que esta predefinido en null pasa a tener el gato seleccionado. Cuando clickeaste el boton te manda a publicacionDetail y le manda por props la informacion del gato seleccionado.

# Simulación del perfil de usuario logueado
* En el componente barraLateral, se le manda a FotoPerfil una imagen seleccionada por nosotros, donde este componente la estila. Debajo de esta se muestra tambien los datos del usuario que cargamos a mano

# Datos mostrados en el perfil
* **Foto de perfil**: Una imagen del avatar con el estilo de instagram.
* **Nombre completo**: El nombre completo
* **Nombre de usuario**: El username de instagram
* **Seguidores**: Un contador  que simula la cantidad de seguidores del usuario
* **Me gusta**: Un contador que simula los likes obtenidos

# Estados utilizados para la vista individual
* Usamos el useState llamado gatoSeleccionado inicializado en null que cuando apreta el boton ver detalles cambia y setea el gatoSeleccionado al gato que toco. 
