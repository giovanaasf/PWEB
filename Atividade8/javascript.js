var entrevistados = new Array(45);
var i;

totalIdade = 0;
idadeMaisNova = 120;
qtdPessimo=0; 
qtdB = 0;
qtdO = 0;
mulheres = 0;
homens = 0;
idadeMaisVelha = 0;

for(i=0; i<entrevistados.length; i++){
    nome = prompt("Nome: ");
    idade = parseInt(prompt("Idade: "));
    sexo = prompt ("Sexo (F - feminino e M - Masculino): ");
    opniao = parseFloat(prompt("Opinião (ótimo=4, bom=3, regular=2, péssimo=1): "));

    
    totalIdade += idade;
    

    if (idadeMaisVelha < idade)
        idadeMaisVelha = idade;
   
    
    if (idadeMaisNova > idade)
        idadeMaisNova = idade;
    
    
    if(opniao === 1)
        qtdPessimo++;
    
    if(opniao === 3)
        qtdB++;
    
    if(opniao === 4)
        qtdO++;

    if(sexo.toUpperCase() === "F")
        mulheres++;
    else if (sexo.toUpperCase() === "M")
        homens++;
}

media = totalIdade / entrevistados.length;

alert("Média da idade das pessoas que responderam ao questionário: " + media + " anos.");
alert("Idade da pessoa mais velha: " + idadeMaisVelha + " anos.");
alert("Idade da pessoa mais nova: " + idadeMaisNova + " anos.");
alert("Quantidade de pessoas que responderam Péssimo: " + qtdPessimo);
alert("Porcentagem de pessoas que responderam Ótimo: " + ((qtdO*100)/entrevistados.length).toFixed(2) + "%.");
alert("Porcentagem de pessoas que responderam Bom: " + ((qtdB*100)/entrevistados.length).toFixed(2) + "%.");
alert("Número de mulheres que respoderam ao questionário: " + mulheres + ".");
alert("Número de homens que respoderam ao questionário: " + homens + ".");