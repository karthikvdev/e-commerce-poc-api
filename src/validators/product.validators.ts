import Joi from "joi";
import { IProduct, IProductId } from "../common/interface";
import { REGEX_PATTERNS } from "../common/constants";

export const createUpdateProductValidator = Joi.object<IProduct>({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().pattern(REGEX_PATTERNS.FULL_URL),
    category: Joi.string().required()
});

export const productIdValidator = Joi.object<IProductId>({
    id: Joi.string().required(),  
});