import { useEffect, useRef } from "react";

import axios from "axios";

import { useUser, useAuth } from "@clerk/clerk-react";

const Dashboard = () => {
  /*
    CLERK USER
  */

  const { user, isLoaded } = useUser();

  /*
    GET CLERK TOKEN
  */

  const { getToken } = useAuth();

  /*
    PREVENT MULTIPLE API CALLS
  */

  const synced = useRef(false);

  useEffect(() => {
    const syncUser = async () => {
      try {
        /*
          WAIT FOR CLERK LOAD
        */

        if (!isLoaded || !user || synced.current) {
          return;
        }

        synced.current = true;

        /*
          GET VERIFIED CLERK TOKEN
        */

        const clerkToken = await getToken();

        // console.log("CLERK TOKEN:", clerkToken);

        /*
          TOKEN CHECK
        */

        if (!clerkToken) {
          console.log("No Clerk Token Found");

          return;
        }

        /*
          SEND TOKEN TO BACKEND
        */

        const res = await axios.post(
          "http://localhost:8080/public/register",

          {},

          {
            headers: {
              Authorization: `Bearer ${clerkToken}`,
            },

            withCredentials: true,
          },
        );

        // console.log("Backend Response:", res.data);
      } catch (error) {
        console.error("Sync Error:", error.response?.data || error.message);
      }
    };

    syncUser();
  }, [user, isLoaded, getToken]);

  /*
    LOADING STATE
  */

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white text-xl">
        Loading...
      </div>
    );
  }

  /*
    UI
  */

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#212126]">
      <h1 className="text-white text-3xl font-semibold">
        Welcome {user?.fullName}
      </h1>
    </div>
  );
};

export default Dashboard;
