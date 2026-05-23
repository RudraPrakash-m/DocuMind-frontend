import { useWorkspace } from "../../context/WorkspaceContext";

import WorkSpaceCard from "../../components/workspacecard/WorkSpaceCard";
import WorkSpaceDes from "../../components/workSpaceDescription/WorkSpaceDes";

const Workspaces = () => {
  const { workspaces } = useWorkspace();

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <WorkSpaceDes />

      {/* Workspace Sections */}
      <div className="space-y-12">
        {workspaces.map((workspace) => {
          // Dynamic Totals
          const totalMembers = workspace.groups.reduce(
            (total, group) => total + group.members.length,
            0,
          );

          const totalDocuments = workspace.groups.reduce(
            (total, group) => total + group.documents.length,
            0,
          );

          return (
            <div
              key={workspace.id}
              className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6"
            >
              {/* Workspace Top */}
              <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                {/* Left */}
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    {/* Workspace Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 text-lg font-bold text-white">
                      {workspace.name.charAt(0)}
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold tracking-tight text-white">
                        {workspace.name}
                      </h2>

                      <p className="mt-1 text-sm text-zinc-500">
                        {workspace.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* Groups */}
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
                    <p className="text-xs text-zinc-500">Groups</p>

                    <h3 className="mt-1 text-lg font-semibold text-white">
                      {workspace.groups.length}
                    </h3>
                  </div>

                  {/* Members */}
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
                    <p className="text-xs text-zinc-500">Members</p>

                    <h3 className="mt-1 text-lg font-semibold text-white">
                      {totalMembers}
                    </h3>
                  </div>

                  {/* Documents */}
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
                    <p className="text-xs text-zinc-500">Documents</p>

                    <h3 className="mt-1 text-lg font-semibold text-white">
                      {totalDocuments}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Groups */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {workspace.groups.map((group) => (
                  <WorkSpaceCard key={group.id} group={group} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Workspaces;
