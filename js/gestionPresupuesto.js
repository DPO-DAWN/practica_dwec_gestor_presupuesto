// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
var presupuesto = 0;

function actualizarPresupuesto(valorPresupuesto) {
    // TODO
    if(presupuesto<0)
    alert('Has introducido un valor erróneo. \n -1');
    else
    presupuesto=valorPresupuesto;
    alert(presupuesto);
}

function mostrarPresupuesto() {
    // TODO
    alert(`Tu presupuesto actual es de ${presupuesto}€`);
}

function CrearGasto() {
    // TODO
    this.descripcion= descripcion;
    this.valor= valor;
    if(valor<0)
    alert('El valor es erróneo');
    else
    valor=valor;
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
