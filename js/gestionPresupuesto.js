// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
var presupuesto = 0;
var gastos = [];
var idGasto= 0;

function actualizarPresupuesto(valorPresupuesto) {
    // TODO
    if(valorPresupuesto>=0){
    presupuesto=valorPresupuesto
    return presupuesto;
    }
    else
    return -1;
}   

function mostrarPresupuesto() {
    // TODO
    return `Tu presupuesto actual es de ${presupuesto} €`;
}

function listarGastos(){
    return gasto;
}

function anyadirGasto(gastos){
    for(let i=0;i<gastos.length;i++)
        gastos +=
}

function borrarGasto(){

}

function CrearGasto(texto, num, fec= new Date(), eti = []) {
    // TODO
    if(num<0 || isNaN(num))
    num=0;
    let gasto={
        descripcion: texto,
        valor: num,
        etiqueta: [...eti],
        fecha: fec,
        mostrarGasto(){
            return `Gasto correspondiente a ${gasto.descripcion} con valor ${gasto.valor} €`;
        },
        actualizarDescripcion(texto){
            this.descripcion= texto;
        },
        actualizarValor(num){
            if (num>=0)
            this.valor=num;
        },
        actualizarFecha(fec){
            if(!isNaN(Date.parse(fec)))
            this.fecha= Date.parse(fec);
        },
        anyadirEtiquetas(...eti){
            if(!this.eti.includes(this.etiqueta))
            this.etiqueta += [...eti];
        },
        borrarEtiquetas(){

        }
    }
    return gasto;
}




// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance
}
