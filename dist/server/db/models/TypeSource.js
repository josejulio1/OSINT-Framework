"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TypeSource=void 0;var config_1=require("../config"),sequelize_1=require("sequelize");exports.TypeSource=config_1.sequelize.define("Type_Source",{type_source:{type:sequelize_1.STRING,allowNull:!1,primaryKey:!0}},{tableName:"Type_Source"});