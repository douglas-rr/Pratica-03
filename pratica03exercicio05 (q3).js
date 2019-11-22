var n1, n2, log;

/* Função IF deu erro na hora de pedir um novo número caso o primeiro fosse menor que 1*/
for (n1 = prompt ("Informe um número:"); n1 < 1; n1 = prompt ("O número precisa ser maior que 0:"));
    console.log ("Primeiro número:"+n1);

for (n2 = prompt ("Informe a base para o logaritmo:"); n2 < 1; n2 = prompt ("O número precisa ser maior que 0:"));
    console.log ("Segundo número:"+n2);

alert ("Números válidos. Calculando logaritmo.");

/* A função Math.log usa a base E. Log2 e log10, 2 e 10, respectivamente*/
log = Math.log (n1) / Math.log (n2);

document.write ("O número citado é: " + n1 + "</br>");
document.write ("A base do logaritmo é: " + n2 + "</br>");
document.write ("O resultado do logaritmo é: " +log);