import { Router } from 'express'
import productRoutes from '@modules/products/routes/products.routes';
import usersRoutes from '@modules/users/routes/users.routes';
import sessionsRoutes from '@modules/users/routes/users.routes';

const routes = Router();

routes.use('/products', productRoutes)
routes.use('/users', usersRoutes)
routes.use('/sessions', sessionsRoutes)

export default routes
