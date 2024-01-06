import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const Dashboard = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="p-1">
      <div className="flex items-center gap-1">
        <p className="text-lg font-semibold">
          Hi <span className="text-primary">{user.user_metadata.name}</span>!
        </p>

        <p className="rounded-md bg-secondary [text-shadow:_1px_1px_0px_rgb(0_0_0_/_70%)] px-1 py-px text-xs font-bold">
          #20
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
