import jsonwebtoken from 'jsonwebtoken'

import { TokenData } from './generateUserJWT'

export function decodeJWT(jwt: string): TokenData {
  return jsonwebtoken.verify(jwt, process.env.JWT_SECRET as string || 'azertyuiop') as TokenData
}
