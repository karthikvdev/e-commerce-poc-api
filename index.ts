import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import routes from './src/routes/route'
import { dbConnection } from "./src/connections/dbConnection";
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerOptions from './swagger';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/api", routes);

const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


app.get("/api/", async (req: Request, res: Response) => {
    res.send({ status: "success" })
});


app.listen(port, async () => {
    console.log(`Express server started at Port - ${port}`);
    await dbConnection();
});

