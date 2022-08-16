import { Brewer, Client } from '@prisma/client'
import jsonwebtoken from 'jsonwebtoken'

export type TokenData = {
  userId: number
  username: string
  role: string
}

export function generateUserJWT(user: Omit<Brewer, 'hash'> | Omit<Client, 'hash'>, role: string): string {
  const dataToEncode: TokenData = {
    userId: user.id,
    username: user.username,
    role,
  }
  const encoded = jsonwebtoken.sign(dataToEncode, process.env.JWT_SECRET as string || 'azertyuiop')
  return encoded
}
