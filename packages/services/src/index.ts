import prismaClient from './prisma'
import * as brewersService from './services/brewers'

const prismaLib = {
  prismaClient,
  brewersService,
}

export default prismaLib
