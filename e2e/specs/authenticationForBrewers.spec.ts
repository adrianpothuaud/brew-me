import { Brewer, createNewBrewer } from '@brew-me/services'
import { faker } from '@faker-js/faker'
import { expect, test } from '@playwright/test'
import { toTextCase } from 'js-convert-case'

import HomePage from '../pages/HomePage'
import LoginFirstPage from '../pages/LoginFirstPage'
import LoginFormPage from '../pages/LoginFormPage'

let homePage: HomePage
let loginFirstPage: LoginFirstPage
let loginFormPage: LoginFormPage

let existingBrewer: Omit<Brewer, 'hash'>

test.describe('Authentication for Brewers', () => {
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    loginFirstPage = new LoginFirstPage(page)
    loginFormPage = new LoginFormPage(page)

    existingBrewer = await createNewBrewer({
      name: faker.name.fullName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: 'password',
      phoneNumber: faker.phone.number('06########'),
    }) as Omit<Brewer, 'hash'>
  })

  test('Nominal case', async ({ page }) => {
    await homePage.navigate()
    await expect(page).toHaveTitle(/Brew Me/)

    await homePage.header.goToLoginPage()
    await expect(page).toHaveTitle(/Brew Me \| Login/)

    await loginFirstPage.chooseBrewer()
    await expect(page).toHaveTitle(/Brew Me \| Brewer login/)

    await loginFormPage.fill(existingBrewer.username, 'password')
    await expect(page).toHaveTitle(/Brew Me \| Brewer home/)
  })

  test.describe('Required fields', () => {
    const requiredParameters = [
      'username',
      'password',
    ]
    for (const parameter of requiredParameters) {
      test(`${parameter}`,
        async ({ page }) => {
          await homePage.navigate()
          await expect(page).toHaveTitle(/Brew Me/)

          await homePage.header.goToLoginPage()
          await expect(page).toHaveTitle(/Brew Me \| Login/)

          await loginFirstPage.chooseBrewer()
          await expect(page).toHaveTitle(/Brew Me \| Brewer login/)

          await loginFormPage.fill(
            parameter === 'username' ? undefined : faker.internet.userName(),
            parameter === 'password' ? undefined : faker.internet.password(),
          )
          await expect(page).toHaveTitle(/Brew Me \| Brewer login/)

          await expect(page.locator(`[data-pw="${toTextCase(parameter)} error"]`)).toHaveText('field is required')
        })
    }
  })

  test('Not found', async ({ page }) => {
    await homePage.navigate()
    await expect(page).toHaveTitle(/Brew Me/)

    await homePage.header.goToLoginPage()
    await expect(page).toHaveTitle(/Brew Me \| Login/)

    await loginFirstPage.chooseBrewer()
    await expect(page).toHaveTitle(/Brew Me \| Brewer login/)

    await loginFormPage.fill(
      'another_username',
      'password',
    )
    await expect(page).toHaveTitle(/Brew Me \| Brewer login/)

    await expect(page.locator('[data-pw="username error"]')).toHaveText('not found')
  })

  test('Bad password', async ({ page }) => {
    await homePage.navigate()
    await expect(page).toHaveTitle(/Brew Me/)

    await homePage.header.goToLoginPage()
    await expect(page).toHaveTitle(/Brew Me \| Login/)

    await loginFirstPage.chooseBrewer()
    await expect(page).toHaveTitle(/Brew Me \| Brewer login/)

    await loginFormPage.fill(
      existingBrewer.username,
      'bad_password',
    )
    await expect(page).toHaveTitle(/Brew Me \| Brewer login/)

    await expect(page.locator('[data-pw="password error"]')).toHaveText('bad password')
  })
})
