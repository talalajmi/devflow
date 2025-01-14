import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();

  console.log(session);
  return (
    <>
      <div className="h1-bold font-space-grotesk flex items-center">
        Dev
        <p className="text-primary-500">Flow</p>
      </div>
      <div className="h1-bold font-inter">
        Hello, this is my new application witch. Yuh
      </div>

      <form
        className="px-10 pt-48"
        action={async () => {
          "use server";

          await signOut({
            redirectTo: ROUTES.SIGN_IN,
          });
        }}
      >
        <Button type="submit">Logout</Button>
      </form>
    </>
  );
};

export default Home;
