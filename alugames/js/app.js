let jogosAlugados= 0; /*amarzenamos o valor da variavel = 0 pois vamos imaginar que iniciaremos com todos os jogos disponiveis para serem alugados */
let jogosDevolvidos = 0;

function alterarStatus(id) {
  let jogoSelecionado = document.getElementById(`game-${id}`);
  let imagem = jogoSelecionado.querySelector(".dashboard__item__img");
  let botao = jogoSelecionado.querySelector(".dashboard__item__button");
  let nomeDoJogo = jogoSelecionado.querySelector(".dashboard__item__name");
  
  if(imagem.classList.contains("dashboard__item__img--rented")) {
      imagem.classList.remove("dashboard__item__img--rented");
      botao.classList.remove("dashboard__item__button--return");
      botao.textContent = "Alugar";
            //alerta sobre confirmação para devolução o jogo.
      alert(`Você deseja devolver o jogo ${nomeDoJogo.textContent}?`);
      jogosDevolvidos++ /*jogosDevolvidos = jogosDevolvidos + 1 */
      qntDeJogosDevolvidos() /*Vou chamar a função qntDeJogosDevolvidos para ser executada, quando a pessoa desejar clicar no botão devolver */
  } else {
      imagem.classList.add("dashboard__item__img--rented");
      botao.classList.add("dashboard__item__button--return");
      botao.textContent = "Devolver";
            //alerta sobre confirmação para alugar o jogo.
    alert(`Você deseja alugar o jogo ${nomeDoJogo.textContent}?`)
    jogosAlugados++ /*jogosAlugados = jogosAlugados + 1 */
    qntDeJogosAlugados() /*Vou chamar a função qntDeJogosAlugados para ser executada, quando a pessoa desejar clicar no botão alugar */
  }
}

function qntDeJogosAlugados() {
  console.log(`A quantidade de jogos alugados foi de ${jogosAlugados}.`);
}

function qntDeJogosDevolvidos() {
  console.log(`A quantidade de jogos devolvidos foi de ${jogosDevolvidos}`);
}
