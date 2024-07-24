
const database = require('./database');





const Login = database.sequelize.define('logins',{
    
    Email:{

        type: database.Sequelize.STRING(50),
        allowNull: false
        
         },
    Senha:{
        type: database.Sequelize.STRING(20),
          }

});

//Login.hasOne(Servidores,{foreignKey:'Email'});




//Sobrescrever tabela.
//Login.sync({force: true});

//Usuario padrão
//Login.create({
//    Email: 'admin',
//    Senha: 'admin'
//});



module.exports = Login;