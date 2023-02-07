const btn = document.querySelector("#btnAmostra")
const nome = document.querySelector("#nome");
const link = document.querySelector("#link");
const registroJson = require('registro.json')
/* Alerta usuário caso tenha campos para preencher*/

btn.addEventListener("click", function (e) {
    e.preventDefault();
    const valorNome = nome.value;
    const valorLink = link.value;
    
    if(valorNome === "") {
        var alerta = "Insira um nome!"
        document.getElementById("alertaNome").innerHTML = alerta;
    }
    if(valorLink === "") {
        var alerta = "Insira um link válido!"
        document.getElementById("alertaLink").innerHTML = alerta;
    }

   const lista = document.getElementById("lista");
   lista.innerHTML = `<li><span>${valorNome}</span><img src=${valorLink}></li>`  
});

nome.addEventListener("change", function (e) {
    document.getElementById("alertaNome").innerHTML = "";
});
link.addEventListener("change", function(e) {
    document.getElementById("alertaLink").innerHTML = "";
});

/* exibir simulação após clique */


/* enviar dados para a tela principal */

