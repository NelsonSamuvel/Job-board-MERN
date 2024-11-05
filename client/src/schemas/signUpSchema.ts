import { FormDataType } from "@/features/auth/SignupForm";
import { z, ZodType } from "zod";

export const signUpSchema: ZodType<FormDataType> = z
  .object({
    firstName: z.string().min(5, {
      message: "Name must have at least 5 characters",
    }),
    lastName: z.string(),
    email: z.string().email(),
    password: z
      .string()
      .min(6, {
        message: "password must be at least 6 characters",
      })
      .max(15, {
        message: "password is too long",
      }),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "password does not match",
    path: ["confirmPassword"],
  });
