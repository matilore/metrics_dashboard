import { User } from '@/models/user'

export const userService = {
  createUser: async (email?: String) => {
    const newUser = new User({
      email: 'johndoe@example.com'
    })

    const data = await newUser.save()
    console.log(data)
    return data
  }
}
