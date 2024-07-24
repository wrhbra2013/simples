//Conexão com banco de dados.
const database = require('./database')

const Servidores = database.sequelize.define('servidores',{
    Matricula: {
        type: database.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
            
    },
    Nome: {
        type: database.Sequelize.STRING(30),
        allowNull: false
    },
    Cargo: {
        type: database.Sequelize.STRING(30),
        allowNull: false

    },
    Telefone: {
        type: database.Sequelize.INTEGER,
        allowNull: false
    },
    Email: {
        type: database.Sequelize.STRING(50),
        allowNull: false
    }

}

);




//Criar Nova tabela. 
//Servidores.sync({force: true });




module.exports = Servidores; 