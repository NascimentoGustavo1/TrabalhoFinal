const botao = document.getElementById("botaoTema");

function alterarTema(){
    document.body.classList.toggle("temaEscuro");
}

botao.addEventListener("click", alterarTema);