
import React from 'react';
import { UserRole } from '../types';
import { ADMIN_NAV, STUDENT_NAV } from '../constants';
import { LogOut, User as UserIcon, Bell, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  role: UserRole;
  userName: string;
  onLogout: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const DashboardLayout: React.FC<LayoutProps> = ({ 
  children, role, userName, onLogout, activeTab, setActiveTab 
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const navItems = role === UserRole.ADMIN ? ADMIN_NAV : STUDENT_NAV;

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside className={`bg-blue-900 text-white w-64 flex-shrink-0 transition-all duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-20'}`}>
        <div className="p-6 flex items-center justify-between">
          <h1 className={`font-bold text-xl tracking-tight transition-opacity ${!isSidebarOpen && 'lg:opacity-0'}`}>
            GVS CMS
          </h1>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden">
            <X size={24} />
          </button>
        </div>
        
        <nav className="mt-6 px-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
                activeTab === item.id 
                  ? 'bg-blue-700 text-white shadow-lg' 
                  : 'text-blue-100 hover:bg-blue-800'
              }`}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              <span className={`ml-4 text-sm font-medium transition-opacity ${!isSidebarOpen && 'lg:hidden'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4">
          <button 
            onClick={onLogout}
            className="flex items-center w-full px-4 py-3 text-blue-100 hover:bg-red-600 hover:text-white rounded-lg transition-colors"
          >
            <LogOut size={20} />
            <span className={`ml-4 text-sm font-medium transition-opacity ${!isSidebarOpen && 'lg:hidden'}`}>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 z-10">
          <div className="flex items-center">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 mr-4 text-gray-500 hover:bg-gray-100 rounded-lg hidden lg:block"
            >
              <Menu size={20} />
            </button>
            <h2 className="text-lg font-semibold text-gray-800 capitalize">{activeTab}</h2>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-blue-600 relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center pl-4 border-l border-gray-200">
              <div className="text-right mr-3 hidden sm:block">
                <p className="text-sm font-medium text-gray-900">{userName}</p>
                <p className="text-xs text-gray-500 capitalize">{role.replace('_', ' ')}</p>
              </div>
              <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                <UserIcon size={18} />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Pages */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};
