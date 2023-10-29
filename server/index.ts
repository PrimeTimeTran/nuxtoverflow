import { Nitro } from 'nitropack'
import { defineMongooseConnection } from '#nuxt/mongoose'

import schedule from 'node-schedule'

schedule.scheduleJob('*/2 * * * * *', () => {
  console.log('Think about programming')
})

schedule.scheduleJob('*/5 * * * * *', () => {
  console.log('Consider writing about programming')
})

schedule.scheduleJob('*/15 * * * * *', () => {
  console.log('Contemplating writing about programming online')
})

export default async (_nitroApp: Nitro) => {
  const config = useRuntimeConfig()
  try {
    await defineMongooseConnection({
      uri: config.mongoDBUri,
    })

    console.log('Connected to MongoDB')
  } catch (error) {
    console.error({
      error: error,
    })
  }
}
