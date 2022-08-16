import { Page } from '@playwright/test'

import OnboardingHeaderComponent from '../components/OnboardingHeaderComponent'

export default class LoginFirstPage {
  page: Page
  header: OnboardingHeaderComponent

  constructor(page: Page) {
    this.page = page
    this.header = new OnboardingHeaderComponent(page)
  }

  async navigate() {
    await this.page.goto('/auth/login')
  }

  async chooseClient() {
    await this.page.click('[data-pw="choose client login"] a')
  }

  async chooseBrewer() {
    await this.page.click('[data-pw="choose brewer login"] a')
  }
}
