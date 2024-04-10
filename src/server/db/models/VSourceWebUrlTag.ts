import { sequelize } from "../config";
import { STRING } from "sequelize";

export const VSourceWebUrlTag = sequelize.define('V_Source_Web_Url_Tag', {
    name: {
        type: STRING,
        allowNull: false,
        primaryKey: true
    },
    web_url: {
        type: STRING,
        allowNull: true
    },
    image_path: {
        type: STRING,
        allowNull: true
    },
    type_source: {
        type: STRING,
        allowNull: true
    },
    puede_buscar: {
        type: STRING,
        allowNull: false
    },
    puede_obtener: {
        type: STRING,
        allowNull: false
    }
}, {
    tableName: 'V_Source_Web_Url_Tag'
});