import { Page } from "@playwright/test";

class OnboardingHeaderComponent {
  page: Page

  constructor(page: Page) {
    this.page = page;
  }

  async goToRegisterPage() {
    await this.page.click('a[data-pw="register as brewer link"]')
  }
}

export default OnboardingHeaderComponent