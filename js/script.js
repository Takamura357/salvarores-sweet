/* SALVATORE'S SWEET · INTERACCIONES
   Menú móvil, buscador de postres, filtros y año automático.
   No requiere bibliotecas externas ni conexión a internet.
*/
'use strict';

const botonMenu = document.querySelector('#menu-boton');
const menuPrincipal = document.querySelector('#menu-principal');
const enlacesNavegacion = document.querySelectorAll('.enlace-navegacion');
const formularioBusqueda = document.querySelector('#buscador');
const campoBusqueda = document.querySelector('#buscar-postre');
const botonesFiltro = document.querySelectorAll('.filtro');
const tarjetas = document.querySelectorAll('.tarjeta-postre');
const avisoSinResultados = document.querySelector('#sin-resultados');
const estadoBusqueda = document.querySelector('#estado-busqueda');

let filtroActual = 'todos';

function cerrarMenu() {
  menuPrincipal.classList.remove('abierto');
  botonMenu.setAttribute('aria-expanded', 'false');
  botonMenu.setAttribute('aria-label', 'Abrir menú');
}

botonMenu.addEventListener('click', () => {
  const abierto = menuPrincipal.classList.toggle('abierto');
  botonMenu.setAttribute('aria-expanded', String(abierto));
  botonMenu.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
});

// Se cierra al navegar, pulsar Escape o hacer clic fuera.
enlacesNavegacion.forEach((enlace) => {
  enlace.addEventListener('click', () => {
    enlacesNavegacion.forEach((otro) => otro.classList.remove('activo'));
    enlace.classList.add('activo');
    cerrarMenu();
  });
});

document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape') cerrarMenu();
});

document.addEventListener('click', (evento) => {
  if (!menuPrincipal.contains(evento.target) && !botonMenu.contains(evento.target)) cerrarMenu();
});

// Hace coincidir búsquedas aunque el usuario escriba sin tildes.
function normalizar(texto) {
  return texto.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

function actualizarPostres() {
  const texto = normalizar(campoBusqueda.value);
  let visibles = 0;

  tarjetas.forEach((tarjeta) => {
    const coincideCategoria = filtroActual === 'todos' || tarjeta.dataset.categoria === filtroActual;
    const contenido = normalizar(`${tarjeta.querySelector('h3').textContent} ${tarjeta.dataset.busqueda}`);
    const coincideBusqueda = !texto || contenido.includes(texto);
    const visible = coincideCategoria && coincideBusqueda;
    tarjeta.hidden = !visible;
    if (visible) visibles += 1;
  });

  avisoSinResultados.hidden = visibles !== 0;
  estadoBusqueda.textContent = `${visibles} categoría${visibles === 1 ? '' : 's'} encontrada${visibles === 1 ? '' : 's'}.`;
}

botonesFiltro.forEach((boton) => {
  boton.addEventListener('click', () => {
    filtroActual = boton.dataset.filtro;
    botonesFiltro.forEach((otro) => {
      const activo = otro === boton;
      otro.classList.toggle('activo', activo);
      otro.setAttribute('aria-pressed', String(activo));
    });
    actualizarPostres();
  });
});

campoBusqueda.addEventListener('input', actualizarPostres);
formularioBusqueda.addEventListener('submit', (evento) => {
  evento.preventDefault();
  actualizarPostres();
  cerrarMenu();
  document.querySelector('#postres').scrollIntoView({ behavior: 'smooth' });
});

// Año del pie de página sin modificarlo manualmente cada enero.
document.querySelector('#anio-actual').textContent = new Date().getFullYear();
actualizarPostres();
