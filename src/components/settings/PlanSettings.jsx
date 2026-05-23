import { Check, Sparkles } from "lucide-react";

const PlansSettings = () => {
  const features = [
    "3 Workspaces",
    "100 Document Uploads",
    "Basic AI Search",
    "PDF & Markdown Support",
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-5 border-b border-zinc-800 pb-4">
        <h1 className="text-2xl font-semibold text-white">Plans & Billing</h1>

        <p className="mt-1 text-sm text-zinc-500">
          Your current subscription plan.
        </p>
      </div>

      {/* Plan Card */}
      <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-blue-500/[0.03] p-5">
        {/* Badge */}
        <div className="absolute right-4 top-4 rounded-full bg-blue-500 px-2.5 py-1 text-[11px] font-medium text-white">
          Active
        </div>

        {/* Top */}
        <div className="mb-5 flex items-center gap-3">
          {/* Icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
            <Sparkles size={17} />
          </div>

          {/* Info */}
          <div>
            <h2 className="text-lg font-semibold text-white">Free Plan</h2>

            <p className="text-xs text-zinc-500">
              Perfect for students and personal projects.
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="mb-5">
          <h3 className="text-3xl font-bold text-white">
            $0
            <span className="ml-1 text-sm font-normal text-zinc-500">
              /month
            </span>
          </h3>
        </div>

        {/* Features */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              {/* Check */}
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                <Check size={12} />
              </div>

              {/* Text */}
              <p className="text-sm text-zinc-300">{feature}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="mt-6 w-full rounded-xl border border-blue-500/20 bg-blue-500/10 px-4 py-2.5 text-sm font-medium text-white">
          Current Plan
        </button>
      </div>
    </div>
  );
};

export default PlansSettings;
