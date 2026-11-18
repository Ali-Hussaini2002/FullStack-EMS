import LoginLeftSide from "./LoginLeftSide";
import { ArrowLeftIcon, EyeIcon, EyeOffIcon, Loader2Icon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const LoginForm = ({ role, title, subtitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />

      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-white">
        <div className="w-full max-w-md animate-fade-in">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 test-sm mb-10
         transition-colors"
          >
            <ArrowLeftIcon size={16} />
            Back to portals
          </Link>

          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-medium text-zinc-800">
              {title}
            </h1>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              {subtitle}
            </p>
          </div>
          {error && (
            <div
              className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-200 text-sm
          rounded-xl items-start gap-3 "
            >
              <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0 " />
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Adress
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                placeholder="john@exmple.com"
              />
            </div>
            <div className="">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showpassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="pr-11"
                  required
                  placeholder="............"
                />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 "
                  onClick={() => {
                    {
                      setShowPassword(!showpassword);
                    }
                  }}
                  type="button"
                >
                  {" "}
                  {showpassword ? (
                    <EyeOffIcon size={18} />
                  ) : (
                    <EyeIcon size={18} />
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 
  bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg 
  transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading && <Loader2Icon className="w-5 h-5 animate-spin" />}
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
