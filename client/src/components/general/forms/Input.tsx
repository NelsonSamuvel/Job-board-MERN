import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";

const inputVariants = cva("border px-3 py-2 rounded-md block text-md", {
  variants: {
    variant: {
      primary: "border-stone-400 focus:outline-none text-sm text-stone-800 w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type InputType = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>;

const Input = ({ variant, ...props }: InputType) => {
  return <input {...props} className={cn(inputVariants({ variant }))} />;
};

export default Input;
