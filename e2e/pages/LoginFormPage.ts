import { Page } from '@playwright/test'

import OnboardingHeaderComponent from '../components/OnboardingHeaderComponent'

export default class LoginFormPage {
  page: Page
  header: OnboardingHeaderComponent

  constructor(page: Page) {
    this.page = page
    this.header = new OnboardingHeaderComponent(page)
  }

  async navigate(as: string) {
    await this.page.goto('/auth/login/' + as)
  }

  async fillUsername(username: string) {
    await this.page.fill('[data-pw="username field"]', username)
  }

  async fillPassword(password: string) {
    await this.page.fill('[data-pw="password field"]', password)
  }

  async submit() {
    await this.page.click('[data-pw="submit login button"]')
  }

  async fill(username: string | undefined, password: string | undefined) {
    if (username) await this.fillUsername(username)
    if (password) await this.fillPassword(password)
    await this.submit()
  }
}
