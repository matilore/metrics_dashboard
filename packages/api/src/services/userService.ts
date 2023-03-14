import { User } from '@/models/user'

export const userService = {
  createUser: async (email?: string) => {
    const newUser = new User({
      email: email || 'johndoe@example.com'
    })

    const data = await newUser.save()
    return data
  }
}
