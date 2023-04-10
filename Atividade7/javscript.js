
document.getElementById("pedra").addEventListener("click", jogar);//faz quando clica em um botão, chamando a função jogar ao clicar
document.getElementById("papel").addEventListener("click", jogar);
document.getElementById("tesoura").addEventListener("click", jogar);

function jogar(event) {
  var escolhaUser = event.target.id;//vendo que botão o usuario clicou
  var escolhaPC = Math.floor(Math.random() * 3); //*3  - 0.99 / 3 = 0.33 para cada escolha e floor para retornar o inteiro mais próximo 

  let resultado = "";

  //definido escolha do pc
  if(escolhaPC === 1)//0.33*3 = até 0.99 -> 1 - pedra
    escolhaPC = "pedra";
  else if(escolhaPC === 2)//0.66*3 = até 1.98 -> 2 - papel
    escolhaPC = "papel";
  else //0.99 * 3 = 2.97 -. 3 - tesoura
    escolhaPC = "tesoura";

//comparando para ver quem ganhou
  if (escolhaUser === escolhaPC)
    resultado = "houve empate!";
  else if ((escolhaUser === "pedra" && escolhaPC === "tesoura") || (escolhaUser === "papel" && escolhaPC === "pedra") || (escolhaUser === "tesoura" && escolhaPC === "papel"))
    resultado = "você ganhou!";  
  else//possibilidades ao contrário 
    resultado = "você perdeu!";



  alert("Você escolheu " + escolhaUser + ". O Computador escolheu " + escolhaPC + ". Por isso, " + resultado);

}