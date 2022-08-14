import { compareSync } from 'bcrypt'

export function verifyPassword(userHash: string, passwordCandidate: string): boolean {
  return compareSync(passwordCandidate, userHash)
}
