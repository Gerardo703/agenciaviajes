import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({path:"variables.env"});

// Configuración sequelize

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool:{
        max: 5,
        min: 0,
        acequire: 3000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;