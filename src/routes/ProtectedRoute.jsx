import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  useAuth,
} from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isLoaded } = useAuth();

  // Auth state loading
  if (!isLoaded) {
    return (
      <div className="h-screen bg-[#212126] flex items-center justify-center">
        <div className="w-14 h-14 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <SignedIn>{children}</SignedIn>

      <SignedOut>
        <div className="h-screen bg-[#212126] flex items-center justify-center">
          <div className="bg-zinc-900 border border-zinc-800 px-8 py-6 rounded-2xl shadow-lg">
            <h1 className="text-white text-2xl font-semibold text-center">
              You need to login first
            </h1>

            <p className="text-zinc-400 text-sm mt-2 text-center">
              Please authenticate to access the dashboard
            </p>

            <button
              onClick={() => (window.location.href = "/")}
              className="mt-5 w-full bg-violet-600 hover:bg-violet-700 text-white py-2 rounded-lg transition"
            >
              Go to Login
            </button>
          </div>
        </div>
      </SignedOut>
    </>
  );
};

export default ProtectedRoute;
