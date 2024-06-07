import Router from "express-promise-router";
import productController from "../controllers/product.controller";

const router = Router();

router.use("/products", productController);

export default router;
