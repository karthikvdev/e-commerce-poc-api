import { Request } from "express";

export type IApiResponse<T = any | null> = {
    data?: T,
    statusCode: number,
    status: string,
    message?: string,
};

export interface IApiRequest<Body = any, Param = string | string[] | any, Query = any, ResponseBody = any> extends Request<Param, ResponseBody, Body, Query> {
    [key: string]: any,
};


export interface IProduct {
    title: string,
    price: number,
    description: string,
    image: string,
    category: string
}

export interface IProductId {
    id: string
}

export interface IUpdateProduct extends IProduct, IProductId { }

export interface ICategory {
    name: string
}