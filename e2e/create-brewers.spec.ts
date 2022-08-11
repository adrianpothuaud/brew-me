import { faker } from '@faker-js/faker'
import { expect, test } from '@playwright/test'

import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'

let homePage: HomePage
let registerPage: RegisterPage

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page)
  registerPage = new RegisterPage(page)
})

test('[Brewer registration][Nominal] A new Brewer is able to register for a Brew Me Brewer account', async ({ page }) => {
  await homePage.navigate()
  await expect(page).toHaveTitle(/Brew Me/)

  await homePage.header.goToRegisterPage()
  await expect(page).toHaveTitle(/Brew Me \| Brewer registration/)

  await registerPage.fill(faker.name.fullName(), faker.internet.userName(), faker.internet.email(), faker.phone.number(), faker.internet.password())
})
