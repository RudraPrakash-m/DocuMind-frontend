import {
  SignIn,
  SignedOut,
  SignedIn,
  ClerkLoaded,
  ClerkLoading,
  useUser,
} from "@clerk/clerk-react";

import { dark } from "@clerk/themes";
import { useEffect } from "react";

import { Navigate } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{ backgroundColor: "#212126" }}
    >
      <ClerkLoading>
        <div className="text-white text-lg animate-pulse">
          Loading authentication...
        </div>
      </ClerkLoading>

      <ClerkLoaded>
        <SignedOut>
          <SignIn
            forceRedirectUrl="/dashboard"
            appearance={{
              baseTheme: dark,
            }}
          />
        </SignedOut>

        <SignedIn>
          <Navigate to="/dashboard" />
        </SignedIn>
      </ClerkLoaded>
    </div>
  );
};

export default Login;
