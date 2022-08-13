import { faker } from '@faker-js/faker'
import { expect, test } from '@playwright/test'

import HomePage from '../pages/HomePage'
import RegisterFirstPage from '../pages/RegisterFirstPage'
import RegisterPage from '../pages/RegisterPage'

let homePage: HomePage
let registerFirstPage: RegisterFirstPage
let registerPage: RegisterPage

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page)
  registerFirstPage = new RegisterFirstPage(page)
  registerPage = new RegisterPage(page)
})

test(`
[Brewer registration][Nominal] ✅
A new Brewer is able to register for a Brew Me Brewer account
And after registration he is logged in and redirected to his dashboard
`,
async ({ page }) => {
  await homePage.navigate()
  await expect(page).toHaveTitle(/Brew Me/)

  await homePage.header.goToRegisterPage()
  await expect(page).toHaveTitle(/Brew Me \| Registration/)

  await registerFirstPage.chooseBrewer()
  await expect(page).toHaveTitle(/Brew Me \| Brewer registration/)

  await registerPage.fill(faker.name.fullName(), faker.internet.userName(), faker.internet.email(), faker.phone.number('06########'), faker.internet.password())
  await expect(page).toHaveTitle(/Brew Me \| Brewer home/)
})

test(`
[Brewer registration][Error][Name required] 🔴
A new Brewer is not able to register for a Brew Me Brewer account without prividing a name
And after submit he is warned on the required field
`,
async ({ page }) => {
  await homePage.navigate()
  await expect(page).toHaveTitle(/Brew Me/)

  await homePage.header.goToRegisterPage()
  await expect(page).toHaveTitle(/Brew Me \| Registration/)

  await registerFirstPage.chooseBrewer()
  await expect(page).toHaveTitle(/Brew Me \| Brewer registration/)

  await registerPage.fill(undefined, faker.internet.userName(), faker.internet.email(), faker.phone.number('06########'), faker.internet.password())
  await expect(page).toHaveTitle(/Brew Me \| Brewer registration/)

  await expect(page.locator('[data-pw="name error"]')).toHaveText('field is required')
})
