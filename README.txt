SALVATORE'S SWEET - PROYECTO WEB PARA VISUAL STUDIO CODE
======================================================

ESTRUCTURA:
Salvatores_Sweet/
  index.html           <- Estructura de la página
  css/diseno.css       <- Diseño: colores, tamaños, distribución y móvil
  js/script.js         <- Menú desplegable, búsqueda y filtros
  imagenes/logo.jpg    <- Imagen original con fondo oscuro (se muestra en Inicio)
  imagenes/icono.jpg   <- Segunda imagen original (conservada sin cambios)
  imagenes/favicon.svg <- Icono del navegador
  README.txt           <- Estas instrucciones


ENLACES QUE DEBEN CONSERVARSE EN index.html:
  <link rel="stylesheet" href="css/diseno.css">
  <script src="js/script.js" defer></script>
  <img src="imagenes/logo.jpg" ...>

IMPORTANTE:
- El archivo icono.jpg tiene el patrón de cuadros en la propia imagen JPG,
  no es transparente. Por eso se conserva sin usar como logo flotante.
- Las cuatro categorías (Pasteles, Helados, Cupcakes, Especialidades) son
  contenido de demostración: edítalas según los productos reales del negocio.
- No inventamos teléfono, Instagram ni correo. Personaliza #contacto con
  tus datos antes de publicar la web como sitio comercial.
- El buscador y los filtros funcionan LOCALMENTE sobre las cuatro tarjetas.
  No es una búsqueda de productos alojados en una base de datos.
- Sitio web estático listo para alojar en GitHub Pages, Netlify o similar.
- Sin Bootstrap ni dependencias externas: funciona también sin internet.

CÓMO SUBIR A GITHUB PAGES:
1. Crea un repositorio en GitHub.
2. Sube el CONTENIDO de Salvatores_Sweet al nivel principal del repositorio.
3. Abre Settings > Pages > Deploy from a branch.
4. Selecciona main y carpeta / (root), guarda y espera que se publique.
