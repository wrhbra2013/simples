//Pagina Agendamento
var agendamento = [];

function inserir(){
var f_descricao = window.document.getElementById("form_descricao").value;
var f_nome = window.document.getElementById("form_nome").value;
var f_local_uso = window.document.getElementById("form_local_uso").value;
var f_saida = window.document.getElementById("form_saida").value;
var f_retorno = window.document.getElementById("form_retorno").value;


var inserir_agendamentos = verifica(f_descricao);

if(inserir_agendamentos == null){
   window.alert("Agendamento Realizado.");
  agendamento.push({Descricao: f_descricao, Nome: f_nome, Local_uso: f_local_uso, Saida: f_saida, Retorno: f_retorno});
  
  }else{
    window.alert("O material  " .concat(f_descricao,"  esta agendado para ", inserir_agendamentos.Nome ," para a data ", inserir_agendamentos.Saida, " e com previsão de retorno na data ", inserir_agendamentos.Retorno  ))
  }

}



function verifica(nomeDescricao){
  var descr = agendamento.find(function(p_descricao){
    return p_descricao.Descricao === nomeDescricao
  });
  return descr
}



function verifica(nomeDescricao){
  var descr = agendamento.find(function(p_descricao){
    return p_descricao.Descricao === nomeDescricao
  });
  return descr
}


const btn = window.document.getElementById('btn_reset');

btn.addEventListener('click', function limpar(event){
  event.preventDefault();

  const inputs = document.querySelectorAll('#form_descricao,#form_nome,#form_local_uso,#form_saida,#form_retorno')
  inputs.forEach(input =>{
    input.value ="";

  });
});




