import { BeerUnitBottle } from '@prisma/client'

import { prismaClient as client } from '../prisma'
import { catchAndParsePrismaErrors } from '../utils/catchAndParsePrismaErrors'

export type CreateNewBeerUnitBottleInput = {
  beerUnitId: number
}

export const createNewBeerUnitBottle = async (input: CreateNewBeerUnitBottleInput): Promise<BeerUnitBottle | undefined> => {
  try {
    const result = await client.beerUnitBottle.create({
      data: input,
    })
    return result
  } catch (e) {
    catchAndParsePrismaErrors(e)
  }
}

export const listBeerUnitBottles = async () => {
  const beerUnitBottles = await client.beerUnitBottle.findMany()
  return beerUnitBottles
}

export const findBeerUnitBottleById = async (id: number) => {
  const beerUnitBottle = await client.beerUnitBottle.findUnique({ where: { id } })
  return beerUnitBottle
}

export const findBeerUnitBottlesByBeerUnit = async (beerUnitId: number) => {
  const beerUnitBottles = await client.beerUnitBottle.findMany({ where: { beerUnitId } })
  return beerUnitBottles
}
