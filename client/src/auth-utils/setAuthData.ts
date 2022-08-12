export default function setAuthData(userId: number, token: string, role: string) {
  localStorage.setItem('brew-me-user-id', userId.toString())
  localStorage.setItem('brew-me-auth-token', token)
  localStorage.setItem('brew-me-user-role', role)
}
