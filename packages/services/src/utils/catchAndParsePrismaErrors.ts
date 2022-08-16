import { ApplicationError } from '@brew-me/error'
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime'

export function catchAndParsePrismaErrors(e: unknown) {
  if (e instanceof PrismaClientValidationError) {
    console.log(
      'prisma validation error detected',
      e.message,
    )
    const missingArgumentsRegEx = /Argument (.*) for data\.(.*) is missing/gm
    const missingArguments = e.message
      .match(missingArgumentsRegEx)
      ?.join(', ')
      .replace(/ for data\.(\w+)/g, '')
      .replace(/Argument /g, '')
    throw new ApplicationError(400, 'validation error', missingArguments || 'no missing arguments')
  } else if (e instanceof PrismaClientKnownRequestError) {
    console.log(
      'prisma error detected',
      e.code,
      e.message,
    )
    if (e.code === 'P2002') {
      const conflictsRegEx = /Unique constraint failed on the fields: (.*)/gm
      const conflicts = e.message
        .match(conflictsRegEx)
        ?.join('')
      throw new ApplicationError(409, 'conflict', conflicts || e.message)
    } else throw new ApplicationError(400, e.code, e.message)
  } else {
    throw new ApplicationError(500, 'unexpected', 'an unexpected error occurs')
  }
}
