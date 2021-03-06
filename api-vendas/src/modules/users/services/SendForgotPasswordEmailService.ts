import { getCustomRepository } from "typeorm";

import AppError from "@shared/errors/AppError";
import UsersRepository from "../typeorm/repositories/UserRepository";
import UserTokensRepository from "../typeorm/repositories/UserTokensRepository";

interface IRequest {
  email: string;
}

export default class SendForgotPasswordEmailService {
  public async execute ({ email }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository)
    const userTokensRepository = getCustomRepository(UserTokensRepository)

    const user = await usersRepository.findByEmail(email)
    if (!user) {
      throw new AppError('User does not exists.')
    }

    const token = await userTokensRepository.generate(user.id)
    console.log(token)
  }
}
