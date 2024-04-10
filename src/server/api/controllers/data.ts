import { Request, Response } from "express";
import { Tag } from "../../db/models/Tag";
import { VSourceWebUrlTag } from "../../db/models/VSourceWebUrlTag";
import { Sequelize } from "sequelize";
import { Source } from "../../db/models/Source";

const GET_TAG_CONTROLLER = async (req: Request, res: Response) => {
    return res.json(await Tag.findAll());
}

const GET_TYPE_SOURCE_CONTROLLER = async (req: Request, res: Response) => {
    return res.json(await Source.findAll({
        attributes: ['type_source'],
        group: 'type_source'
    }));
}

type Filters = {
    puede_obtener: any,
    puede_buscar: any,
    type_source?: any
}

const SEARCH_SOURCE_CONTROLLER = async (req: Request, res: Response) => {
    const { tagObtener, tagBuscar, tipoFuente } = req.body;
    const filters: Filters = {
        puede_obtener: tagObtener,
        puede_buscar: tagBuscar
    }
    // Si tipoFuente no es null, quiere decir que el usuario quiere filtrar por web o por programa
    if (tipoFuente !== null) {
        filters.type_source = tipoFuente
    }
    return res.json(await VSourceWebUrlTag.findAll({
        where: Sequelize.and(filters)
    }))
}

export default {
    GET_TAG_CONTROLLER,
    GET_TYPE_SOURCE_CONTROLLER,
    SEARCH_SOURCE_CONTROLLER
}