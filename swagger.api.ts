/**
* @swagger
* /products:
*   post:
*     summary: Create an Product
*     tags: [Products]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               title:
*                 type: string
*                 example: 'Iphone'
*               price:
*                 type: integer
*                 example: 45000
*               description:
*                 type: string
*                 example: 'Iphone'
*               image:
*                 type: string
*                 example: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
*               category:
*                 type: string
*                 example: 'Mens Clothing'
*     responses:
*       200:
*         description: Created
*/

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /products/{productId}:
 *   get:
 *     summary: Get product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                title:
 *                 type: string
 *                 example: 'Iphone'
 *                price:
 *                 type: integer
 *                 example: 45000
 *                description:
 *                 type: string
 *                 example: 'Iphone'
 *                image:
 *                 type: string
 *                 example: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
 *                category:
 *                 type: string
 *                 example: 'Mens Clothing'
 *                createdAt:
 *                 type: string
 *                 example: '2024-06-07T22:03:52.951Z'
 *                updatedAt:
 *                 type: string
 *                 example: '2024-06-07T22:03:52.951Z'
 *                _id:
 *                 type: string
 *                 example: '666383c817f1c407c9f49200'
 * 
 */


/**
 * @swagger
  * /products/category/{category}:
 *   get:
 *     summary: Get product by Category
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: string
 *         required: true
 *         description: Category of the product
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                title:
 *                 type: string
 *                 example: 'Iphone'
 *                price:
 *                 type: integer
 *                 example: 45000
 *                description:
 *                 type: string
 *                 example: 'Iphone'
 *                image:
 *                 type: string
 *                 example: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
 *                category:
 *                 type: string
 *                 example: 'Mens Clothing'
 *                createdAt:
 *                 type: string
 *                 example: '2024-06-07T22:03:52.951Z'
 *                updatedAt:
 *                 type: string
 *                 example: '2024-06-07T22:03:52.951Z'
 *                _id:
 *                 type: string
 *                 example: '666383c817f1c407c9f49200'
 * 
 */


/**
 * @swagger
 * /products/{productId}:
 *   put:
 *     summary: Update product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: 'Iphone'
 *               price:
 *                 type: integer
 *                 example: 45000
 *               description:
 *                 type: string
 *                 example: 'Iphone'
 *               image:
 *                 type: string
 *                 example: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
 *               category:
 *                 type: string
 *                 example: 'Mens Clothing'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                title:
 *                 type: string
 *                 example: 'Iphone'
 *                price:
 *                 type: integer
 *                 example: 45000
 *                description:
 *                 type: string
 *                 example: 'Iphone'
 *                image:
 *                 type: string
 *                 example: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
 *                category:
 *                 type: string
 *                 example: 'Mens Clothing'
 *                createdAt:
 *                 type: string
 *                 example: '2024-06-07T22:03:52.951Z'
 *                updatedAt:
 *                 type: string
 *                 example: '2024-06-07T22:03:52.951Z'
 *                _id:
 *                 type: string
 *                 example: '666383c817f1c407c9f49200'
 * 
 */


/**
 * @swagger
 * /products/{productId}:
 *   delete:
 *     summary: Delete product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                statusCode:
 *                 type: integer
 *                 example: 200
 *                status:
 *                 type: string
 *                 example: "success"
 *                message:
 *                 type: string
 *                 example: 'Product deleted successfully'
 * 
 */