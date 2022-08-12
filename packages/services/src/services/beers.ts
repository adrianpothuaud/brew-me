import { Beer } from '@prisma/client'

import { prismaClient as client } from '../prisma'
import catchAndParsePrismaErrors from '../utils/catchAndParsePrismaErrors'

export type CreateNewBeerInput = {
  brewerId: number
  name: string
  description: string
  alcoholDegree: number
}

export const createNewBeer = async (input: CreateNewBeerInput): Promise<Beer | undefined> => {
  try {
    const result = await client.beer.create({
      data: input,
    })
    return result
  } catch (e) {
    catchAndParsePrismaErrors(e)
  }
}

export const listBeers = async (): Promise<Beer[]> => {
  const beers = await client.beer.findMany()
  return beers
}

export const findBeerById = async (id: number): Promise<Beer | null> => {
  const beer = await client.beer.findUnique({ where: { id } })
  return beer
}

export const findBeersByBrewer = async (brewerId: number): Promise<Beer[]> => {
  const beers = await client.beer.findMany({ where: { brewerId } })
  return beers
}
