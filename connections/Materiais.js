const database = require('./database')

const Materiais = database.sequelize.define('materiais',{
    Ativo:{
        type: database.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Descricao:{
        type: database.Sequelize.STRING(50),
        allowNull: false
    },
    Periferico:{
        type: database.Sequelize.STRING(40),
    },
    Avarias:{
        type: database.Sequelize.STRING(50)
    }
})

//Criar tabela
//Materiais.sync({force: true});

module.exports = Materiais;