export default function rmAuthData() {
  localStorage.removeItem('brew-me-user-id')
  localStorage.removeItem('brew-me-auth-token')
  localStorage.removeItem('brew-me-user-role')
}
