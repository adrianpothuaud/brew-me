import { compareSync } from 'bcrypt'

export default function verifyPassword(userHash: string, passwordCandidate: string): boolean {
  return compareSync(passwordCandidate, userHash)
}
