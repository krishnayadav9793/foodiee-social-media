import React, { useState, useRef } from 'react';

const FoodieLoginCard = () => {
  // Removed isLogin state as this is now Login only
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  // 3D Tilt Logic
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (limit to 10 degrees)
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden  flex items-center justify-center font-sans">
      
      {/* --- Dynamic CSS --- */}
      <style>{`
        @keyframes blob-bounce {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes float-icon {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .animate-blob {
          animation: blob-bounce 20s infinite ease-in-out;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .float-fast { animation: float-icon 4s ease-in-out infinite; }
        .float-slow { animation: float-icon 6s ease-in-out infinite; }
        .perspective-1000 { perspective: 1000px; }
      `}</style>

      {/* --- Background: Ambient 'Aurora' Gradients --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Zesty Orange Blob */}
        <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-[#FF9F1C] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
        {/* Berry Pink Blob */}
        <div className="absolute top-0 -right-20 w-[500px] h-[500px] bg-[#FF006E] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-2000"></div>
        {/* Fresh Lime Blob */}
        <div className="absolute -bottom-32 left-20 w-[500px] h-[500px] bg-[#CBF928] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-4000"></div>
        
        {/* Noise Texture Overlay for texture */}
        <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>
      </div>

      {/* --- 3D Interactive Card Container --- */}
      <div className="perspective-1000 z-10 w-full max-w-md px-4" 
           onMouseMove={handleMouseMove} 
           onMouseLeave={handleMouseLeave}>
        
        <div 
          ref={cardRef}
          className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-transform duration-200 ease-out transform-gpu"
          style={{
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          }}
        >
          {/* Shine effect on card */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

          {/* Floating Decor Icons (CSS Animated) */}
          <div className="absolute -top-12 -left-8 text-6xl float-slow select-none grayscale-[0.2]">🍔</div>
          <div className="absolute -bottom-8 -right-8 text-6xl float-fast animation-delay-2000 select-none grayscale-[0.2]">🥤</div>

          {/* Header */}
          <div className="text-center mb-8 relative z-20">
            <h1 className="text-5xl font-black text-white tracking-tight mb-2 drop-shadow-lg">
              Crave.
            </h1>
            <p className="text-white/60 font-medium">
              Satisfy your hunger. Sign in.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 relative z-20">
            
            {/* Removed Signup Name Field */}

            {/* Email */}
            <div className="relative group">
              <input 
                type="email" 
                required
                className="peer w-full bg-black/20 border-2 border-transparent focus:border-[#FF9F1C] rounded-2xl px-5 py-4 text-white placeholder-transparent outline-none transition-all font-medium"
                placeholder="Email Address"
              />
              <label className="absolute left-5 top-4 text-white/50 text-sm font-bold transition-all pointer-events-none peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-[#FF9F1C] origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-white/50">
                Email Address
              </label>
              <div className="absolute right-4 top-4 text-white/20">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
              </div>
            </div>

            {/* Password */}
            <div className="relative group">
              <input 
                type="password" 
                required
                className="peer w-full bg-black/20 border-2 border-transparent focus:border-[#FF006E] rounded-2xl px-5 py-4 text-white placeholder-transparent outline-none transition-all font-medium"
                placeholder="Password"
              />
              <label className="absolute left-5 top-4 text-white/50 text-sm font-bold transition-all pointer-events-none peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-[#FF006E] origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-white/50">
                Password
              </label>
              <div className="absolute right-4 top-4 text-white/20">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
            </div>

            {/* Forgot Password Link - Always visible for login */}
            <div className="flex justify-end">
              <a href="#" className="text-xs font-bold text-white/60 hover:text-[#CBF928] transition-colors">Forgot Password?</a>
            </div>

            {/* Main Button */}
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#FF9F1C] via-[#FF006E] to-[#FF9F1C] bg-[length:200%_auto] hover:bg-right transition-[background-position] duration-500 rounded-2xl py-4 font-bold text-white shadow-lg shadow-[#FF006E]/30 active:scale-[0.98] flex justify-center items-center gap-2 group"
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              ) : (
                <>
                  <span className="group-hover:translate-x-1 transition-transform">Dig In</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </>
              )}
            </button>

            {/* Social Divider */}
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink-0 mx-4 text-white/30 text-xs font-bold uppercase tracking-wider">Socials</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-xl py-3 transition-all">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5 mr-2" alt="Google" />
                <span className="text-sm font-bold text-white/80">Google</span>
              </button>
              <button type="button" className="flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-xl py-3 transition-all">
                <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13.162 1.227C12.015.249 13.689 0 13.689 0c-4.279.034-6.39 2.527-6.501 2.663-.01.015-3.111 3.737-.899 9.356 1.342 3.407 3.656 3.396 3.656 3.396 1.543-.09 2.132-1.001 4.106-1.001 1.996 0 2.541.979 4.117 1.001 0 0 2.62.156 4.273-3.743 0 0 1.121-2.215-.224-3.578-.056-.056-2.522-2.31-2.522-4.945 0-3.321 2.454-4.667 2.454-4.667-1.399-3.089-4.307-3.233-5.066-3.245-.056 0-1.282.023-3.921 1.227zM8.322 3.533c-.234-2.854 2.376-4.307 2.376-4.307.034.022.09.432.09 1.154 0 1.643-.921 3.848-2.466 4.352-.167.056-.503.1-.969.1-2.031 0-2.331-2.576-2.331-2.576.246-.067.457-.1.744-.1.491.001 2.321.527 2.556 1.377z"/></svg>
                <span className="text-sm font-bold text-white/80">Apple</span>
              </button>
            </div>
            
            {/* Toggle Link Replaced with static link */}
            <div className="text-center">
              <p className="text-white/50 text-sm">
                New here? <a href="./signup" className="font-bold text-[#CBF928] hover:text-white transition-colors">Create an account</a>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Success Toast */}
      <div className={`fixed bottom-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-full shadow-2xl transform transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] z-50 flex items-center gap-3 ${showToast ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90'}`}>
        <div className="bg-green-500 rounded-full p-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-sm">Delicious!</h4>
          <p className="text-gray-500 text-xs">You're logged in successfully.</p>
        </div>
      </div>
    </div>
  );
};

export default FoodieLoginCard;