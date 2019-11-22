var raio, area;

raio = parseFloat (prompt ("Informe o valor do raio do círculo:"));
console.log ("Raio:" +raio);

area = Math.PI * Math.pow (raio, 2); /*Math.PI para representar o valor de PI. Math.pow para usar potencia (valor, potencia do valor)*/

document.write ("A área do círculo é: "+area);
console.log ("Área: "+area);