import { LogOut, Mail, Settings } from "lucide-react";

import { useClerk, useUser } from "@clerk/clerk-react";

const ProfileSettings = () => {
  const { user } = useUser();

  const { signOut, openUserProfile } = useClerk();

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-white">Profile Settings</h1>

        <p className="mt-1 text-sm text-zinc-500">
          Manage your account details
        </p>
      </div>

      {/* Card */}
      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
        {/* Top */}
        <div className="border-b border-zinc-800 p-5">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <img
              src={user?.imageUrl}
              alt="profile"
              className="h-16 w-16 rounded-full border border-zinc-700 object-cover"
            />

            {/* Info */}
            <div>
              <h2 className="text-lg font-semibold text-white">
                {user?.fullName}
              </h2>

              <div className="mt-1 flex items-center gap-2 text-sm text-zinc-400">
                <Mail size={14} />

                {user?.primaryEmailAddress?.emailAddress}
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-4 p-5">
          {/* User ID */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
            <p className="text-xs text-zinc-500">USER ID</p>

            <p className="mt-1 text-sm text-white">{user?.id}</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            {/* Manage */}
            <button
              onClick={() => openUserProfile()}
              className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition hover:border-zinc-700 hover:bg-zinc-800"
            >
              <Settings size={16} />
              Manage Account
            </button>

            {/* Logout */}
            <button
              onClick={() =>
                signOut(() => {
                  window.location.href = "/";
                })
              }
              className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-red-400"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
