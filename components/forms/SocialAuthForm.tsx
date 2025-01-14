"use client";

import Image from "next/image";

import { Button } from "../ui/button";
import { toast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

const buttonStyles =
  "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";

const SocialAuthForm = () => {
  const handleSignIn = async (provider: "google" | "github") => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Sign in failed",
        description:
          error instanceof Error
            ? error.message
            : "An error occurred while signing in. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonStyles} onClick={() => handleSignIn("github")}>
        <Image
          width={20}
          height={20}
          alt="GitHub Logo"
          src="/icons/github.svg"
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with GitHub</span>
      </Button>
      <Button className={buttonStyles} onClick={() => handleSignIn("google")}>
        <Image
          width={20}
          height={20}
          alt="GitHub Logo"
          src="/icons/google.svg"
          className="mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
