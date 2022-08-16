import { Page } from '@playwright/test'

export default class RegisterFirstPage {
  page: Page

  constructor(page: Page) {
    this.page = page
  }

  async chooseClient() {
    await this.page.click('[data-pw="choose client registration"] a')
  }

  async chooseBrewer() {
    await this.page.click('[data-pw="choose brewer registration"] a')
  }
}
