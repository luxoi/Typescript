let suma = function(a:number, b:number){
    return a + b;
}

var obtenerNombre = function(){
    return "Juan perez";
}

console.log(suma(5,3));

let sumaFlecha = (a:number, b:number) =>{
    return a + b;
};
//let sumaFlecha = (a:number, b:number) => a+b;

let obtenerNombreFlecha = () => "Juan Perez";

console.log(sumaFlecha(3,2));
console.log(obtenerNombre());