import { FormDataType } from "@/features/auth/SignupForm";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

const inputVariants = cva("border px-3 py-2 rounded-md block text-md", {
  variants: {
    variant: {
      primary:
        "border-stone-400 focus:outline-none text-sm text-stone-800 w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface InputType
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  register: UseFormRegister<Partial<FormDataType>>;
  name: keyof Partial<FormDataType>;
}

const Input = ({ variant, name, register, ...props }: InputType) => {
  return (
    <input
      {...props}
      className={cn(inputVariants({ variant }))}
      {...register(name)}
    />
  );
};

export default Input;
