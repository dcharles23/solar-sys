import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, { message: 'Name Minimum 2 Characters'}),
    username: z.string().min(2, { message: 'Username Minimum 2 Characters'}),
    email: z.string().email(),
    password: z.string().min(8, { message: ' Passowrd Minimum 8 Characters'})
  })