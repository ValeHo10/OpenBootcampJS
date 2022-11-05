
const datosPersonales = {
    nombre: "Valeria",
    apellido: "Gomez",
    edad: 33,
    altura: 1.65,
    eresDesarrollador: true,
}
//console.log(datosPersonales);

const edad = datosPersonales.edad;
//console.log(edad);

const lista = [
    datosPersonales,
    {nombre: "Daniela", apellido: "Aragon", edad: 25, altura: 1.73, eresDesarrollador: false},
    {nombre: "Jose", apellido: "Perez", edad: 38, altura: 1.8, eresDesarrollador: true,},
]    
//console.log(lista);

const listaEdad = lista.sort((a, b) => b.edad - a.edad);
//console.log(listaEdad);
