//Modulos essenciais APP

const express = require('express'); //framework
const body = require('body-parser'); //server side input html
const alert =  require('alert'); //server side window.alert
const session = require('express-session'); //Autentication


//Start express app 
const app = express();
const path = require('path');


//Modulos das tabelas SQL
const Login = require('./connections/Login')
const Servidores = require('./connections/Servidores')
const Alunos = require('./connections/Alunos')
const Materiais = require('./connections/Materiais')
const Agendamento = require('./connections/Agendamento')
const Devolucao = require('./connections/Devolucao')


//Diretorio de models.
const database = require('./connections/database');



//porta servidor heroku
//const port = process.env.PORT || 8080;
//serivodor localhost
const port = 7000;





//app express config
app.use(session({
   secret: 'secret',
   resave: true,
   saveUninitialized: true
}));




//body-parser: javascript HTML support
app.use(body.json());
app.use(body.urlencoded({extended: false}));

//Carregar diretorios
app.use(express.static(__dirname, + '/static/css'));
app.use(express.static(__dirname,+'/script'));
app.use(express.static(__dirname, + '/views'));
app.use(express.static(__dirname, +'/connections'));

//Engine para dados dinamicos
app.set('view engine', 'ejs');
app.set('views', './views');

//Ativar Case sensitive
app.set('case sensitive routing', true);




//Rotas GET
app.get('/', function(req, res) {
    res.render('login');
});

app.get('/sobre', function(req, res) {
   res.render('sobre');
});

app.get('/logout', function(req, res) {
   res.render('logout');
});


app.get('/menu', function(req, res){
   if(req.session.loggedin){
      res.render('menu')
   }else(
      res.render('login')
   )
});


app.get('/login', function( req, res) {
   res.render('login')
 
 });

 app.get('/novo', function( req, res) {
   res.render('novo')
  });



 
app.get('/servidores', function(req,res) {
   res.render('servidores')

});

app.get('/alunos', function(req, res){
   res.render('alunos')
});

app.get('/materiais', function(req,res) {
    res.render('materiais')
 })

 app.get('/agendamento', function(req,res) {
    res.render('agendamento')
 });

 app.get('/devolucao', function(req,res) {
    res.render('devolucao')
 });

 
 app.get('/pesquisa_servidores', function(req, res) {
   Servidores.findAll().then(function(servidores){
      res.render('pesquisa_servidores', {servidores:servidores})
 })
   });
    

 app.get('/pesquisa_alunos', function(req, res) {
   Alunos.findAll().then(function(alunos){
      res.render('pesquisa_alunos',{alunos:alunos})

   })  
   });
 app.get('/pesquisa_materiais', function(req, res) {
   Materiais.findAll().then(function(materiais){
      res.render('pesquisa_materiais',{materiais:materiais})

   })  
      });
   app.get('/pesquisa_agendamento', function(req, res) {
      Agendamento.findAll().then(function(agendamentos){
         res.render('pesquisa_agendamento',{agendamentos:agendamentos})
   
      })  
   });
   app.get('/pesquisa_devolucao', function(req, res) {
      Devolucao.findAll().then(function(devolucao){
         res.render('pesquisa_devolucao',{devolucao:devolucao})
   
      })  
   });
  
 app.get('/error', function(req,res){
   res.render('error')
});
 
 //Rotas POST
 //Tabelas SQL
app.post('/Servidores', function(req, res){
   Servidores.create({
      Matricula: req.body.form_matricula,
      Nome: req.body.form_nome,
      Cargo: req.body.form_cargo,
      Telefone: req.body.form_tel,
      Email: req.body.form_email
      
   }).then(function(){
      console.log('Servidor gravado')
      
   }).catch(function(error){
      res.render('error',{error: error})
       })

   });

   app.post('/Alunos', function(req,res){
      Alunos.create({
         Nome: req.body.nome,
         Matricula: req.body.matricula,
         Ra: req.body.ra
         
      }).then(function(){
         console.log('Aluno gravado.')



      }).catch(function(error){
         res.render('error',{error: error})
       

      })
   });

   app.post('/Materiais', function(req, res){
      Materiais.create({
         Ativo: req.body.form_ativo,
         Descricao: req.body.form_descricao,
         Periferico: req.body.form_periferico,
         Avarias: req.body.form_avarias

      }).then(function(){
         console.log('Material Gravado')
     

      }).catch(function(error){
         res.render('error',{error: error})             

      })
   });

   app.post('/Agendamento', function(req,res){
      Agendamento.create({
         Descricao: req.body.form_descricao,
         Nome: req.body.form_nome,
         Local_Uso: req.body.form_local_uso,
         Saida: req.body.form_saida,
         Retorno: req.body.form_retorno

      }).then(function(){
         console.log('Agendamento Gravado')

      }).catch(function(error){
         res.render('error',{error: error})        
              
      })
   });

   app.post('/Devolucao', function(req,res){
      Devolucao.create({
         Descricao: req.body.form_descricao,
         Nome: req.body.form_nome,
         Conservacao: req.body.form_conservacao,
         Carencia: req.body.form_carencia,
         Retorno: req.body.form_retorno

      }).then(function(){
         console.log('Devolução Gravada')     

      }).catch(function(error){
         res.render('error',{error: error})

      })

   });

   //Pesquisas

   app.post('/pesquisa_servidores', function(req, res) {
      Servidores.findAll({ 
         where:{
             //Nome: %${req.body.form_busca}            
             Nome: req.body.form_busca
                      
      }}).then(function(servidores){
         res.render('pesquisa_servidores',{servidores: servidores})
         console.log(servidores)
             
        }).catch(function(error){
         res.render('error',{error: error})         
       });
      });
                
   

   app.post('/pesquisa_alunos', function(req,res){
      Alunos.findAll({
        where: {
           Nome: req.body.form_busca
        }}).then(function(alunos){
           res.render('pesquisa_alunos',{alunos: alunos})

        }).catch(function(error){
         res.render('error',{error: error})
        })
         
  });

 

  app.post('/pesquisa_materiais', function(req,res){
   Materiais.findAll({
     where: {
        Descricao: req.body.form_busca
     }}).then(function(materiais){
        res.render('materiais',{materiais: materiais})

     }).catch(function(error){
      res.render('error',{error: error})
  })

      
});

app.post('/pesquisa_agendamento', function(req,res){
   Agendamento.findAll({
     where: {
        Descricao:  req.body.form_busca
     }}).then(function(agendamentos){
      res.render('pesquisa_agendamento',{agendamentos: agendamentos})

   }).catch(function(error){
    res.render('error',{error: error})
   })      
});

app.post('/pesquisa_devolucao', function(req,res){

   Devolucao.findAll({
     where: {
        Descricao: req.body.form_busca
     }}).then(function(devolucao){
      res.render('pesquisa_devolucao',{devolucao: devolucao})

   }).catch(function(error){
    res.render('error',{error: error})
   })
      
});
//autenticação
app.post('/login',  function(req, res) {
   //Checar se o usuáio existe.
   let useremail = req.body.f_email;
   let usersenha = req.body.f_senha;
   
   Login.findAll({
     where:{
      Email: useremail,
      Senha: usersenha
    }})
    .then(function(results){
        if(results == true){
            
            req.session.loggedin = true;
            req.session.useremail = useremail;
            res.render('menu');
         }else{
            res.render('login');
         }
        
      }).catch(function(error){
         res.render('error',{error: error})

      })        
});


app.post('/novo',  function(req, res){
   //Objeto novo usuario
     Login.create({
      Email: req.body.f_email,
      Senha: req.body.f_confirme_nova_senha

     }).then(function(){
      res.render('login')
      console.log('Novo cadastro incluso.')
     }).catch(function(error){
      res.render('error',{error: error})
     })
        
});

  

//Carregar app
//banco de dados sem sobrescrita;
   database.sequelize.sync().then(()=> {
// banco de dados com sobrescrita;
//database.sequelize.sync({force: true}).then((req)=> {
   app.listen(port, () => {
      console.log(`App rodando com banco de dados carregado em http://localhost:${port}.`);
     
    })
   });
