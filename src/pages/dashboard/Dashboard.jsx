import { useEffect } from "react";
import axios from "axios";

import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { user } = useUser();

  useEffect(() => {
    const syncUser = async () => {
      if (!user) return;

      // Unique key per user
      const syncKey = `synced_${user.id}`;

      const alreadySynced = sessionStorage.getItem(syncKey);

      if (alreadySynced) return;

      try {
        const res = await axios.post("http://localhost:8080/public/register", {
          clerkId: user.id,
          name: user.fullName,
          email: user.primaryEmailAddress?.emailAddress,
        });

        console.log("Backend Response:", res.data);

        // Save per-user sync
        sessionStorage.setItem(syncKey, "true");
      } catch (error) {
        console.error("Error syncing user:", error);
      }
    };

    syncUser();
  }, [user]);

  return <div className="text-white text-2xl">Dashboard</div>;
};

export default Dashboard;
