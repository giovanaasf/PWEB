
        var nota1;
        var nota2;
        var nota3;
        var nome;
        var result;

        nome = prompt("Qual é o nome do aluno?")
        nota1 = parseFloat (prompt("Digite a nota 1: "));
        nota2 = parseFloat (prompt("Digite a nota 2: "));
        nota3 = parseFloat (prompt("Digite a nota 3: "));

        result = (nota1 + nota2 + nota3)/3;

        alert("A média do aluno " + nome + " e: " + result.toFixed(2));