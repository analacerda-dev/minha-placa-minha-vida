import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-slate-400 mb-6">Oops! Page not found</p>
      <button
        onClick={() => navigate("/")}
        className="text-green-400 underline hover:text-green-300 transition"
      >
        Return to Home
      </button>
    </div>
  );
}
