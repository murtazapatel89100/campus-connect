import { z } from "zod";

export const userZodSchema = z.object({
  personalEmail: z.email(),

  name: z.object({
    middleName: z.string().optional(),
    firstName: z.string(),
    lastName: z.string(),
  }),

  birthdate: z.coerce.date(),

  gender: z.enum(["male", "female", "other"]),

  branch: z.string(),

  currentYear: z.enum(["1", "2", "3", "4"]).transform(Number),

  rollNo: z.string(),

  mobileNo: z.string(),

  mobileNo2: z.string().optional(),

  universityEmail: z.email(),
});
