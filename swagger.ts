import * as dotenv from "dotenv";
dotenv.config();

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'E-Commerce API',
    version: '1.0.0',
    description: 'This is a CRUD operation of a Product',
    contact: {
      name: "Karthik Balaji",
      url: `https://karthikbalaji-dev.web.app/`,
    },
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}/api`,
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['swagger.api.ts'],
};

export default options;
