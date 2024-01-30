"use strict";
let suma = function (a, b) {
    return a + b;
};
var obtenerNombre = function () {
    return "Juan perez";
};
console.log(suma(5, 3));
let sumaFlecha = (a, b) => {
    return a + b;
};
//let sumaFlecha = (a:number, b:number) => a+b;
let obtenerNombreFlecha = () => "Juan Perez";
console.log(sumaFlecha(3, 2));
console.log(obtenerNombre());
