let results = [];
function consultar(){
    let useremail = window.document.getElementById('form_email').value;
    let usersenha =  window.document.getElementById('form_senha').value;

    
        if (results != null){
           window.alert('Usuario Autorizado.');
           results.push({Email: useremail, Senha: usersenha})    
           
        }else {
            window.alert('Usuário NÃO esta autorizado.');
        };


     };
   

   
   //Funçoes Acessibiliadade
    function contrast(){
        document.body.style.backgroundColor="black";
        document.getElementsByClassName('login').style.color="white";
    };
    function font_mais(){
        document.getElementsByClassName('login').style.fontSize="30px"

    };	
    function font_menos(){
        document.getElementsByClassName('login').style.fontSize="10px"

    };
