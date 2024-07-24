const database = require('./database')

const Devolucao = database.sequelize.define('devolucaos',{
    Descricao:{
        type: database.Sequelize.STRING(40),
        allowNull: false
    },
    Nome:{
        type: database.Sequelize.STRING(30),
        allowNull: false
    },
    Conservacao:{
        type: database.Sequelize.STRING(40),
        allowNull: false
    },
    Carencia:{
        type: database.Sequelize.DATEONLY,
        allowNull: false
    },
    Retorno:{
        type: database.Sequelize.DATEONLY,
        allowNull: false

    }

});

//Criar tabela:
//Devolucao.sync({force: true});

module.exports = Devolucao;