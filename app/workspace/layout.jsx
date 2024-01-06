import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AppBar from "./components/AppBar";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

const layout = async ({ children }) => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    return (
      <div className="w-ful h-screen flex flex-col justify-center items-center">
        <p>Sorry! You are not Signed In</p>
        <Link href="/get-started" className="underline">
          Please Sign In
        </Link>
      </div>
    );

  return (
    <Suspense fallback={<Loading />}>
      <AppBar />
    </Suspense>
  );
};

export default layout;
