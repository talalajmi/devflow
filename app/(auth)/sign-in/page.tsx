"use client";

import AuthForm, { FormType } from "@/components/forms/AuthForm";
import { signInSchema } from "@/lib/validations";

const SignIn = () => {
  return (
    <AuthForm
      schema={signInSchema}
      formType={FormType.SIGN_IN}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data) =>
        Promise.resolve({
          success: true,
          data,
        })
      }
    />
  );
};

export default SignIn;
