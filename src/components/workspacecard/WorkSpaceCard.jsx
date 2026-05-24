import { FileText, MoreHorizontal, Users } from "lucide-react";

const WorkSpaceCard = ({ group, totalDocs }) => {
  const totalMembers = group.members?.length || 0;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/50">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.01] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Header */}
      <div className="relative mb-5 flex items-start justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Icon */}
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-black shadow-md ${group.color}`}
          >
            {group.name.charAt(0)}
          </div>

          {/* Info */}
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-white">
              {group.name}
            </h2>

            <p className="mt-0.5 text-xs text-zinc-500">Team Workspace</p>
          </div>
        </div>

        {/* Menu */}
        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-500 transition hover:bg-zinc-800 hover:text-white">
          <MoreHorizontal size={16} />
        </button>
      </div>

      {/* Description */}
      <p className="relative mb-5 line-clamp-2 text-sm leading-relaxed text-zinc-400">
        {group.description}
      </p>

      {/* Stats */}
      <div className="relative mb-5 flex items-center gap-3">
        {/* Docs */}
        <div className="flex flex-1 items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/70 px-3 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800">
            <FileText size={16} className="text-zinc-300" />
          </div>

          <div>
            <p className="text-base font-semibold text-white">{totalDocs}</p>

            <p className="text-[11px] text-zinc-500">Documents</p>
          </div>
        </div>

        {/* Members */}
        <div className="flex flex-1 items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/70 px-3 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800">
            <Users size={16} className="text-zinc-300" />
          </div>

          <div>
            <p className="text-base font-semibold text-white">{totalMembers}</p>

            <p className="text-[11px] text-zinc-500">Members</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative flex items-center justify-between">
        {/* Avatars */}
        <div className="flex -space-x-2">
          {group.members?.slice(0, 4).map((member) => (
            <div
              key={member._id}
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-zinc-950 bg-gradient-to-br from-blue-500 to-indigo-500 text-xs font-semibold text-white"
            >
              {member.user?.name?.charAt(0) || "U"}
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-medium text-white transition hover:border-zinc-700 hover:bg-zinc-800">
          Open
        </button>
      </div>
    </div>
  );
};

export default WorkSpaceCard;
