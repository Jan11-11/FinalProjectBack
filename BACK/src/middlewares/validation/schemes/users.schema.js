// NPM Modules
import Joi from 'joi';

//Local MOdules
import { ID } from './type';
import Status from '../../../enum/status.enum';



const UsersSchema = {

    getByIdSchema: {
        params: Joi.object({
            id: ID.required()
        })
    },

    addSchema: {
        body: Joi.object({
            fullname: Joi.string().min(3).max(155).required(),
            position: Joi.string().min(3).max(155).required(),
            picture: Joi.string().min(3).max(555).required()
        })
    },

    editSchema: {
        params: Joi.object({
            id: ID.required()
        }),
        body: Joi.object({
            fullname: Joi.string().min(3).max(55),
            position: Joi.string().min(3).max(55),
            picture: Joi.string().min(3).max(55),
            status: Joi.string().valid( ...Object.keys(Status))
        }).or(
            'fullname',
            'position',
            'picture',
            'status'
        )
    },
    

};

export default  UsersSchema;
