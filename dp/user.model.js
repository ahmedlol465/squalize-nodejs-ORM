import { DataTypes } from "sequelize";
import { sql_config } from "./connection.js";
const user = sql_config.define('tbl_usernames', {
    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type:DataTypes.STRING(255),
        required: true
    },
    email: {
        type:DataTypes.STRING,
        unique: true
    },
    password: {
        type:DataTypes.STRING,
        required: true
    },
    age:{
        type:DataTypes.STRING(255),
        required: true
    },
    role: {
        type:DataTypes.ENUM('user', 'admin', 'manager'),
        defaultValue: 'user'
    }
},{
    timestamps: true      // createAt , updateAt  => datetime
})

export default user