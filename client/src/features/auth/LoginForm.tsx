//libraries
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

//Components
import Fieldset from "@/components/general/forms/FieldSet";
import { Button } from "@/components/ui/button";
import Input from "@/components/general/forms/Input";

//Types
import { FormDataType } from "./SignupForm";
import { loginSchema } from "@/schemas/loginSchema";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<FormDataType>>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<Partial<FormDataType>> = (data) => {
    console.log(data);
  };

  return (
    <div className="container-max padding-x min-h-[80vh] flex justify-center items-center">
      <div className="mx-auto space-y-6 border px-8 py-6 shadow-md sm:max-w-[600px] grow">
        <h2 className="text-primary">Login your Account</h2>
        <div>
          <Button
            variant={"secondary"}
            className="w-full font-semibold"
            size={"lg"}
          >
            <img src="assets/google.svg" alt="" className="w-6" />
            Login with Google
          </Button>
        </div>
        <div className="border-b"></div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Fieldset label="Email" error={errors.email?.message ?? ""}>
              <Input
                type="text"
                id="email"
                placeholder="Enter Your Email Id"
                register={register}
                name="email"
              />
            </Fieldset>
            <Fieldset label="Password" error={errors.password?.message ?? ""}>
              <Input
                type="password"
                id="password"
                placeholder="Enter Your Password"
                register={register}
                name="password"
              />
            </Fieldset>
            <Button className="w-full mt-4">Login</Button>
            <NavLink to={"/signup"}>
              <p className="text-sm text-center py-4">
                Don't have an account?
                <span className="text-blue-800 hover:underline"> Sign Up</span>
              </p>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
