import {z} from "zod";
export const messageSchema=z.object({
    content:z
    .string()
    .min(10,{message:"MESSAGE MUST BE ATLEAST 10 CHARACTERS LONG"})
    .max(300,{message:"MESSAGE CANNOT EXCEED 300 CHARACTERS"})
})