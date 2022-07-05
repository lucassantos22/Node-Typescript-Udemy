import { Request, Response, NextFunction, request } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '@shared/errors/AppError';
import authConfig from '@config/auth';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function isAuthenticated(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new AppError('JWT Token is missing.')
  }

  // Bearer wdhwgqiugug (token)
  const [, token] = authHeader.split(' ')

  try {
    const decodedToken = verify(token, authConfig.jwt.secret)
    const { sub } = decodedToken as ITokenPayload
    req.user = {
      id: sub
    }
    next()
  } catch {
    throw new AppError('Invalid JWT Token.')
  }
}
