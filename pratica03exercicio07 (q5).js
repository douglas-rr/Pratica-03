var raio, volume;

raio = parseFloat (prompt ("Informe o valor do raio da esfera:"));
console.log ("Raio:" +raio);

volume = parseFloat (4 / 3 * Math.PI * Math.pow (raio, 3));

document.write ("O volume da esfera é de: "+volume);
console.log ("Área: "+volume);