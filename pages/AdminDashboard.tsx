
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie 
} from 'recharts';
import { Users, BookOpen, MapPin, CreditCard, TrendingUp, AlertCircle, CheckCircle2, Clock } from 'lucide-react';

const stats = [
  { label: 'Total Students', value: '1,248', change: '+12%', icon: <Users className="text-blue-600" />, bg: 'bg-blue-50' },
  { label: 'Active Courses', value: '42', change: '+3', icon: <BookOpen className="text-emerald-600" />, bg: 'bg-emerald-50' },
  { label: 'Active Branches', value: '18', change: '0', icon: <MapPin className="text-amber-600" />, bg: 'bg-amber-50' },
  { label: 'Monthly Revenue', value: '₹4.2L', change: '+8%', icon: <CreditCard className="text-purple-600" />, bg: 'bg-purple-50' },
];

const revenueData = [
  { name: 'Jan', revenue: 320000 },
  { name: 'Feb', revenue: 450000 },
  { name: 'Mar', revenue: 380000 },
  { name: 'Apr', revenue: 510000 },
  { name: 'May', revenue: 480000 },
  { name: 'Jun', revenue: 420000 },
];

const courseDistribution = [
  { name: 'ADCA', value: 400 },
  { name: 'DCA', value: 300 },
  { name: 'Tally', value: 300 },
  { name: 'Web Dev', value: 200 },
];

const COLORS = ['#1e40af', '#0ea5e9', '#f59e0b', '#8b5cf6'];

export const AdminOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
              <h4 className="text-2xl font-bold text-gray-900">{stat.value}</h4>
              <p className={`text-xs font-semibold mt-2 flex items-center ${stat.change.startsWith('+') ? 'text-green-600' : 'text-gray-500'}`}>
                <TrendingUp size={12} className="mr-1" />
                {stat.change} vs last month
              </p>
            </div>
            <div className={`p-3 rounded-xl ${stat.bg}`}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Charts */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-gray-900">Revenue Analytics</h3>
            <select className="text-xs font-medium border-0 bg-gray-50 rounded-lg p-2 focus:ring-0">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1e40af" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#1e40af" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  formatter={(val: number) => [`₹${val.toLocaleString()}`, 'Revenue']}
                />
                <Area type="monotone" dataKey="revenue" stroke="#1e40af" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-8">Course Enrollment</h3>
          <div className="h-64 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={courseDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {courseDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
              <span className="text-2xl font-bold text-gray-900">1.2K</span>
              <span className="text-xs text-gray-500">Students</span>
            </div>
          </div>
          <div className="mt-8 space-y-3">
            {courseDistribution.map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: COLORS[i] }}></div>
                  <span className="text-gray-600">{item.name}</span>
                </div>
                <span className="font-semibold text-gray-900">{Math.round((item.value/1200)*100)}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900">Pending Approvals</h3>
            <button className="text-blue-700 text-sm font-semibold hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Rahul Amin', action: 'New Admission', time: '2h ago', icon: <Clock className="text-amber-500" />, bg: 'bg-amber-50' },
              { name: 'City Center Branch', action: 'Notice Board Update', time: '4h ago', icon: <AlertCircle className="text-blue-500" />, bg: 'bg-blue-50' },
              { name: 'Priya Sharma', action: 'Certificate Request', time: '1d ago', icon: <CheckCircle2 className="text-emerald-500" />, bg: 'bg-emerald-50' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-gray-50 hover:bg-gray-50 transition cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className={`p-2.5 rounded-lg ${item.bg}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900">{item.name}</h5>
                    <p className="text-xs text-gray-500">{item.action}</p>
                  </div>
                </div>
                <span className="text-[10px] font-medium text-gray-400">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-6">System Status</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-gray-50">
              <p className="text-xs text-gray-500 mb-1">Server Status</p>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm font-bold text-gray-900">Optimal</span>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-gray-50">
              <p className="text-xs text-gray-500 mb-1">Database Sync</p>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm font-bold text-gray-900">Live</span>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-gray-50">
              <p className="text-xs text-gray-500 mb-1">Last Backup</p>
              <span className="text-sm font-bold text-gray-900">12m ago</span>
            </div>
            <div className="p-4 rounded-xl bg-gray-50">
              <p className="text-xs text-gray-500 mb-1">Active Admins</p>
              <span className="text-sm font-bold text-gray-900">4 Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
