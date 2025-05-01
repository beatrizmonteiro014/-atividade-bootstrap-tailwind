document.addEventListener('DOMContentLoaded', function () {
  const botaoReserva = document.querySelectorAll('.btn-primary');

  botaoReserva.forEach(botao => {
    botao.addEventListener('click', function () {
      console.log('Botão clicado:', this.textContent);
    });
  });
}); 


