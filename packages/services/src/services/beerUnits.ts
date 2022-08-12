import { BeerUnit } from '@prisma/client'

import { prismaClient as client } from '../prisma'
import catchAndParsePrismaErrors from '../utils/catchAndParsePrismaErrors'

export type CreateNewBeerUnitInput = {
  beerId: number
  fermentationStartedAt: Date
  toConsumeFrom: Date
  expiresAt: Date
  bottlePrice: number
}

export const createNewBeerUnit = async (input: CreateNewBeerUnitInput): Promise<BeerUnit | undefined> => {
  try {
    const result = await client.beerUnit.create({
      data: input,
    })
    return result
  } catch (e) {
    catchAndParsePrismaErrors(e)
  }
}

export const listBeerUnits = async () => {
  const beerUnits = await client.beerUnit.findMany()
  return beerUnits
}

export const findBeerUnitById = async (id: number) => {
  const beerUnit = await client.beerUnit.findUnique({ where: { id } })
  return beerUnit
}

export const findBeerUnitsByBeer = async (beerId: number) => {
  const beerUnits = await client.beerUnit.findMany({ where: { beerId } })
  return beerUnits
}
