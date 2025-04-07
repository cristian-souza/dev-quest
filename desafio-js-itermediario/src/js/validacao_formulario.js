function adicionaErro(erro, input) {
  erro.forEach(mensagem => {
    if (mensagem.dataset.input === input.id) {
      if (input.value.trim() === "") {
        mensagem.classList.remove("esconder");
        input.classList.add("bordaVermelha");
      } else {
        mensagem.classList.add("esconder");
      }
    }
  });
}

function removeErro(erro, input) {
  erro.forEach(mensagem => {
    if (mensagem.dataset.input === input.id) {
      if (input.value.trim() != "") {
        mensagem.classList.add("esconder");
        input.classList.remove("bordaVermelha");
      }
    }
  });
}

const btnEnviar = document.querySelector("#enviar");
const mensagemErro = document.querySelectorAll(".erro");

for (let input of document.querySelectorAll(".validacao")) {
  input.addEventListener("input", () => {
    if (input.value.trim() === "") {
      input.classList.remove("bordaVerde");
    } else {
      input.classList.add("bordaVerde");
      removeErro(mensagemErro, input);
    }
  })
}

btnEnviar.addEventListener("click", () => {
  for (let input of document.querySelectorAll(".validacao")) {
    if (input.value.trim() === "") {
      adicionaErro(mensagemErro, input);
      camposValidos = false;
    } else {
      removeErro(mensagemErro, input);
    }
  }
})
