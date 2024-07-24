const database = require('./database')

const Alunos = database.sequelize.define('alunos', {
      
    Nome:{
        type: database.Sequelize.STRING(40),
        allowNull: false
         },
    Matricula:{
        type: database.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
        
    },
    Ra:{
          type: database.Sequelize.INTEGER,
          allowNull: false
      }
      
});

//Sobreescreve tabela:
//Alunos.sync({force: true});


module.exports = Alunos;

