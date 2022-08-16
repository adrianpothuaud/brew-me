import { Page } from '@playwright/test'

class OnboardingHeaderComponent {
  page: Page

  constructor(page: Page) {
    this.page = page
  }

  async goToLoginPage() {
    await this.page.click('a[data-pw="login link"]')
  }

  async goToRegisterPage() {
    await this.page.click('a[data-pw="register link"]')
  }
}

export default OnboardingHeaderComponent
