import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const Dashboard = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      Dashboard
      <br />
      Hii {user.user_metadata.preferred_username}
    </div>
  );
};

export default Dashboard;
