import { Schema, model } from 'mongoose';
import { IProduct } from '../common/interface';

const productSchema = new Schema<IProduct>(
    {
        title: {
            type: String
        },
        price: {
            type: Number
        },
        description: {
            type: String
        },
        image: {
            type: String
        },
        category: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);

const ProductModel = model<IProduct>("products", productSchema, "products");
export default ProductModel;