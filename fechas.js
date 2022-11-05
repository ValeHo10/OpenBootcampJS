
const fechaHoy = new Date();
//console.log(fechaHoy);

const fechaNac = new Date(1989, 3, 26, 11, 30);
//console.log(fechaNac);

const esTarde = fechaHoy.getTime() > fechaNac.getTime();
//console.log(esTarde); 

const diaNac = fechaNac.getDate();
//console.log(diaNac);

const mesNac = fechaNac.getMonth() + 1;
//console.log(mesNac);

const anioNac = fechaNac.getFullYear();
//console.log(anioNac);

