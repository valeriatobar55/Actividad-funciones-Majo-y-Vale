function obtenerFechaActual() {
    const fecha = new Date();
    const dia = String(fecha.getDate()).padStart(2, '0'); // Día con dos dígitos
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Mes con dos dígitos
    const anio = fecha.getFullYear();
  
    // Devolvemos la fecha en formato "DD/MM/YYYY"
    return `${dia}/${mes}/${anio}`;
  }
  
  console.log(obtenerFechaActual());
  