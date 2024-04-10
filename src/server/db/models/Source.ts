import { sequelize } from "../config";
import { STRING } from "sequelize";

export const Source = sequelize.define('Source', {
    web_url: {
        type: STRING,
        allowNull: false,
        primaryKey: true
    },
    image_path: {
        type: STRING,
        allowNull: false
    },
    type_source: {
        type: STRING,
        allowNull: false
    }
}, {
    tableName: 'Source',
})