import { Lock, Palette, Settings2, User } from "lucide-react";

import { NavLink, Outlet } from "react-router-dom";

const Settings = () => {
  const settingsLinks = [
    {
      name: "Profile",
      path: "profile",
      icon: User,
    },
    {
      name: "Plan",
      path: "plan",
      icon: Palette,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[240px_1fr]">
        {/* Sidebar */}
        <div className="h-fit rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
          {/* Header */}
          <div className="mb-6 flex items-center gap-3">
            {/* Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <Settings2 size={18} />
            </div>

            {/* Text */}
            <div>
              <h1 className="text-lg font-semibold text-white">Settings</h1>

              <p className="text-xs text-zinc-500">Manage account</p>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-2">
            {settingsLinks.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all ${
                      isActive
                        ? "border border-blue-500/20 bg-blue-500/10 text-white"
                        : "border border-transparent text-zinc-400 hover:bg-zinc-900 hover:text-white"
                    }`
                  }
                >
                  {/* Icon */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 transition group-hover:bg-zinc-800">
                    <Icon size={16} />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>

                    <p className="text-[11px] text-zinc-500">
                      {item.name} settings
                    </p>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Settings;
