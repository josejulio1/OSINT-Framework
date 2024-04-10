import { sequelize } from "../config";
import { STRING } from "sequelize";

export const Tag = sequelize.define('Tag', {
    tag_name: {
        type: STRING,
        allowNull: false,
        primaryKey: true
    }
}, {
    tableName: 'Tag'
})