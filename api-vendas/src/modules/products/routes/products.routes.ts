import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'

import ProductsController from '../controllers/ProductsController'

const productRoutes = Router();
const productsController = new ProductsController()

productRoutes.get('/', productsController.index)

productRoutes.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required
    }
  }),
  productsController.show
)

productRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().precision(2).required(),
      quantity: Joi.number().required()
    }
  }),
  productsController.create
)

productRoutes.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().precision(2).required(),
      quantity: Joi.number().required()
    }
  }),
  productsController.update
)

productRoutes.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required
    }
  }),
  productsController.delete
)

export default productRoutes
