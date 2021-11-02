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
    return gastos;
}

function anyadirGasto(g){
    g.id= idGasto;
    idGasto++;
    gastos.push(g)
}

function borrarGasto(ident){
    for (let elem of gastos){
        if(elem.id === ident)
            gastos.splice(gastos.indexOf(elem),1);
    }
}

function calcularTotalGastos(){
    let suma = 0;
    gastos.forEach((elem) => suma += elem.valor); 
    return suma;    
}

function calcularBalance(){
    let balance;
    let gastoTotal= calcularTotalGastos();
    let presupuestoTotal = presupuesto;

    balance = presupuestoTotal - gastoTotal;
    return balance;
}

/*function filtrarGastos(){
    let fechaD,fechaH,fD,fH;
    let min,max,desc,et;
    let gatosFiltrados= [];
    
}*/

function CrearGasto(texto, num, fec= Date.now(), ...eti) {
    // TODO
    if(num<0 || isNaN(num))
    num=0;
    let gasto={
        descripcion: texto,
        valor: num,
        etiquetas: eti,
        fecha: ((!isNaN(Date.parse(fec)) ? Date.parse(fec) : Date.now())) ,
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
        actualizarFecha(f){
            f=Date.parse(f);
            if(!isNaN(f))
            this.fecha=f;
        },
        anyadirEtiquetas(...eti){
            for(let elem of eti)
            {
                if(!this.etiquetas.includes(elem))
                this.etiquetas.push(elem);
            }
        },
        borrarEtiquetas(...eti){
            for(let elem of eti){
                if(this.etiquetas.includes(elem)){
                    this.etiquetas.splice(this.etiquetas.indexOf(elem),1)
                }                        
            }
        },
        mostrarGastoCompleto(){                
                let fecha1;
                if(typeof this.fecha === 'string')                
                    fecha1 = Date.parse(this.fecha);                  
                else
                    fecha1 = this.fecha;                    
            let e = "";
                for(let elem of this.etiquetas) { 
                    e += `- ${elem}\n`;
                };        
            let fecha2 = new Date(fecha1);   
            let texto = `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.\nFecha: ${(fecha2.toLocaleString())}\nEtiquetas:\n`;
            return texto + e;
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
    calcularBalance,
    filtrarGastos,
    agruparGastos,
}
