"use client"
import React, { useState, useEffect } from 'react';
import ThemeTogglerButtonDemo from '../ThemeButton';
import {
    Heart, MessageCircle, MoreHorizontal, Grid, Film, User,
    Sun, Moon, Home, Compass, MapPin, Link as LinkIcon
} from 'lucide-react';
import Link from 'next/link';

// --- Data Constants ---
const POSTS_DATA = [
    { id: 1, img: "https://images.unsplash.com/photo-1493723843684-a63bc8303ca3?auto=format&fit=crop&w=600&q=80", likes: 1240, comments: 45, desc: "Morning aesthetic ☕️" },
    { id: 2, img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", likes: 3502, comments: 120, desc: "Ocean vibes only." },
    { id: 3, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80", likes: 890, comments: 32, desc: "City lights & blurry nights." },
    { id: 4, img: "https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=600&q=80", likes: 2100, comments: 88, desc: "Simplicity is the ultimate sophistication." },
    { id: 5, img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80", likes: 1540, comments: 55, desc: "Photography gear setup." },
    { id: 6, img: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80", likes: 4300, comments: 210, desc: "Forest wanderer." },
    { id: 7, img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80", likes: 980, comments: 22, desc: "Workstation goals." },
    { id: 8, img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80", likes: 2750, comments: 134, desc: "Starry nights in the mountains." },
    { id: 9, img: "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=600&q=80", likes: 1890, comments: 67, desc: "Portrait session." }
];

const HIGHLIGHTS_DATA = [
    { id: 1, name: "Travel", img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=150&q=80" },
    { id: 2, name: "Design", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=150&q=80" },
    { id: 3, name: "Life", img: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=150&q=80" },
    { id: 4, name: "Tech", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=150&q=80" },
];

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [toast, setToast] = useState({ show: false, message: '' });

    const toggleTheme = () => setDarkMode(!darkMode);

    const showToast = (message) => {
        setToast({ show: true, message });
        setTimeout(() => setToast({ show: false, message: '' }), 3000);
    };

    // Base classes that change with theme
    const themeClasses = darkMode
        ? 'bg-neutral-950 text-neutral-100'
        : 'bg-neutral-50 text-neutral-900';

    const navClasses = darkMode
        ? 'bg-neutral-900/90 border-neutral-800'
        : 'bg-white/90 border-neutral-200';

    return (
        <div className={`min-h-screen font-sans transition-colors duration-300 ${themeClasses}`}>

            {/* Global Animations Style Block */}
            <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseHeart {
          0% { transform: scale(1) translate(-50%, -50%); opacity: 1; }
          50% { transform: scale(1.4) translate(-50%, -50%); opacity: 0.8; }
          100% { transform: scale(1) translate(-50%, -50%); opacity: 0; }
        }
        .animate-fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>

            <Navbar darkMode={darkMode} toggleTheme={toggleTheme} navClasses={navClasses} />

            <main className="pt-24 pb-12 px-4 max-w-4xl mx-auto">
                <ProfileHeader darkMode={darkMode} showToast={showToast} />
                <Highlights darkMode={darkMode} />
                <ContentTabs darkMode={darkMode} />
                <PostGrid darkMode={darkMode} showToast={showToast} />
            </main>

            <Footer darkMode={darkMode} />
            <Toast toast={toast} />
        </div>
    );
}

// --- Components ---

const Navbar = ({ darkMode, toggleTheme, navClasses }) => (
    <nav className={`fixed top-0 w-full backdrop-blur-md border-b z-50 h-16 flex items-center justify-center transition-colors duration-300 ${navClasses}`}>
        <div className="max-w-4xl w-full px-4 flex justify-between items-center">
            <div className={`text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                M/M
            </div>
            <div className={`flex gap-6 ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                <Link className={`hover:${darkMode ? 'text-white' : 'text-neutral-900'} transition-colors hidden sm:block`} href="./home">
                    <Home size={22} />
                </Link>

                <div >
                    <ThemeTogglerButtonDemo />
                </div>
                <div className={`w-8 h-8 rounded-full overflow-hidden border ${darkMode ? 'border-neutral-700' : 'border-neutral-300'}`}>
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Mini Profile" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </nav>
);

const ProfileHeader = ({ darkMode, showToast }) => {
    const [isFollowing, setIsFollowing] = useState(false);
    const [followerCount, setFollowerCount] = useState(12500);

    const handleFollow = () => {
        setIsFollowing(!isFollowing);
        if (!isFollowing) {
            setFollowerCount(prev => prev + 1);
            showToast("You are now following Alexa");
        } else {
            setFollowerCount(prev => prev - 1);
            showToast("Unfollowed");
        }
    };

    const formatCount = (num) => num > 999 ? (num / 1000).toFixed(1) + 'k' : num;

    const buttonBase = "px-6 py-1.5 rounded-lg text-sm font-medium transition-all active:scale-95 shadow-sm";
    const followBtnClass = isFollowing
        ? (darkMode ? "bg-neutral-800 text-white border border-neutral-700 hover:bg-neutral-700" : "bg-white text-neutral-900 border border-neutral-300 hover:bg-neutral-50")
        : (darkMode ? "bg-white text-neutral-900 hover:bg-neutral-200" : "bg-neutral-900 text-white hover:bg-neutral-800");

    const secondaryBtnClass = darkMode
        ? "bg-neutral-800 text-neutral-200 border border-neutral-700 hover:bg-neutral-700"
        : "bg-neutral-100 text-neutral-900 border border-neutral-200 hover:bg-neutral-200";

    return (
        <header className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>

            {/* Profile Photo with Status Dot */}
            <div className="relative group shrink-0">
                <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr shadow-sm ${darkMode ? 'from-neutral-700 to-neutral-800' : 'from-neutral-300 to-neutral-100'}`}>
                    <div className={`w-full h-full rounded-full overflow-hidden border-4 ${darkMode ? 'border-neutral-900 bg-neutral-900' : 'border-white bg-white'}`}>
                        <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                            alt="Profile"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                </div>
                <div className={`absolute bottom-3 right-3 w-5 h-5 bg-green-500 border-4 rounded-full ${darkMode ? 'border-neutral-900' : 'border-white'}`}></div>
            </div>

            {/* Info Section */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-5 w-full">

                <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                    <h1 className="text-2xl font-bold tracking-tight">alexa_designs</h1>
                    <div className="flex gap-2">
                        <button onClick={handleFollow} className={buttonBase + " " + followBtnClass}>
                            {isFollowing ? 'Following' : 'Follow'}
                        </button>
                        <button className={`${buttonBase} ${secondaryBtnClass} px-4`}>
                            Message
                        </button>
                        <button className={`p-2 rounded-lg transition-colors ${secondaryBtnClass}`}>
                            <MoreHorizontal size={20} />
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <ul className={`flex gap-6 md:gap-10 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {[
                        { label: 'posts', val: '42' },
                        { label: 'followers', val: formatCount(followerCount) },
                        { label: 'following', val: '842' }
                    ].map((stat, i) => (
                        <li key={i} className={`flex flex-col md:flex-row items-center gap-1 cursor-pointer transition-colors hover:${darkMode ? 'text-white' : 'text-black'}`}>
                            <span className={`font-bold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>{stat.val}</span>
                            <span className="text-sm md:text-base">{stat.label}</span>
                        </li>
                    ))}
                </ul>

                {/* Bio */}
                <div className="max-w-md text-sm md:text-base">
                    <p className="font-medium">Alexa | Visual Storyteller</p>
                    <p className={`mt-1 leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        Capturing moments in monochrome & minimalism. <br />
                        Digital Artist based in NY <br />
                        <a href="#" className="text-blue-500 font-medium hover:underline flex items-center gap-1 justify-center md:justify-start mt-1">
                            <LinkIcon size={14} /> alexadesigns.com
                        </a>
                    </p>
                </div>

            </div>
        </header>
    );
};

const Highlights = ({ darkMode }) => (
    <div className="flex gap-6 overflow-x-auto pb-4 mb-8 scrollbar-hide animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
        {HIGHLIGHTS_DATA.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-2 cursor-pointer group min-w-[70px]">
                <div className={`w-16 h-16 rounded-full p-[2px] border transition-colors ${darkMode ? 'border-neutral-700 group-hover:border-neutral-500 bg-neutral-900' : 'border-neutral-300 group-hover:border-neutral-500 bg-white'}`}>
                    <div className="w-full h-full rounded-full overflow-hidden bg-neutral-200">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                </div>
                <span className={`text-xs font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-700'}`}>{item.name}</span>
            </div>
        ))}
    </div>
);

const ContentTabs = ({ darkMode }) => {
    const activeClass = darkMode ? 'border-white text-white' : 'border-neutral-900 text-neutral-900';
    const inactiveClass = darkMode ? 'border-transparent text-neutral-500 hover:text-neutral-300' : 'border-transparent text-neutral-400 hover:text-neutral-600';

    return (
        <div className={`border-t mb-6 flex justify-center gap-12 text-xs font-medium tracking-widest uppercase animate-fade-in opacity-0 ${darkMode ? 'border-neutral-800' : 'border-neutral-200'}`} style={{ animationDelay: '0.3s' }}>
            <button className={`py-4 border-t-2 flex items-center gap-2 transition-colors ${activeClass}`}>
                <Grid size={14} /> Posts
            </button>
            <button className={`py-4 border-t-2 flex items-center gap-2 transition-colors ${inactiveClass}`}>
                <Film size={14} /> Reels
            </button>
            <button className={`py-4 border-t-2 flex items-center gap-2 transition-colors ${inactiveClass}`}>
                <User size={14} /> Tagged
            </button>
        </div>
    );
};

const PostGrid = ({ darkMode, showToast }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 sm:gap-4 md:gap-6 pb-20">
            {POSTS_DATA.map((post, index) => (
                <PostCard
                    key={post.id}
                    post={post}
                    index={index}
                    darkMode={darkMode}
                    showToast={showToast}
                />
            ))}
        </div>
    );
};

const PostCard = ({ post, index, darkMode, showToast }) => {
    const [liked, setLiked] = useState(false);
    const [animating, setAnimating] = useState(false);

    const handleDoubleClick = () => {
        setLiked(true);
        setAnimating(true);
        showToast("Liked!");
        setTimeout(() => setAnimating(false), 800);
    };

    const formatCount = (num) => num > 999 ? (num / 1000).toFixed(1) + 'k' : num;
    // Delay increases with index for cascading effect
    const delay = `${0.4 + (index * 0.05)}s`;

    return (
        <div
            className={`relative group overflow-hidden rounded-lg aspect-square cursor-pointer animate-fade-in opacity-0 ${darkMode ? 'bg-neutral-900' : 'bg-neutral-100'}`}
            style={{ animationDelay: delay }}
            onDoubleClick={handleDoubleClick}
        >
            <img
                src={post.img}
                alt={post.desc}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Heart Animation Overlay */}
            {animating && (
                <div className="absolute top-1/2 left-1/2 pointer-events-none z-20" style={{ animation: 'pulseHeart 0.8s ease-in-out' }}>
                    <Heart size={80} className="text-white fill-white drop-shadow-lg" />
                </div>
            )}

            {/* Hover Info Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white font-bold backdrop-blur-[2px]">
                <div className="flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Heart size={20} className={liked ? "fill-white" : ""} />
                    <span>{formatCount(liked ? post.likes + 1 : post.likes)}</span>
                </div>
                <div className="flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" style={{ transitionDelay: '0.05s' }}>
                    <MessageCircle size={20} />
                    <span>{post.comments}</span>
                </div>
            </div>

            {/* Description Tooltip (Desktop) */}
            <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-medium z-10 hidden sm:block">
                <p className="truncate w-40 drop-shadow-md">{post.desc}</p>
            </div>
        </div>
    );
};

const Footer = ({ darkMode }) => (
    <footer className={`py-8 text-center text-xs transition-colors ${darkMode ? 'text-neutral-600' : 'text-neutral-400'}`}>
        <p>© 2026 Minimalist Social. All rights reserved.</p>
    </footer>
);

const Toast = ({ toast }) => (
    <div
        className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-0 
    bg-neutral-900 text-white px-6 py-3 rounded-full shadow-lg z-50 text-sm font-medium
    transition-all duration-300 ${toast.show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
        {toast.message}
    </div>
);