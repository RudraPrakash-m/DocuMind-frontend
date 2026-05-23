import { Plus } from "lucide-react";

const WorkSpaceDes = () => {
  return (
    <div className="mb-10 flex items-center justify-between">
      {/* Left */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Workspaces
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          Organize documents, members, and teams across your organization.
        </p>
      </div>

      {/* Right */}
      <button className="flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-blue-400">
        <Plus size={18} />
        New Workspace
      </button>
    </div>
  );
};

export default WorkSpaceDes;
