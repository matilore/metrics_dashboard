import { Schema, model } from 'mongoose'
import { IUser } from '@/contracts'

const userSchema = new Schema<IUser>({
  email: { type: String, required: true }
})

const User = model<IUser>('User', userSchema)

export type UserType = IUser
export { User }
