import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { WorkspaceProvider } from "./context/WorkspaceContext";
import { ClerkProvider } from "@clerk/clerk-react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById("root")).render(
  <>
    <ClerkProvider publishableKey={clerkPubKey}>
      <AuthProvider>
        <WorkspaceProvider>
          <App />
          <ToastContainer position="top-right" autoClose={3000} theme="dark" />
        </WorkspaceProvider>
      </AuthProvider>
    </ClerkProvider>
  </>,
);
