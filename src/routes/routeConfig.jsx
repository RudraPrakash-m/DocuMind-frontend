import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/auth/Login";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/dashboard/Dashboard";
import Documents from "../pages/documents/Documents";
import AiAssistant from "../pages/ai/AiAssistant";
import Search from "../pages/search/Search";
import Workspaces from "../pages/workspace/Workspaces";
import KnowledgeGraphPage from "../pages/graph/KnowledgeGraphPage";
import Analytics from "../pages/analytics/Analytics";
import Activity from "../pages/activity/Activity";
import Settings from "../pages/settings/Settings";
import ProfileSettings from "../components/settings/ProfileSettings";
import PlanSettings from "../components/settings/PlanSettings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "documents",
        element: <Documents />,
      },
      {
        path: "/dashboard/ai",
        element: <AiAssistant />,
      },
      {
        path: "/dashboard/search",
        element: <Search />,
      },
      {
        path: "/dashboard/workspace",
        element: <Workspaces />,
      },
      {
        path: "/dashboard/graph",
        element: <KnowledgeGraphPage />,
      },
      {
        path: "/dashboard/analytics",
        element: <Analytics />,
      },
      {
        path: "/dashboard/activity",
        element: <Activity />,
      },
      {
        path: "/dashboard/settings",
        element: <Settings />,
        children: [
          {
            index: true,
            element: <ProfileSettings />,
          },
          {
            path: "plan",
            element: <PlanSettings />,
          },
        ],
      },
    ],
  },
]);

export default router;
