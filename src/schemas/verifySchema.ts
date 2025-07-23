import {z} from "zod";
export const verifySchema = z.object({
    code:z.string().length(6,"CODE MUST BE 6 CHARACTERS LONG")
}) 