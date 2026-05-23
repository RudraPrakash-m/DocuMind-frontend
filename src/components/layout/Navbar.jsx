import { useEffect, useState } from "react";

import { Bell, Upload } from "lucide-react";

import GlobalSearch from "../search/GlobalSearch";
import SearchModal from "../search/SearchModal";

import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { SignedIn, UserButton, useUser } from "@clerk/clerk-react";
import UploadModal from "../documents/UploadModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const navigate = useNavigate();

  const { user } = useUser();

  // console.log(user);

  const { logout } = useAuth();

  // Keyboard Shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      // CMD + K (Mac)
      // CTRL + K (Windows)

      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();

        setIsOpen(true);
      }

      // ESC Close
      if (e.key === "Escape") {
        setIsOpen(false);
        setIsUploadOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className="h-[72px] border-b border-zinc-900 bg-black px-6">
        <div className="flex h-full items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
              <span className="text-xl text-blue-400">✦</span>
            </div>

            {/* Brand */}
            <h1 className="text-2xl font-bold tracking-tight text-white">
              DocuMind
            </h1>
          </div>

          {/* CENTER SEARCH */}
          <GlobalSearch setIsOpen={setIsOpen} />

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            {/* Upload Button */}
            <button
              onClick={() => setIsUploadOpen(true)}
              className="flex items-center gap-2 rounded-2xl bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-400"
            >
              <Upload size={18} />
              Upload
            </button>
            {/* Notification */}
            <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950 text-zinc-300 transition hover:bg-zinc-900">
              <Bell size={18} />

              {/* Notification Dot */}
              <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-blue-500" />
            </button>
            {/* profile */}
            <SignedIn>
              <div className="flex flex-col items-center gap-4">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        </div>
      </header>

      {/* SEARCH MODAL */}
      <SearchModal isOpen={isOpen} setIsOpen={setIsOpen} />
      {isUploadOpen && <UploadModal setIsUploadOpen={setIsUploadOpen} />}
    </>
  );
};

export default Navbar;
