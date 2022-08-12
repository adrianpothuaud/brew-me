import { Page } from '@playwright/test'

export default class RegisterPage {
  page: Page

  constructor(page: Page) {
    this.page = page
  }

  async fillName(name: string) {
    await this.page.fill('[data-pw="name field"]', name)
  }

  async fillUsername(username: string) {
    await this.page.fill('[data-pw="username field"]', username)
  }

  async fillEmail(email: string) {
    await this.page.fill('[data-pw="email field"]', email)
  }

  async fillPhoneNumber(phoneNumber: string) {
    await this.page.fill('[data-pw="phone number field"]', phoneNumber)
  }

  async fillPassword(password: string) {
    await this.page.fill('[data-pw="password field"]', password)
  }

  async submit() {
    await this.page.click('[data-pw="submit registration button"]')
  }

  async fill(name: string, username: string, email: string, phoneNumber: string, password: string) {
    await this.fillName(name)
    await this.fillUsername(username)
    await this.fillEmail(email)
    await this.fillPhoneNumber(phoneNumber)
    await this.fillPassword(password)
    await this.submit()
  }
}
