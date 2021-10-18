// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
var presupuesto = 0;

function actualizarPresupuesto(valorPresupuesto) {
    // TODO
    if(presupuesto<0)
    console.log('Has introducido un valor erróneo. \n -1');
    else
    presupuesto=valorPresupuesto;
    console.log(presupuesto);
}

function mostrarPresupuesto() {
    // TODO
    alert(`Tu presupuesto actual es de ${presupuesto}€`);
}

function CrearGasto(descripcion, valor) {
    // TODO
    let gasto={
        texto: descripcion,
        num: valor,
        mostrarGasto(){
            return `Gasto correspondietne a ${gasto.descripcion} con valor ${gasto.valor}€`;
        },
        actualizarDescripcion(texto){
            this.descripcion= texto;
        },
        actualizarValor(num){
            if (num<0)
            return "Introduce un número positivo"
            else
            this.valor=num;
        }
    }
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
