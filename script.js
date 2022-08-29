const btnAvancar= document.getElementById("btn-avancar");
const btnVoltar= document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual= 0;

//passo 4
function esconderCartaoSelecionado(){
  const cartaoSelecionado= document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

//passo 3
function mostrarCartao(indiceCartao){
  cartoes[indiceCartao].classList.add("selecionado");
}

// passo 2 
btnAvancar.addEventListener("click", function(){
  //parar quando for o ultimo
  if (cartaoAtual === cartoes.length - 1) return
  
  esconderCartaoSelecionado();
  
  cartaoAtual++;
  mostrarCartao(cartaoAtual);

  
});

//OBJETIVO 2
btnVoltar.addEventListener("click", function(){
  if (cartaoAtual === 0) return;
  
  esconderCartaoSelecionado();
  
  cartaoAtual--;
  mostrarCartao(cartaoAtual);
  
});
