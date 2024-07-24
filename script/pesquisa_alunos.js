let list = [];

 function pesquisa(){
     var f_list = window.document.getElementById("form_busca").value;
     

     
     if(list == null){
        var table = document.getElementById("list");
        var row = table.insertRow(-1); // será adicionado na última linha
        var listCell = row.insertCell(0); //indice da linha.    
       
        listCell.innerHTML = f_list;
        
        window.alert("Busca realizada com suceso.")
        list.push({List: f_list});
 
    }  
      
  };

 