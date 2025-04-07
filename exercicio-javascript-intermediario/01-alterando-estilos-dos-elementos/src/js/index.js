const btnTrocarCor = document.getElementById("btn-trocar-cor");

const quadradoAzul = document.querySelector(".azul");

btnTrocarCor.addEventListener("click", trocarCor);

function trocarCor() {
    quadradoAzul.classList.remove("azul");
    quadradoAzul.classList.add("amarelo")
}