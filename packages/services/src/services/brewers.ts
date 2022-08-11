import { Brewer } from '@prisma/client'

import client from '../prisma'
import hashPassword from '../utils/hashPassword'

export type CreateNewBrewerInput = {
  name: string
  username: string
  email: string
  phoneNumber: string
  password: string
}

export const createNewBrewer = async (input: CreateNewBrewerInput): Promise<Brewer> => {
  const transormedInput = {
    name: input.name,
    username: input.username,
    email: input.email,
    phoneNumber: input.phoneNumber,
    hash: hashPassword(input.password),
  }
  const result = await client.brewer.create({
    data: transormedInput,
  })
  return result
}

export const listBrewers = async () => {
  const brewers = await client.brewer.findMany()
  return brewers
}
