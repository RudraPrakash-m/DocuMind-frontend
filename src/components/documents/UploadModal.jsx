import { ChevronDown, FileText, Upload, X } from "lucide-react";

import { useRef, useState } from "react";

import axios from "axios";

import { toast } from "react-toastify";

const UploadModal = ({ setIsUploadOpen, workspaces = [] }) => {
  /*
    States
  */

  const [selectedFile, setSelectedFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [selectedWorkspace, setSelectedWorkspace] = useState(null);

  const [showWorkspaceDropdown, setShowWorkspaceDropdown] = useState(false);

  /*
    Hidden Input Ref
  */

  const fileInputRef = useRef();

  /*
    Handle File Select
  */

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    /*
      File size validation
    */

    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size must be under 5 MB");

      return;
    }

    setSelectedFile(file);

    toast.success("File selected");
  };

  /*
    Upload File
  */

  const handleUpload = async () => {
    try {
      /*
        File validation
      */

      if (!selectedFile) {
        toast.error("Please select a file");

        return;
      }

      /*
        Workspace validation
      */

      if (!selectedWorkspace) {
        toast.error("Please create or select a workspace first");

        return;
      }

      setLoading(true);

      /*
        FormData
      */

      const formData = new FormData();

      formData.append("file", selectedFile);

      formData.append("title", selectedFile.name);

      formData.append("workspaceId", selectedWorkspace._id);

      /*
        API Call
      */

      const response = await axios.post(
        "http://localhost:8080/user/upload",

        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },

          withCredentials: true,
        },
      );

      // console.log(response.data);

      toast.success("File uploaded successfully");

      setSelectedFile(null);

      setSelectedWorkspace(null);

      setIsUploadOpen(false);
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsUploadOpen(false);
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
    >
      {/* Modal */}

      <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/40">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
          <h1 className="text-xl font-semibold text-white">Upload documents</h1>

          <button
            onClick={() => setIsUploadOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-zinc-500 transition hover:bg-zinc-900 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}

        <div className="p-5">
          {/* Upload Area */}

          <div
            onClick={() => fileInputRef.current.click()}
            className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/40 px-5 py-10 transition hover:border-zinc-600 hover:bg-zinc-900"
          >
            {/* Icon */}

            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-900 text-zinc-400">
              <Upload size={24} />
            </div>

            <h2 className="text-lg font-semibold text-white">
              Drop files here, or browse
            </h2>

            <p className="mt-2 text-sm text-zinc-500">PDF, MD · up to 5 MB</p>

            {/* Hidden Input */}

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.md"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {/* Selected File */}

          {selectedFile && (
            <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3">
              <div className="flex items-center justify-between">
                {/* Left */}

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
                    <FileText size={18} className="text-zinc-300" />
                  </div>

                  <div>
                    <h2 className="text-sm font-medium text-white">
                      {selectedFile.name}
                    </h2>

                    <p className="mt-1 text-xs text-zinc-500">
                      Ready for upload
                    </p>
                  </div>
                </div>

                {/* Size */}

                <p className="text-xs text-zinc-500">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
          )}

          {/* Workspace */}

          <div className="relative mt-6">
            <label className="mb-2 block text-sm font-medium text-zinc-400">
              Workspace
            </label>

            <button
              onClick={() => setShowWorkspaceDropdown(!showWorkspaceDropdown)}
              className="flex w-full items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-left transition hover:border-zinc-700"
            >
              <span className="text-sm text-white">
                {selectedWorkspace
                  ? selectedWorkspace.name
                  : "Select workspace"}
              </span>

              <ChevronDown size={18} className="text-zinc-500" />
            </button>

            {/* Dropdown */}

            {showWorkspaceDropdown && (
              <div className="absolute z-50 mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-900 shadow-lg">
                {workspaces.length > 0 ? (
                  workspaces.map((workspace) => (
                    <button
                      key={workspace._id}
                      onClick={() => {
                        setSelectedWorkspace(workspace);

                        setShowWorkspaceDropdown(false);

                        toast.success(`Workspace selected: ${workspace.name}`);
                      }}
                      className="block w-full px-4 py-3 text-left text-sm text-white transition hover:bg-zinc-800"
                    >
                      {workspace.name}
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-3 text-sm text-zinc-500">
                    No workspace found
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}

        <div className="flex items-center justify-end gap-3 border-t border-zinc-800 px-5 py-4">
          {/* Cancel */}

          <button
            onClick={() => setIsUploadOpen(false)}
            className="rounded-xl px-4 py-2 text-sm text-zinc-400 transition hover:text-white"
          >
            Cancel
          </button>

          {/* Upload */}

          <button
            onClick={handleUpload}
            disabled={loading}
            className="rounded-xl bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-400 disabled:opacity-50"
          >
            {loading ? "Uploading..." : "Upload & analyze"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
