document.querySelector('#send').addEventListener("click", () => {  
  var nome = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var msg = document.querySelector("#message").value;

  /* A sequência de if e else abaixo serve para validar se os campos estão vazios e quais são eles.
     E mantém o foco no que for principal. 
     Exemplo: Quando todos estão vazios, focará no campo "Nome". 
     Caso o campo "Nome" tenha sido preenchido, focará no campo "Email", e assim por diante.
     No caso de todos os campos terem sido preenchidos, 
     exibirá a mensagem de sucesso ao clicar no botão "ENVIAR". */
  if (nome === "" && (email === "" || email.indexOf("@") === -1) && msg === "") { 
    alert('Preencha o campo "Nome".\nPreencha o campo "Email" com um email válido.\nPreencha o campo "Mensagem".'); 
    document.querySelector("#name").focus();
    return false;
  }
  else if(nome !== "" && (email === "" || email.indexOf("@") === -1) && msg === "") {
      alert('Preencha o campo "Email" com um email válido.\nPreencha o campo "Mensagem".');
      document.querySelector("#email").focus();
      return false;
  }
  else if(nome !== "" && email !== "" && msg === "") {
      alert('Preencha o campo "Mensagem".');
      document.querySelector("#message").focus();
      return false;
  }
  else {
    alert('Mensagem enviada com sucesso!\nObrigada!');
  }
});