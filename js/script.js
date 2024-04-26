// Função que atualiza o tempo no display do relogio
function atualizarTempo(){
  let display = document.querySelector('.display');

  // Cria um objeto date para conseguir obter a hora atual
  let tempo = new Date();

  // Obtendo horas, minutos, e segundos atuais. Aplicando o formato necessário
  let horario = corrigirHorario(tempo.getHours()) + ':' + corrigirHorario(tempo.getMinutes()) + ':' + corrigirHorario(tempo.getSeconds());

  // Define o texto do elemento "Display" como horário atual
  display.textContent = horario;
}

// Função que corrige o formato das horas, minutos e segundos. Adicionando um zero à esquerda se for necessário
function corrigirHorario(numero){
  if (numero < 10){
    numero = '0' + numero;
  }
  return numero;
}

atualizarTempo();
// Corrigindo o intervalo de atualização de 1 segundo para chamar a função 'atualizarTempo'
setInterval(atualizarTempo, 1000);
