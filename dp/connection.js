import { Sequelize } from "sequelize";             

export const sql_config = new Sequelize('sql-2', 'root', '', {  // name database, name user , password, 
host: 'localhost',
dialect: 'mysql'
});
    // firing for the connection to edit in data base 
export const database = async () => {
await sql_config.sync({alter:true,force:false})   // alter for kisten in database if i edite in vs conde 
// force for dosnt drop database and make it from new (false)
    .then(res => console.log('db connection is success'))
    .catch((err) => console.log('connection failed', err));
};
