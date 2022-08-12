import { ApplicationError } from '@brew-me/error'
import { Client } from '@prisma/client'
import _ from 'lodash'

import { prismaClient as client } from '../prisma'
import catchAndParsePrismaErrors from '../utils/catchAndParsePrismaErrors'
import hashPassword from '../utils/hashPassword'

export type CreateNewClientInput = {
  name: string
  username: string
  email: string
  phoneNumber: string
  password: string
}

export const createNewClient = async (input: CreateNewClientInput): Promise<Omit<Client, 'hash'> | undefined> => {
  try {
    if (!input.password) throw new ApplicationError(400, 'bad_request', 'password is missing')
    const transformedInput = {
      name: input.name,
      username: input.username,
      email: input.email,
      phoneNumber: input.phoneNumber,
      hash: hashPassword(input.password),
    }
    const result = await client.client.create({
      data: transformedInput,
    })
    return _.omit(result, ['hash'])
  } catch (e) {
    catchAndParsePrismaErrors(e)
  }
}

export const listClients = async (): Promise<Omit<Client, 'hash'>[]> => {
  console.log('list clients service start')
  const clients = await client.client.findMany()
  console.log('found', clients.length)
  return clients.map((b) => _.omit(b, 'hash'))
}

export const findClientById = async (id: number): Promise<Omit<Client, 'hash'>> => {
  const foundClient = await client.client.findUnique({ where: { id } })
  return _.omit(foundClient, 'hash')
}

export const findClientByUsername = async (username: string): Promise<Omit<Client, 'hash'>> => {
  const foundClient = await client.client.findUnique({ where: { username } })
  return _.omit(foundClient, 'hash')
}
