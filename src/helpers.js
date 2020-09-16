// Obtiene la diferencia de años
export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}

// Calcular el total a pagar según la marca
export function calcularMarca(marca){
    let incremento;

    switch(marca){

        case 'europeo':
            incremento= 1.30;
            break;

        case 'americano':
            incremento = 1.15;
            break;

        case 'asiatico':
            incremento = 1.05;
            break;

        default:
            break;
    }
    return incremento;
}

// Calcula el tipo de seguro
export function calcularPlan(plan){
   return ( plan === 'basico' ) ? 1.20 : 1.50;
} 

// Capitalizar la primera letra mayúscula
export function primeraMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}