import bcrypt from 'bcrypt'
import { User } from '../../models/userSchema'

export const register = async (username:string, email:string , password:string) => {
    
    const hashPassword = bcrypt.hash(password, 10)

   const user =  await User.create({username, email, hashPassword})

   console.log(user)
}