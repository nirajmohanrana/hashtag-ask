"use client";
import { createContext } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "../supabase";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [authLoading, setAuthLoading] = useState(true);

  const router = useRouter();

  const googleSignIn = async () => {
    setAuthLoading(true);

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      },
    });

    console.log(data);
    setAuthLoading(false);
  };

  const signOut = async () => {
    setAuthLoading(true);
    const signOut = await supabase.auth.signOut();

    setAuthLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, googleSignIn, signOut, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
