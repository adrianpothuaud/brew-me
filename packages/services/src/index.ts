import { CreateNewBrewerInput } from './services/brewers'
import { CreateNewClientInput } from './services/clients'

export { Brewer, Beer, BeerUnit, BeerUnitBottle, Client } from '@prisma/client'

export * from './prisma'

export * from './services/beers'
export * from './services/beerUnitBottles'
export * from './services/beerUnits'
export * from './services/brewers'
export * from './services/clients'

export * from './utils/decodeJWT'
export * from './utils/generateUserJWT'
export * from './utils/hashPassword'
export * from './utils/verifyPassword'

export type CreateNewUserInput = CreateNewBrewerInput | CreateNewClientInput
