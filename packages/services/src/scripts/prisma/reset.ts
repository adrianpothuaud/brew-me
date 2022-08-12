import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.brewer.deleteMany()
  await prisma.beer.deleteMany()
  await prisma.beerUnit.deleteMany()
  await prisma.beerUnitBottle.deleteMany()
  await prisma.client.deleteMany()
  await prisma.cart.deleteMany()
  await prisma.transaction.deleteMany()
  await prisma.order.deleteMany()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
