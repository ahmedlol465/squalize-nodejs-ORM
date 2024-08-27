import { DataTypes } from "sequelize";
import { sql_config } from "./connection.js";
import user from "./user.model.js";
import { FOREIGNKEYS } from "sequelize/types/query-types.js";

export const Note = sql_config.define('Note', {
    id: {
        type: String,
        autoIncrement: true,
        primaryKey: true
    },
    tittle: {
        tittle: {
            type: String,
        },
        content: {
            type: String
        }
    }
})

user.hasMany(Note, {foreignKey: "userId"})  // user can make alot notes 
Note.belongsTo(user, { foreignKey: "userId" }); // note for one person 
