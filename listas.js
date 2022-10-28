const listaCompra = ["tomate", "lechuga", "papa", "leche", "pan"];
const agregarAceite = listaCompra.push("Aceite de Girasol");
console.log(listaCompra);
const eliminarAceite = listaCompra.pop();
console.log(listaCompra);

const peliculas = [
    {titulo: "Shrek" , director: "Andrew Adamson", fecha: 2001},
    {titulo: "Monster Inc" , director: "Pete Docter", fecha: 2001},
    {titulo: "Coco" , director: "Lee Unkrich", fecha: 2017}
];

 const pelis = peliculas.filter(peli => peli.fecha > 2010);
 console.log(pelis);

 const directores = peliculas.map(peli => peli.director);
 console.log(directores);

 const titulos = peliculas.map(peli => peli.titulo);
 console.log(titulos);

 const concatListas = directores.concat(titulos);
 console.log(concatListas);

 const listasFactorPropag = [...directores, ...titulos];
 console.log(listasFactorPropag);
 
