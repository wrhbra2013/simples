let servidores = [];

 function pesquisa(){
     var f_servidores = window.document.getElementById("form_busca").value;
          
     if(servidores == null){
        var table = document.getElementById("servidores");
        var row = table.insertRow(-1); // será adicionado na última linha
        var servidoresCell = row.insertCell(0); //indice da linha.    
       
        servidoresCell.innerHTML = f_servidores;

        window.alert("Busca realizada com suceso.")
        servidores.push({F_Servidores: f_servidores});
 
    }       
  };

 