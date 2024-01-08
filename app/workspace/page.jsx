import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const Workspace = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      Workspace
      <br />
      Hii
      {Object.entries(user).map(([key, value]) => {
        function capitalizeString(str) {
          return str
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, str[0].toUpperCase())
            .trim();
        }

        return (
          <tr key={key}>
            <td className="w-1/3">{capitalizeString(key)}:</td>
            <td className="w-full font-bold">{value}</td>
          </tr>
        );
      })}
    </div>
  );
};

export default Workspace;
