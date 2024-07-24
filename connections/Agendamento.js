const database = require('./database')

const Agendamento = database.sequelize.define('agendamentos',{
    Descricao:{
        type: database.Sequelize.STRING(30),
        allowNull: false
    },
    Nome:{
        type: database.Sequelize.STRING(30),
        allowNull: false
    },
    Local_Uso:{
        type: database.Sequelize.STRING(30),
        allowNull: false
    },
    Saida:{
        type: database.Sequelize.DATEONLY
    },
    Retorno:{
        type: database.Sequelize.DATEONLY
    }

});

//Criar tabela
//Agendamento.sync({force: true});

module.exports = Agendamento;

