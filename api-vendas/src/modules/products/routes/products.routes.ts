import { Router } from 'express'
import ProductsController from '../controllers/ProductsController'

const productRoutes = Router();
const productsController = new ProductsController()

productRoutes.get('/', productsController.index)
productRoutes.get('/:id', productsController.show)
productRoutes.post('/', productsController.create)
productRoutes.put('/:id', productsController.update)
productRoutes.delete('/:id', productsController.delete)

export default productRoutes
