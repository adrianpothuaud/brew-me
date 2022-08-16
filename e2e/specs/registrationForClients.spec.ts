import { Client, createNewClient, CreateNewClientInput } from '@brew-me/services'
import { faker } from '@faker-js/faker'
import { expect, test } from '@playwright/test'
import { toTextCase } from 'js-convert-case'

import HomePage from '../pages/HomePage'
import RegisterFirstPage from '../pages/RegisterFirstPage'
import RegisterFormPage from '../pages/RegisterFormPage'

let homePage: HomePage
let registerFirstPage: RegisterFirstPage
let registerFormPage: RegisterFormPage

test.describe('Registration for Clients', () => {
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    registerFirstPage = new RegisterFirstPage(page)
    registerFormPage = new RegisterFormPage(page)
  })

  test('Nominal case', async ({ page }) => {
    await homePage.navigate()
    await expect(page).toHaveTitle(/Brew Me/)

    await homePage.header.goToRegisterPage()
    await expect(page).toHaveTitle(/Brew Me \| Registration/)

    await registerFirstPage.chooseClient()
    await expect(page).toHaveTitle(/Brew Me \| Client registration/)

    await registerFormPage.fill(faker.name.fullName(), faker.internet.userName(), faker.internet.email(), faker.phone.number('06########'), faker.internet.password())
    await expect(page).toHaveTitle(/Brew Me \| Client home/)
  })

  test.describe('Required fields', () => {
    const requiredParameters = [
      'name',
      'username',
      'email',
      'phoneNumber',
      'password',
    ]
    for (const parameter of requiredParameters) {
      test(`${parameter}`,
        async ({ page }) => {
          await homePage.navigate()
          await expect(page).toHaveTitle(/Brew Me/)

          await homePage.header.goToRegisterPage()
          await expect(page).toHaveTitle(/Brew Me \| Registration/)

          await registerFirstPage.chooseClient()
          await expect(page).toHaveTitle(/Brew Me \| Client registration/)

          await registerFormPage.fill(
            parameter === 'name' ? undefined : faker.name.fullName(),
            parameter === 'username' ? undefined : faker.internet.userName(),
            parameter === 'email' ? undefined : faker.internet.email(),
            parameter === 'phoneNumber' ? undefined : faker.phone.number('06########'),
            parameter === 'password' ? undefined : faker.internet.password(),
          )
          await expect(page).toHaveTitle(/Brew Me \| Client registration/)

          await expect(page.locator(`[data-pw="${toTextCase(parameter)} error"]`)).toHaveText('field is required')
        })
    }
  })

  test.describe('Conflicts', () => {
    type ClientConflictingParams = 'email' | 'phoneNumber' | 'username'
    const conflictingParameters: ClientConflictingParams[] = [
      'email',
      'phoneNumber',
      'username',
    ]
    let existingClient: Omit<Client, 'hash'>
    let newClientInput: CreateNewClientInput
    for (const parameter of conflictingParameters) {
      test.beforeEach(async () => {
        existingClient = await createNewClient({
          name: faker.name.fullName(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          phoneNumber: faker.phone.number('06########'),
        }) as Omit<Client, 'hash'>
        newClientInput = {
          name: faker.name.fullName(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          phoneNumber: faker.phone.number('06########'),
        }
      })

      test(`conflict on ${parameter}`,
        async ({ page }) => {
          newClientInput[parameter] = existingClient[parameter]
          await homePage.navigate()
          await expect(page).toHaveTitle(/Brew Me/)

          await homePage.header.goToRegisterPage()
          await expect(page).toHaveTitle(/Brew Me \| Registration/)

          await registerFirstPage.chooseClient()
          await expect(page).toHaveTitle(/Brew Me \| Client registration/)

          await registerFormPage.fill(
            newClientInput.name,
            newClientInput.username,
            newClientInput.email,
            newClientInput.phoneNumber,
            newClientInput.password,
          )
          await expect(page).toHaveTitle(/Brew Me \| Client registration/)

          await expect(page.locator(`[data-pw="${toTextCase(parameter)} error"]`)).toHaveText('already registered')
        })
    }
  })
})
