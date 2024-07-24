//Pagina Servidores
var servidores = [];


function inserir(){
  

var f_matricula = window.document.getElementById("form_matricula").value;
var f_nome = window.document.getElementById("form_nome").value;
var f_cargo = window.document.getElementById("form_cargo").value;
var f_tel = window.document.getElementById("form_tel").value;
var f_email = window.document.getElementById("form_email").value;

var inserir_servidores = verifica_dados(f_matricula);

    
if(inserir_servidores == null)
{
  

alert('Servidor cadastrado');
servidores.push({Matricula: f_matricula, Nome: f_nome, Cargo:f_cargo, Tel:f_tel, Email:f_email  });



}

else 
{
  alert("A Matricula nº:  " .concat(f_matricula, "  ja esta inserido, para o Servidor: ", inserir_servidores.Nome ))
  }
    
};



function verifica_dados(numMatricula){
  var matric = servidores.find(function(p_matricula){
    return  p_matricula.Matricula === numMatricula
  }); 
  return matric;
};




const btn = window.document.getElementById('btn_reset');


btn.addEventListener('click', function limpar(event){
  event.preventDefault();

  const inputs = document.querySelectorAll('#form_matricula,#form_nome,#form_cargo,#form_tel,#form_email')
  inputs.forEach(input =>{
    input.value ="";

  });
});

