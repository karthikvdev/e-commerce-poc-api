import Router from "express-promise-router";
import { Response } from "express";
import { CONSTANT_MESSAGE } from "../common/constants";
import { IApiRequest, IProduct, IProductId, IUpdateProduct } from "../common/interface";
import { createProductService, deleteProductService, getAllProductService, getProductByCategoryService, getProductByIdService, updateProductService } from "../services/product.service";
import { createUpdateProductValidator, productIdValidator } from "../validators/product.validators";

const router = Router();

router.post("/", async (req: IApiRequest<IProduct>, res: Response) => {
    try {
        await createUpdateProductValidator.validateAsync(req?.body);
        const createProduct = await createProductService(req?.body);
        return res.status(createProduct?.statusCode).send(createProduct);
    } catch (error: any) {
        console.error('[ERROR] in createProduct controller: ', error);
        return res.status(401).send({ statusCode: 401, status: CONSTANT_MESSAGE.STATUS.ERROR, message: error.message });
    }
});


router.get("/", async (req: IApiRequest, res: Response) => {
    try {
        const getAllProduct = await getAllProductService();
        return res.status(getAllProduct?.statusCode).send(getAllProduct);
    } catch (error: any) {
        console.error('[ERROR] in getAllProducts controller: ', error);
        return res.status(401).send({ statusCode: 401, status: CONSTANT_MESSAGE.STATUS.ERROR, message: error.message });
    }
});

router.get("/:id", async (req: IApiRequest<undefined, IProductId>, res: Response) => {
    try {
        await productIdValidator.validateAsync(req?.params);
        const getProductById = await getProductByIdService(req?.params?.id);
        return res.status(getProductById?.statusCode).send(getProductById);
    } catch (error: any) {
        console.error('[ERROR] in getProductById controller: ', error);
        return res.status(401).send({ statusCode: 401, status: CONSTANT_MESSAGE.STATUS.ERROR, message: error.message });
    }
});


router.get("/category/:id", async (req: IApiRequest<undefined, IProductId>, res: Response) => {
    try {
        await productIdValidator.validateAsync(req?.params);
        const getProductByCategory = await getProductByCategoryService(req?.params?.id);
        return res.status(getProductByCategory?.statusCode).send(getProductByCategory);
    } catch (error: any) {
        console.error('[ERROR] in getProductByCategory controller: ', error);
        return res.status(401).send({ statusCode: 401, status: CONSTANT_MESSAGE.STATUS.ERROR, message: error.message });
    }
});

router.put("/:id", async (req: IApiRequest<IProduct, IProductId>, res: Response) => {
    try {
        await productIdValidator.validateAsync(req?.params);
        const payload: IUpdateProduct = {
            id: req?.params?.id,
            ...req?.body
        }
        const updateProduct = await updateProductService(payload);
        return res.status(updateProduct?.statusCode).send(updateProduct);
    } catch (error: any) {
        console.error('[ERROR] in updateProduct controller: ', error);
        return res.status(401).send({ statusCode: 401, status: CONSTANT_MESSAGE.STATUS.ERROR, message: error.message });
    }
});

router.delete("/:id", async (req: IApiRequest<undefined, IProductId>, res: Response) => {
    try {
        await productIdValidator.validateAsync(req?.params);
        const deleteProduct = await deleteProductService(req?.params?.id);
        return res.status(deleteProduct?.statusCode).send(deleteProduct);
    } catch (error: any) {
        console.error('[ERROR] in deleteProduct controller: ', error);
        return res.status(401).send({ statusCode: 401, status: CONSTANT_MESSAGE.STATUS.ERROR, message: error.message });
    }
});

export default router;