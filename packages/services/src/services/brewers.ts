import { ApplicationError } from '@brew-me/error'
import { Brewer } from '@prisma/client'
import _ from 'lodash'

import { prismaClient as client } from '../prisma'
import { catchAndParsePrismaErrors } from '../utils/catchAndParsePrismaErrors'
import { hashPassword } from '../utils/hashPassword'

export type CreateNewBrewerInput = {
  name: string
  username: string
  email: string
  phoneNumber: string
  password: string
}

export const createNewBrewer = async (input: CreateNewBrewerInput): Promise<Omit<Brewer, 'hash'> | undefined> => {
  try {
    if (!input.password) throw new ApplicationError(400, 'bad_request', 'password is missing')
    const transformedInput = {
      name: input.name,
      username: input.username,
      email: input.email,
      phoneNumber: input.phoneNumber,
      hash: hashPassword(input.password),
    }
    const result = await client.brewer.create({
      data: transformedInput,
    })
    return _.omit(result, ['hash'])
  } catch (e) {
    catchAndParsePrismaErrors(e)
  }
}

export const listBrewers = async (): Promise<Omit<Brewer, 'hash'>[]> => {
  console.log('list brewers service start')
  const brewers = await client.brewer.findMany()
  console.log('found', brewers.length)
  return brewers.map((b) => _.omit(b, 'hash'))
}

export const findBrewerById = async (id: number): Promise<Brewer | null> => {
  const brewer = await client.brewer.findUnique({ where: { id } })
  return brewer
}

export const findBrewerByUsername = async (username: string): Promise<Brewer | null> => {
  const brewer = await client.brewer.findUnique({ where: { username } })
  return brewer
}
