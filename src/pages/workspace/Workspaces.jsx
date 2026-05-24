import { useEffect, useState } from "react";

import axios from "axios";

import WorkSpaceDes from "../../components/workSpaceDescription/WorkSpaceDes";

import CreateWorkspaceForm from "../../components/workSpaceDescription/CreateWorkspaceForm";

import WorkSpaceCard from "../../components/workspacecard/WorkSpaceCard";

const Workspaces = () => {
  /*
    Modal State
  */
  const [showWorkspaceForm, setShowWorkspaceForm] = useState(false);

  /*
    Workspaces State
  */
  const [workspaces, setWorkspaces] = useState([]);

  /*
    Loading State
  */
  const [loading, setLoading] = useState(false);

  /*
    Fetch All Workspaces
  */
  const fetchWorkspaces = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:8080/user/workspaces/all",
        {
          withCredentials: true,
        },
      );

      setWorkspaces(response.data.workspaces);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  /*
    Initial Fetch
  */
  useEffect(() => {
    fetchWorkspaces();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <WorkSpaceDes setShowWorkspaceForm={setShowWorkspaceForm} />

      {/* Create Workspace Modal */}
      {showWorkspaceForm && (
        <CreateWorkspaceForm
          setShowWorkspaceForm={setShowWorkspaceForm}
          setWorkspaces={setWorkspaces}
        />
      )}

      {/* Loading */}
      {loading && (
        <div className="mt-20 flex justify-center">
          <p className="text-zinc-400">Loading workspaces...</p>
        </div>
      )}

      {/* Empty State */}
      {!loading && workspaces.length === 0 && (
        <div className="mt-20 flex flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-800 bg-zinc-950/40 py-20">
          <h2 className="text-2xl font-semibold text-white">
            No Workspaces Found
          </h2>

          <p className="mt-3 text-sm text-zinc-500">
            Create your first workspace to get started.
          </p>
        </div>
      )}

      {/* Workspace List */}
      <div className="space-y-10">
        {workspaces.map((workspace) => (
          <div
            key={workspace._id}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/50 p-6"
          >
            {/* Workspace Top */}
            <div className="mb-8 flex items-center justify-between">
              {/* Left */}
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {workspace.name}
                </h2>

                <p className="mt-1 text-sm text-zinc-500">
                  {workspace.description}
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-3">
                {/* Groups */}
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
                  <p className="text-xs text-zinc-500">Groups</p>

                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {workspace.groups?.length}
                  </h3>
                </div>

                {/* Members */}
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
                  <p className="text-xs text-zinc-500">Members</p>

                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {workspace.groups?.reduce(
                      (total, group) => total + (group.members || []).length,
                      0,
                    )}
                  </h3>
                </div>
              </div>
            </div>

            {/* Empty Groups */}
            {workspace.groups?.length === 0 && (
              <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/30 py-12 text-center">
                <p className="text-zinc-500">No groups created yet.</p>
              </div>
            )}

            {/* Groups */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {workspace.groups?.map((group) => (
                <WorkSpaceCard key={group._id} group={group} totalDocs={0} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workspaces;
