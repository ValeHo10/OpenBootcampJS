//calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let contador = 1;
let factorial = 1;
while (contador <=11) {
    factorial *= contador;
    contador++;
    if (contador === 11) {
        break;
    }
}
console.log(`El factorial de 10 es ${factorial}`);