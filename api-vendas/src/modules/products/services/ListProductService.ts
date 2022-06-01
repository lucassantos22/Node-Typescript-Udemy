import { getCustomRepository } from "typeorm";

import Product from "../typeorm/entities/Product";
import { ProductRepository } from "../typeorm/repositories/ProductsRepository";

export default class ListProductService {
  public execute (): Promise<Array<Product>> {
    const productsRepository = getCustomRepository(ProductRepository)

    const products = productsRepository.find()

    return products;
  }
}
