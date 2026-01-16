
import React from 'react';
import { BookOpen, CreditCard, Award, FileText, Download, Wallet, ArrowUpRight } from 'lucide-react';

export const StudentOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Welcome & Quick Info */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">Hello, Rahul Amin! 👋</h2>
            <p className="text-blue-100/80 mb-8 max-w-md">You're making great progress in your Advanced Diploma course. Keep it up!</p>
            <div className="flex items-center space-x-4">
              <button className="bg-white text-blue-900 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-50 transition">
                Continue Learning
              </button>
              <button className="bg-blue-600/30 border border-blue-400/50 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-600/50 transition">
                View Schedule
              </button>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-400/20 rounded-full -br-20 -mb-20 blur-2xl"></div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
                <Wallet size={24} />
              </div>
              <button className="text-blue-700 text-xs font-bold flex items-center">
                Top up <ArrowUpRight size={14} className="ml-1" />
              </button>
            </div>
            <p className="text-sm text-gray-500 font-medium mb-1">Digital Wallet Balance</p>
            <h3 className="text-3xl font-bold text-gray-900">₹2,450.00</h3>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between text-sm">
            <span className="text-gray-500">Upcoming Payment</span>
            <span className="font-bold text-red-600">₹1,500.00 (Due: 15 Oct)</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Course Progress */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-6">Current Course</h3>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-700">
                <BookOpen size={32} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">ADCA - Semester II</h4>
                <p className="text-sm text-gray-500">Batch: Morning (9 AM - 11 AM)</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 font-medium">Overall Progress</span>
                <span className="text-blue-700 font-bold">65%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full transition-all duration-1000" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Latest Study Material</h3>
              <div className="space-y-3">
                {['Tally Prime Basics.pdf', 'Advanced Excel Shortcuts.xlsx', 'Module 4 Assignments.zip'].map((file, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-600"><FileText size={18} /></div>
                      <span className="text-sm font-medium text-gray-700 truncate max-w-[150px]">{file}</span>
                    </div>
                    <Download size={16} className="text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Certifications</h3>
              <div className="flex flex-col items-center justify-center py-4">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                  <Award size={40} />
                </div>
                <p className="text-sm text-gray-500 text-center mb-4">You have earned 2 certificates so far.</p>
                <button className="text-blue-700 text-sm font-bold hover:underline">Download All</button>
              </div>
            </div>
          </div>
        </div>

        {/* Announcements */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900">Notices</h3>
            <span className="text-[10px] bg-red-100 text-red-600 px-2 py-1 rounded-full font-bold">New</span>
          </div>
          <div className="space-y-6">
            {[
              { title: 'Holiday Notice', desc: 'Institute will remain closed on Sunday for Diwali.', date: 'Oct 10, 2026' },
              { title: 'Exam Date Sheet', desc: 'Semester 2 exams start from Oct 25.', date: 'Oct 08, 2026' },
              { title: 'Workshop: AI Basics', desc: 'Register for free workshop on Saturday.', date: 'Oct 05, 2026' },
            ].map((notice, i) => (
              <div key={i} className="border-l-2 border-blue-500 pl-4 py-1">
                <h5 className="text-sm font-bold text-gray-900 mb-1">{notice.title}</h5>
                <p className="text-xs text-gray-500 mb-2">{notice.desc}</p>
                <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">{notice.date}</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 rounded-xl border-2 border-dashed border-gray-200 text-gray-400 text-sm font-medium hover:border-blue-300 hover:text-blue-500 transition">
            View Archives
          </button>
        </div>
      </div>
    </div>
  );
};
