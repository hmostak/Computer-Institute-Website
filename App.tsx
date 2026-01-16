
import React, { useState, useEffect } from 'react';
import { User, UserRole } from './types';
import { VisitorSite } from './pages/VisitorSite';
import { DashboardLayout } from './components/Layout';
import { AdminOverview } from './pages/AdminDashboard';
import { StudentOverview } from './pages/StudentDashboard';
import { Lock, Mail, ChevronRight, X } from 'lucide-react';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Mock auto-login for demo purposes or handling persistent sessions
  useEffect(() => {
    const savedUser = localStorage.getItem('gvs_user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    
    // Simulating API call
    setTimeout(() => {
      let user: User;
      if (loginForm.email.includes('admin')) {
        user = { id: '1', name: 'Admin User', email: loginForm.email, role: UserRole.ADMIN };
      } else {
        user = { id: '2', name: 'Rahul Amin', email: loginForm.email, role: UserRole.STUDENT, studentId: 'S101', branchId: 'B1' };
      }
      
      setCurrentUser(user);
      localStorage.setItem('gvs_user', JSON.stringify(user));
      setShowLoginModal(false);
      setIsLoggingIn(false);
    }, 1000);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('gvs_user');
    setActiveTab('dashboard');
  };

  // Render Logic
  if (currentUser) {
    return (
      <DashboardLayout 
        role={currentUser.role} 
        userName={currentUser.name} 
        onLogout={handleLogout}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        {currentUser.role === UserRole.ADMIN ? (
          activeTab === 'dashboard' ? <AdminOverview /> : (
            <div className="bg-white p-12 rounded-3xl text-center border-2 border-dashed border-gray-100">
              <h2 className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-2">Module Under Construction</h2>
              <p className="text-gray-400">The <strong>{activeTab}</strong> management feature is coming soon to the dashboard.</p>
            </div>
          )
        ) : (
          activeTab === 'dashboard' ? <StudentOverview /> : (
             <div className="bg-white p-12 rounded-3xl text-center border-2 border-dashed border-gray-100">
              <h2 className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-2">Feature Unavailable</h2>
              <p className="text-gray-400">Your portal is currently being updated with the <strong>{activeTab}</strong> functionality.</p>
            </div>
          )
        )}
      </DashboardLayout>
    );
  }

  return (
    <>
      <VisitorSite onLoginClick={() => setShowLoginModal(true)} />

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-blue-950/40 backdrop-blur-sm" onClick={() => setShowLoginModal(false)}></div>
          <div className="bg-white rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl relative z-10 animate-in fade-in zoom-in duration-300">
            <div className="bg-blue-700 p-8 text-white relative">
              <button 
                onClick={() => setShowLoginModal(false)}
                className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition"
              >
                <X size={20} />
              </button>
              <h3 className="text-2xl font-bold mb-2">Welcome Back</h3>
              <p className="text-blue-100 text-sm">Sign in to access your dashboard</p>
            </div>
            <form onSubmit={handleLogin} className="p-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. admin@gvscec.org"
                      className="w-full bg-gray-50 border-0 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 transition outline-none text-gray-800"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Password</label>
                    <a href="#" className="text-xs text-blue-600 font-bold hover:underline">Forgot?</a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="password" 
                      required
                      placeholder="••••••••"
                      className="w-full bg-gray-50 border-0 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 transition outline-none text-gray-800"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <button 
                type="submit" 
                disabled={isLoggingIn}
                className="w-full bg-blue-700 text-white py-4 rounded-2xl font-bold hover:bg-blue-800 transition shadow-lg shadow-blue-200 flex items-center justify-center group disabled:opacity-50"
              >
                {isLoggingIn ? 'Verifying...' : 'Sign In'}
                {!isLoggingIn && <ChevronRight className="ml-2 group-hover:translate-x-1 transition" />}
              </button>
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Are you a student? <a href="#" className="text-blue-600 font-bold hover:underline">Verify Certificate</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
