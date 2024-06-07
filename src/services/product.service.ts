import { CONSTANT_MESSAGE } from "../common/constants";
import { IApiResponse, IProduct, IUpdateProduct } from "../common/interface";
import ProductModel from "../models/product.model";
const objectId = require('mongodb').ObjectId;

export const createProductService = async (product: IProduct): Promise<IApiResponse<IProduct>> => {
    const response: IApiResponse = {
        statusCode: 400,
        status: CONSTANT_MESSAGE.STATUS.ERROR,
        message: CONSTANT_MESSAGE.MESSAGE.SOMETHING_WENT_WRONG,
        data: null
    };
    try {
        const createProduct = new ProductModel(product);
        const addedProduct = await createProduct?.save();
        response.status = CONSTANT_MESSAGE.STATUS.SUCCESS;
        response.message = CONSTANT_MESSAGE.PRODUCT.CREATED;
        response.data = addedProduct;
        response.statusCode = 200;
    } catch (error: any) {
        console.error('[ERROR]  in createProduct service', error?.message);
        response.data = error?.response?.data || error?.message;
    }
    return response;
}

export const getAllProductService = async (): Promise<IApiResponse<IProduct[]>> => {
    const response: IApiResponse = {
        statusCode: 400,
        status: CONSTANT_MESSAGE.STATUS.ERROR,
        message: CONSTANT_MESSAGE.MESSAGE.SOMETHING_WENT_WRONG,
        data: null
    };
    try {
        const getAllProduct = await ProductModel.find();
        response.status = CONSTANT_MESSAGE.STATUS.SUCCESS;
        response.message = CONSTANT_MESSAGE.PRODUCT.GET;
        response.data = getAllProduct;
        response.statusCode = 200;
    } catch (error: any) {
        console.error('[ERROR]  in getAllProduct service', error?.message);
        response.data = error?.response?.data || error?.message;
    }
    return response;
}

export const getProductByIdService = async (productId: string): Promise<IApiResponse<IProduct>> => {
    const response: IApiResponse = {
        statusCode: 400,
        status: CONSTANT_MESSAGE.STATUS.ERROR,
        message: CONSTANT_MESSAGE.MESSAGE.SOMETHING_WENT_WRONG,
        data: null
    };
    try {
        const product = await ProductModel.findOne({ _id: new objectId(productId) });
        response.status = CONSTANT_MESSAGE.STATUS.SUCCESS;
        response.message = CONSTANT_MESSAGE.PRODUCT.GET;
        response.data = product;
        response.statusCode = 200;
    } catch (error: any) {
        console.error('[ERROR]  in getProductById service', error?.message);
        response.data = error?.response?.data || error?.message;
    }
    return response;
}

export const getProductByCategoryService = async (category: string): Promise<IApiResponse<IProduct[]>> => {
    const response: IApiResponse = {
        statusCode: 400,
        status: CONSTANT_MESSAGE.STATUS.ERROR,
        message: CONSTANT_MESSAGE.MESSAGE.SOMETHING_WENT_WRONG,
        data: null
    };
    try {
        const product = await ProductModel.find({ category });
        response.status = CONSTANT_MESSAGE.STATUS.SUCCESS;
        response.message = CONSTANT_MESSAGE.PRODUCT.GET;
        response.data = product;
        response.statusCode = 200;
    } catch (error: any) {
        console.error('[ERROR]  in getProductByCategory service', error?.message);
        response.data = error?.response?.data || error?.message;
    }
    return response;
}

export const updateProductService = async (product: IUpdateProduct): Promise<IApiResponse<IProduct>> => {
    const response: IApiResponse = {
        statusCode: 400,
        status: CONSTANT_MESSAGE.STATUS.ERROR,
        message: CONSTANT_MESSAGE.MESSAGE.SOMETHING_WENT_WRONG,
        data: null
    };
    try {
        const { id, ...rest } = product;
        const updatedProduct = await ProductModel.findOneAndUpdate({ _id: new objectId(id) }, { ...rest }, { returnDocument: "after" });
        if (!updatedProduct) {
            response.message = CONSTANT_MESSAGE.PRODUCT.NOT_FOUND;
            return response;
        }
        response.status = CONSTANT_MESSAGE.STATUS.SUCCESS;
        response.message = CONSTANT_MESSAGE.PRODUCT.UPDATED;
        response.data = updatedProduct;
        response.statusCode = 200;
    } catch (error: any) {
        console.error('[ERROR]  in updateProductService service', error?.message);
        response.data = error?.response?.data || error?.message;
    }
    return response;
}

export const deleteProductService = async (productId: string): Promise<IApiResponse<IProduct>> => {
    const response: IApiResponse = {
        statusCode: 400,
        status: CONSTANT_MESSAGE.STATUS.ERROR,
        message: CONSTANT_MESSAGE.MESSAGE.SOMETHING_WENT_WRONG,
        data: undefined
    };
    try {
        const deletedProduct = await ProductModel.deleteOne({ _id: new objectId(productId) });
        response.status = deletedProduct?.deletedCount ? CONSTANT_MESSAGE.STATUS.SUCCESS : CONSTANT_MESSAGE.STATUS.ERROR;
        response.message = deletedProduct?.deletedCount ? CONSTANT_MESSAGE.PRODUCT.DELETED : CONSTANT_MESSAGE.PRODUCT.NOT_FOUND;
        response.statusCode = deletedProduct?.deletedCount ? 200 : 400;
    } catch (error: any) {
        console.error('[ERROR]  in deleteProductService service', error?.message);
        response.data = error?.response?.data || error?.message;
    }
    return response;
}