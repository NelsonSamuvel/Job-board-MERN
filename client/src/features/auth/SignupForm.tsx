import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Fieldset from "@/components/general/forms/FieldSet";
import Input from "@/components/general/forms/Input";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { signUpSchema } from "@/schemas/signUpSchema";

export type FormDataType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    console.log(data);
  };

  return (
    <div className="container-max padding-x min-h-[80vh] flex justify-center items-center">
      <div className="mx-auto space-y-6 border px-8 py-6 shadow-md sm:max-w-[600px] grow">
        <h2 className="te xt-primary">Create Account</h2>
        <div>
          <Button
            variant={"secondary"}
            className="w-full font-semibold"
            size={"lg"}
          >
            <img src="assets/google.svg" alt="" className="w-6" />
            Sign up with Google
          </Button>
        </div>
        <div className="border-b"></div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex gap-6 justify-between">
              <Fieldset
                label="First Name"
                error={errors.firstName?.message ?? ""}
                className="basis-[50%]"
              >
                <Input
                  type="text"
                  id="firstName"
                  placeholder="Enter Your First Name"
                  register={register}
                  name="firstName"
                />
              </Fieldset>
              <Fieldset
                label="Last Name (optional)"
                error={errors.lastName?.message ?? ""}
                className="basis-[50%]"
              >
                <Input
                  type="text"
                  id="lastName"
                  placeholder="Enter Your Last Name"
                  register={register}
                  name="lastName"
                />
              </Fieldset>
            </div>
            <div>
              <Fieldset
                label="Email"
                error={errors.email?.message ?? ""}
                className="basis-[50%]"
              >
                <Input
                  type="text"
                  id="email"
                  placeholder="Enter Your Email Id"
                  register={register}
                  name="email"
                />
              </Fieldset>
            </div>
            <div className="md:flex justify-between gap-6">
              <Fieldset
                label="Password"
                error={errors.password?.message ?? ""}
                className="basis-[50%]"
              >
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter Your Password"
                  register={register}
                  name="password"
                />
              </Fieldset>
              <Fieldset
                label="Confirm Password"
                error={errors.confirmPassword?.message ?? ""}
                className="basis-[50%]"
              >
                <Input
                  type="password"
                  id="confirmPassword"
                  placeholder="Enter Your Confirm Password"
                  register={register}
                  name="confirmPassword"
                />
              </Fieldset>
            </div>
            <Button className="w-full mt-4">Sign Up</Button>
            <NavLink to={"/login"}>
              <p className="text-sm text-center py-4">
                Already have an account?
                <span className="text-blue-800 hover:underline"> Log in</span>
              </p>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
