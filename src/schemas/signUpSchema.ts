import {z} from "zod";
export const usernameValidation=z
.string()
.min(2,"USERNAME MUST BE ATLEAST 2 CHARACTERS ")
.max(20,"USERNAME CANNOT EXCEED 20 CHARACTERS ")
.regex(/^[a-zA-Z0-9_]*$/,"USERNAME CAN ONLY CONTAIN ALPHANUMERIC CHARACTERS AND _ ")

export const signUpSchema=z.object({
    username:usernameValidation,
    email:z.string().email({message:"ENTER A VALID EMAIL ADDRESS"}),
    password:z.string().min(8,{message:"PASSWORD MUST BE ATLEAST 8 CHARACTERS "}),
})
