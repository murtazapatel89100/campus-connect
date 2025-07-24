'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch(`/api/auth/${mode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Something went wrong');

      setMessage(`✅ ${mode === 'login' ? 'Logged in' : 'Signed up'} successfully`);
    } catch (err: any) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#1A2328] flex items-center justify-center px-4 sm:px-6">
      <div className="absolute w-80 h-80 sm:w-[532px] sm:h-[507px] top-10 left-10 rounded-full bg-gradient-to-b from-[#2C5364] to-[#0F2027] opacity-70"></div>

      <div className="relative z-10 bg-white shadow-xl rounded-xl w-full max-w-3xl sm:max-w-4xl lg:max-w-6xl grid grid-cols-1 sm:grid-cols-2 overflow-hidden">
        {/* Left Image Section */}
        <div className="relative hidden sm:block">
          <Image
            src="/images/hero.png"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col p-6 sm:p-10">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#1E1E1E] mb-6 sm:mb-8">
            {mode === 'login' ? 'Welcome Back!' : 'Join Us!'}
          </h1>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block font-medium text-[#1E1E1E] mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-[#5B5B5B] rounded-md text-sm placeholder-[#5B5B5B]"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block font-medium text-[#1E1E1E] mb-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-[#5B5B5B] rounded-md text-sm placeholder-[#5B5B5B]"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex justify-between text-xs flex-wrap gap-2">
              <label className="flex items-center gap-2 text-[#000000]">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="w-4 h-4 border border-black"
                />
                Remember me
              </label>
              <a href="#" className="text-black whitespace-nowrap">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1E1E1E] text-white font-semibold py-3 rounded-md"
              disabled={loading}
            >
              {loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Sign Up'}
            </button>

            <div className="text-center font-semibold text-black">OR</div>

            <button type="button" className="w-full flex items-center justify-center gap-3 border border-[#5B5B5B] rounded-md py-3">
              <Image src="/icons/github-icon.svg" alt="GitHub" width={20} height={20} />
              <span className="font-semibold text-sm text-[#1A1C1E]">Sign in with GitHub</span>
            </button>

            <button type="button" className="w-full flex items-center justify-center gap-3 border border-[#5B5B5B] rounded-md py-3">
              <Image src="/icons/google-icon.svg" alt="Google" width={18} height={18} />
              <span className="font-semibold text-sm text-[#1A1C1E]">Sign in with Google</span>
            </button>
          </form>

          {message && <p className="mt-4 text-center text-sm text-red-600">{message}</p>}

          <div className="mt-6 flex justify-center items-center text-sm gap-2 flex-wrap text-center">
            <span className="text-black font-semibold">
              {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
            </span>
            <button
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              className="text-[#088D8D] font-extrabold"
            >
              {mode === 'login' ? 'Sign Up' : 'Log In'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
