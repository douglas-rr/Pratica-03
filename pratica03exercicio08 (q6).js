var capital, juros, prazo, montante;

capital = parseFloat (prompt ("Informe o valor do capital inicial:"));
console.log ("Capital inicial:"+capital);

juros = parseFloat (prompt ("Informe a taxa de juros:"));
juros = juros/100;
console.log ("Taxa de juros:"+juros);

prazo = parseFloat (prompt ("Informe a quantidade de meses que serão investidos:"));
console.log ("Tempo:"+prazo);

montante = capital * Math.pow ((1 + juros), prazo);
montante = parseFloat (montante.toFixed(2));
console.log ("Montante:"+montante);

document.write ("O valor recebido será de: R$ "+montante);