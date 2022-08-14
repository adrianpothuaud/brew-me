import { genSaltSync, hashSync } from 'bcrypt'

export function hashPassword(password: string): string {
  const salt = genSaltSync(parseInt(process.env.BCRYPT_ROUNDS as string) || 6)
  const hash = hashSync(password, salt)
  return hash
}
