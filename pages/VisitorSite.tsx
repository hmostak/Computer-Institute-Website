
import React from 'react';
import { MOCK_COURSES } from '../constants';
import { BookOpen, Award, Users, ShieldCheck, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

interface VisitorSiteProps {
  onLoginClick: () => void;
}

export const VisitorSite: React.FC<VisitorSiteProps> = ({ onLoginClick }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">G</div>
              <div>
                <span className="text-2xl font-bold text-blue-900">GVS</span>
                <span className="block text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Computer Education</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
              <a href="#home" className="hover:text-blue-700">Home</a>
              <a href="#courses" className="hover:text-blue-700">Courses</a>
              <a href="#about" className="hover:text-blue-700">About Us</a>
              <a href="#gallery" className="hover:text-blue-700">Gallery</a>
              <a href="#contact" className="hover:text-blue-700">Contact</a>
            </div>
            <button 
              onClick={onLoginClick}
              className="bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-800 transition shadow-lg shadow-blue-200"
            >
              Login Portal
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 z-10">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6">
              ISO 9001:2015 Certified Institute
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-blue-900 mb-6 leading-tight">
              Unlock Your <br />
              <span className="text-blue-600">Digital Potential</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Empowering students with industry-standard computer education since 2015. Join GVS for a brighter career in IT and Digital Arts.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition flex items-center justify-center group">
                Apply for Admission
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition" />
              </button>
              <button className="border-2 border-blue-100 text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition">
                View All Courses
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/training/800/600" alt="Training" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Users size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">10,000+</p>
                <p className="text-sm text-gray-500">Certified Students</p>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full mix-blend-multiply opacity-10 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Courses', value: '50+', icon: <BookOpen /> },
            { label: 'Placement Rate', value: '94%', icon: <Award /> },
            { label: 'Instructors', value: '30+', icon: <Users /> },
            { label: 'Certification', value: 'Global', icon: <ShieldCheck /> },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 border-r last:border-0 border-gray-100">
              <div className="text-blue-600 flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Popular Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose from a variety of professional courses designed to match industry requirements.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOCK_COURSES.map(course => (
              <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="relative h-48">
                  <img src={course.image} alt={course.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-700 uppercase">
                    {course.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{course.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                    <span className="text-lg font-bold text-blue-700">₹{course.fees.toLocaleString()}</span>
                    <button className="text-blue-700 font-bold text-sm hover:underline">Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-950 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-bold mb-6">GVS</h2>
            <p className="text-blue-200/80 leading-relaxed mb-8">
              Providing quality education since 2015. We help students master digital skills and secure their future.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-blue-200/60">
              <li><a href="#" className="hover:text-white">Admission Process</a></li>
              <li><a href="#" className="hover:text-white">Fee Structure</a></li>
              <li><a href="#" className="hover:text-white">Verify Certificate</a></li>
              <li><a href="#" className="hover:text-white">News & Events</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-blue-200/60">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Knowledge Park, Main City Road, IT Center - 400123</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} />
                <span>info@gvscec.org</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-blue-200/60 text-sm mb-4">Subscribe to get updates on new courses.</p>
            <div className="flex">
              <input type="text" placeholder="Email" className="bg-blue-900 border-0 rounded-l-lg px-4 py-2 w-full text-white placeholder-blue-400 focus:ring-2 focus:ring-blue-500" />
              <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-500 transition">Go</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-blue-900 flex flex-col md:flex-row justify-between items-center text-blue-200/40 text-sm">
          <p>© 2026 GVS Computer Education Centre. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
