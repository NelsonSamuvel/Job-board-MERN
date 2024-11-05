import { FormDataType } from "@/features/auth/SignupForm";
import { z, ZodType } from "zod";

export const loginSchema: ZodType<Partial<FormDataType>> = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email(),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});


