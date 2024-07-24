var matriculas = [];





function adicionar_registro(){



//INCLUSÃO DE REGISTROS - VARIÁVEIS
var jsNome = window.document.getElementById("nome").value;
var jsMatricula = window.document.getElementById("matricula").value;
var jsRA = window.document.getElementById("ra").value;



var matriculaCadastrada = verifica_matricula_ja_inserida(jsMatricula);



if (matriculaCadastrada == null)
{




window.alert("Aluno registrado.")
matriculas.push({Nome: jsNome, Matricula: jsMatricula, Registro: jsRA});

}
else
{
window.alert("Matricula ".concat(jsMatricula, " já está cadastrada para o aluno ", matriculaCadastrada.Nome));
}
}



function verifica_matricula_ja_inserida(numeroMatricula)
{
var matr = matriculas.find(function(matricula) {return matricula.Matricula === numeroMatricula});



return matr;
}

function limpar(){
    const inputs = document.querySelectorAll('#nome,#matricula,#ra');
    inputs.forEach(input =>{
      input.value ="";})
  }