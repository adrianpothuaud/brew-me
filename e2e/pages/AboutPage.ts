import { Page } from '@playwright/test'

import OnboardingHeaderComponent from '../components/OnboardingHeaderComponent'

export default class AboutPage {
  page: Page
  header: OnboardingHeaderComponent

  constructor(page: Page) {
    this.page = page
    this.header = new OnboardingHeaderComponent(page)
  }

  async navigate() {
    await this.page.goto('/about')
  }
}
