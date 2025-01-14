"use client";

import AuthForm, { FormType } from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

const SignUp = () => {
  return (
    <AuthForm
      schema={SignUpSchema}
      formType={FormType.SIGN_UP}
      defaultValues={{ name: "", username: "", email: "", password: "" }}
      onSubmit={(data) =>
        Promise.resolve({
          success: true,
          data,
        })
      }
    />
  );
};

export default SignUp;
