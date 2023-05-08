function abrirJanela() {
    document.getElementById('janela').style.backgroundImage = "url('./imgs/open.svg')";
    document.getElementById('estado').textContent = "Janela Aberta.";
  }

  function fecharJanela() {
    document.getElementById('janela').style.backgroundImage = "url('./imgs/close.svg')";
    document.getElementById('estado').textContent = "Janela Fechada.";
  }

  function quebrarJanela() {
    document.getElementById('janela').style.backgroundImage = "url('./imgs/broken.svg')";
    document.getElementById('estado').textContent = "Janela Quebrada!";
  }