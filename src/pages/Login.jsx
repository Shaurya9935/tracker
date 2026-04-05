export default function Login() {
  return (
    <div className="min-h-[calc(100vh-88px)] flex items-center justify-center relative overflow-hidden px-4">
      {/* 💎 Glass Card */}
      <div className="relative z-10 w-[350px] p-8 rounded-2xl 
        bg-white/5 
        backdrop-blur-xl 
        border border-white/10 
        shadow-2xl">

        {/* ✨ Top Shine */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 blur-md opacity-30 rounded-2xl"></div>

        <h2 className="text-white text-2xl font-semibold text-center mb-6">
          Login
        </h2>

        {/* Inputs */}
        <div className="space-y-4">

          <div className="relative">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 rounded-full 
              bg-white/10 text-white placeholder-gray-300 
              border border-white/20 
              focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-full 
              bg-white/10 text-white placeholder-gray-300 
              border border-white/20 
              focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

        </div>

        {/* Options */}
        <div className="flex justify-between items-center text-sm text-gray-300 mt-3">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-purple-500" />
            Remember me
          </label>
          <span className="cursor-pointer hover:text-white">
            Forgot?
          </span>
        </div>

        {/* Button */}
        <button className="w-full mt-5 py-2 rounded-full 
          bg-gradient-to-r from-purple-500 to-pink-500 
          text-white font-semibold 
          hover:scale-105 transition-all duration-300 shadow-lg">
          Login
        </button>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-4">
          Don’t have an account?{" "}
          <span className="text-white cursor-pointer hover:underline">
            Register
          </span>
        </p>

      </div>
    </div>
  );
}