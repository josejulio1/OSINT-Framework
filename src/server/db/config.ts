import { Sequelize } from "sequelize";

const dotenv = require('dotenv');
dotenv.config();
const DB_NAME = process.env.DB_NAME!;
const DB_HOST = process.env.DB_HOST!;
const DB_PORT = (process.env.DB_PORT! as unknown) as number;
const DB_USER = process.env.DB_USER!;
const DB_PASSWORD = process.env.DB_PASSWORD!;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})

sequelize.authenticate()
    .then(() => console.log('Se ha establecido la conexión a la base de datos correctamente'))
    .catch(error => console.log(`Se produjo un error: ${error}`))