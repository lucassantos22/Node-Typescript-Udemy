import { getCustomRepository } from "typeorm";

import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UserRepository";

export default class ListUserService {
  public async execute (): Promise<Array<User>> {
    const userRepository = getCustomRepository(UsersRepository)

    return await userRepository.find()
  }
}
