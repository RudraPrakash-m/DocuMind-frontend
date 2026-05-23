import { createContext, useContext, useState } from "react";

// Create Context
const WorkspaceContext = createContext();

// Provider
export const WorkspaceProvider = ({ children }) => {
  // All Workspaces
  const [workspaces, setWorkspaces] = useState([
    {
      id: "workspace-1",

      name: "DocuMind Organization",

      description: "Main organization workspace for internal operations.",

      groups: [
        {
          id: "group-1",

          name: "Finance",

          description: "Board materials, investor updates, financial models.",

          color: "bg-blue-400",

          members: [
            {
              id: 1,
              name: "Rudra",
              role: "Admin",
            },

            {
              id: 2,
              name: "Akash",
              role: "Analyst",
            },
          ],

          documents: [
            {
              id: "doc-1",
              title: "Q4 Investor Memo.pdf",
            },

            {
              id: "doc-2",
              title: "Budget Forecast.pdf",
            },
          ],
        },

        {
          id: "group-2",

          name: "Engineering",

          description: "Architecture docs, RFCs, frontend roadmaps.",

          color: "bg-indigo-400",

          members: [
            {
              id: 3,
              name: "Rohit",
              role: "Lead Engineer",
            },

            {
              id: 4,
              name: "Suman",
              role: "Frontend Developer",
            },
          ],

          documents: [
            {
              id: "doc-3",
              title: "Frontend Architecture.pdf",
            },

            {
              id: "doc-4",
              title: "API Design System.pdf",
            },
          ],
        },
      ],
    },

    {
      id: "workspace-2",

      name: "Startup Research Lab",

      description: "Workspace for startup analysis and research.",

      groups: [
        {
          id: "group-3",

          name: "Research",

          description: "Customer interviews, surveys, market intelligence.",

          color: "bg-purple-400",

          members: [
            {
              id: 5,
              name: "Priya",
              role: "Research Analyst",
            },

            {
              id: 6,
              name: "Karan",
              role: "Research Intern",
            },
          ],

          documents: [
            {
              id: "doc-5",
              title: "Customer Discovery Notes.pdf",
            },

            {
              id: "doc-6",
              title: "Market Gap Analysis.pdf",
            },
          ],
        },

        {
          id: "group-4",

          name: "Legal",

          description: "Contracts, compliance, legal documentation.",

          color: "bg-yellow-400",

          members: [
            {
              id: 7,
              name: "Neha",
              role: "Legal Advisor",
            },
          ],

          documents: [
            {
              id: "doc-7",
              title: "Founder Agreement.pdf",
            },
          ],
        },
      ],
    },
  ]);

  // Active Workspace
  const [activeWorkspace, setActiveWorkspace] = useState(workspaces[0]);

  // Switch Workspace
  const switchWorkspace = (workspaceId) => {
    const selectedWorkspace = workspaces.find(
      (workspace) => workspace.id === workspaceId,
    );

    if (selectedWorkspace) {
      setActiveWorkspace(selectedWorkspace);
    }
  };

  // Create Workspace
  const createWorkspace = (newWorkspace) => {
    setWorkspaces((prev) => [...prev, newWorkspace]);
  };

  // Add Group
  const addGroup = (workspaceId, newGroup) => {
    setWorkspaces((prev) =>
      prev.map((workspace) =>
        workspace.id === workspaceId
          ? {
              ...workspace,
              groups: [...workspace.groups, newGroup],
            }
          : workspace,
      ),
    );
  };

  // Add Member To Group
  const addMemberToGroup = (workspaceId, groupId, newMember) => {
    setWorkspaces((prev) =>
      prev.map((workspace) =>
        workspace.id === workspaceId
          ? {
              ...workspace,

              groups: workspace.groups.map((group) =>
                group.id === groupId
                  ? {
                      ...group,

                      members: [...group.members, newMember],
                    }
                  : group,
              ),
            }
          : workspace,
      ),
    );
  };

  // Add Document To Group
  const addDocumentToGroup = (workspaceId, groupId, newDocument) => {
    setWorkspaces((prev) =>
      prev.map((workspace) =>
        workspace.id === workspaceId
          ? {
              ...workspace,

              groups: workspace.groups.map((group) =>
                group.id === groupId
                  ? {
                      ...group,

                      documents: [...group.documents, newDocument],
                    }
                  : group,
              ),
            }
          : workspace,
      ),
    );
  };

  return (
    <WorkspaceContext.Provider
      value={{
        workspaces,
        activeWorkspace,

        switchWorkspace,

        createWorkspace,

        addGroup,

        addMemberToGroup,

        addDocumentToGroup,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};

// Custom Hook
export const useWorkspace = () => {
  return useContext(WorkspaceContext);
};
