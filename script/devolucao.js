//Pagina Devolução
var devolucao = [];

function inserir(){
  var f_descricao = window.document.getElementById("form_descricao").value;
  var f_nome = window.document.getElementById("form_nome").value;
  var f_conservacao = window.document.getElementById("form_conservacao").value;
  var f_carencia = window.document.getElementById("form_carencia").value;
  var f_retorno = window.document.getElementById('form_retorno').value;
  var inserir_devolucao = verifica(f_descricao);

  if(inserir_devolucao == null){
  
  window.alert("Devolução Realizado.")
  devolucao.push({Descricao: f_descricao, Nome: f_nome, Conservacao: f_conservacao, Carencia: f_carencia, Retorno: f_retorno})
  
}else{
  window.alert("O Material " .concat(f_descricao," ja foi devolvido por ", inserir_devolucao.Nome, " no dia ", inserir_devolucao.Carencia));
}
}

function verifica(nomeDescricao){
  var devo = devolucao.find(function(p_devolucao){
    return p_devolucao.Descricao === nomeDescricao
  })
  return devo;
}

const btn = window.document.getElementById('btn_reset');

btn.addEventListener('click', function limpar(event){
  event.preventDefault();

  const inputs = document.querySelectorAll('#form_descricao,#form_nome,#form_conservacao,#form_carencia')
  inputs.forEach(input =>{
    input.value ="";

  });
});

//export defaults descricao; nome; conservacao; carencia;
