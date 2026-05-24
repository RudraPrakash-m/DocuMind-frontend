import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CreateWorkspaceForm = ({ setShowWorkspaceForm, setWorkspaces }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  /*
    Handle Change
  */
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,

      [e.target.name]: e.target.value,
    }));
  };

  /*
    Handle Submit
  */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      return toast.error("Workspace name is required");
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:8080/user/workspace/create",
        formData,
        {
          withCredentials: true,
        },
      );

      /*
      Update State
    */
      setWorkspaces((prev) => [...prev, response.data.workspace]);

      /*
      Success Toast
    */
      toast.success("Workspace created successfully");

      /*
      Reset Form
    */
      setFormData({
        name: "",
        description: "",
      });

      /*
      Close Modal
    */
      setShowWorkspaceForm(false);
    } catch (error) {
      console.log(error);

      /*
      Error Toast
    */
      toast.error(
        error.response?.data?.message || "Failed to create workspace",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-lg rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">Create Workspace</h2>

          <p className="mt-2 text-sm text-zinc-500">
            Create a workspace for your organization.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Workspace Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter workspace name"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Description
            </label>

            <textarea
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter workspace description"
              className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-500 py-3 font-medium text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Creating Workspace..." : "Create Workspace"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateWorkspaceForm;
