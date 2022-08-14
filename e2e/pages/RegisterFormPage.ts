import { Page } from '@playwright/test'

export default class RegisterFormPage {
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

  async fill(name: string | undefined, username: string | undefined, email: string | undefined, phoneNumber: string | undefined, password: string | undefined) {
    if (name) await this.fillName(name)
    if (username) await this.fillUsername(username)
    if (email) await this.fillEmail(email)
    if (phoneNumber) await this.fillPhoneNumber(phoneNumber)
    if (password) await this.fillPassword(password)
    await this.submit()
  }
}
