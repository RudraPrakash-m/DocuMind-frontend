import {
  LayoutDashboard,
  FileText,
  Sparkles,
  Search,
  Briefcase,
  Share2,
  BarChart3,
  Activity,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links = [
    {
      name: "Dashboard",
      path: "",
      icon: <LayoutDashboard size={18} />,
    },

    {
      name: "Documents",
      path: "documents",
      icon: <FileText size={18} />,
    },

    {
      name: "AI Assistant",
      path: "ai",
      icon: <Sparkles size={18} />,
    },

    {
      name: "Search",
      path: "search",
      icon: <Search size={18} />,
    },

    {
      name: "Workspaces",
      path: "workspace",
      icon: <Briefcase size={18} />,
    },

    {
      name: "Knowledge Graph",
      path: "graph",
      icon: <Share2 size={18} />,
    },

    {
      name: "Analytics",
      path: "analytics",
      icon: <BarChart3 size={18} />,
    },

    {
      name: "Activity",
      path: "activity",
      icon: <Activity size={18} />,
    },

    {
      name: "Settings",
      path: "settings",
      icon: <Settings size={18} />,
    },
  ];

  return (
    <aside className="h-full p-4">
      <nav className="space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end={link.path === ""}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                isActive
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`
            }
          >
            {link.icon}

            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
