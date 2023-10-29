import { defineMongooseModel } from '#nuxt/mongoose'

export const User = defineMongooseModel('User', {
  name: {
    type: String,
    required: true,
  },
})

export default defineEventHandler(async (e) => {
  const users = await User.find({})
  return {
    users,
  }
})
