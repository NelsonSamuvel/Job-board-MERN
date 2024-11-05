import Fieldset from "@/components/general/forms/FieldSet";
import Input from "@/components/general/forms/Input";
import { Button } from "@/components/ui/button";

const SignupForm = () => {
  return (
    <div className="container-max padding-x min-h-[80vh] flex justify-center items-center">
      <div className="mx-auto space-y-6 border px-8 py-6 shadow-md sm:max-w-[600px] grow">
        <h2 className="text-primary">Create Account</h2>
        <div>
          <Button
            variant={"secondary"}
            className="w-full font-semibold"
            size={"lg"}
          >
            Sign up with Google
          </Button>
        </div>
        <div className="border-b"></div>
        <div>
          <form>
            <div className="md:flex gap-6 justify-between">
              <Fieldset label="First Name" error="" className="basis-[50%]">
                <Input
                  type="text"
                  id="firstName"
                  placeholder="Enter Your First Name"
                />
              </Fieldset>
              <Fieldset label="Last Name" error="" className="basis-[50%]">
                <Input
                  type="text"
                  id="lastName"
                  placeholder="Enter Your Last Name"
                />
              </Fieldset>
            </div>
            <div className="md:flex justify-between gap-6">
              <Fieldset label="Password" error="" className="basis-[50%]">
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter Your Password"
                />
              </Fieldset>
              <Fieldset label="Confirm Password" error="" className="basis-[50%]">
                <Input
                  type="password"
                  id="confirmPassword"
                  placeholder="Enter Your Confirm Password"
                />
              </Fieldset>
            </div>
            <Button className="w-full mt-4">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
