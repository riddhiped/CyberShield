import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050816] text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-3xl font-bold text-cyan-400">
          Cyber Shield
        </h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg"
        >
          Dashboard
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <div className="mb-6">
          <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full">
            Enterprise Security Platform
          </span>
        </div>

        <h1 className="text-7xl font-extrabold mb-6">
          Protect Your Digital Infrastructure
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Monitor cyber threats, detect suspicious activity,
          analyze security incidents, and visualize risk
          through an intelligent dashboard.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-lg font-semibold"
        >
          Launch Dashboard
        </button>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-10 pb-20">

        <div className="bg-[#111827] p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-3">
            Threat Detection
          </h2>
          <p className="text-gray-400">
            Detect SQL Injection, XSS, Malware,
            Brute Force attacks and suspicious logins.
          </p>
        </div>

        <div className="bg-[#111827] p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-3">
            Analytics
          </h2>
          <p className="text-gray-400">
            View real-time trends, threat severity
            levels, and attack statistics.
          </p>
        </div>

        <div className="bg-[#111827] p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-3">
            Reporting
          </h2>
          <p className="text-gray-400">
            Export logs and generate reports
            for cybersecurity analysis.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        © 2026 Cyber Shield | Cyber Threat Monitoring Platform
      </footer>

    </div>
  );
}