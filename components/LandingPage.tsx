import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Mail, Check, Calendar, Shield } from 'lucide-react';

interface LandingPageProps {
  onEnter: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-gray-200">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white">
            <Mail size={16} />
          </div>
          <span className="font-semibold text-lg tracking-tight">VME50 Mail</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Changelog</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Careers</a>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" onClick={onEnter}>Log in</Button>
          <Button onClick={onEnter} size="sm">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center pt-20 px-6 overflow-hidden">
        <div className="max-w-3xl text-center space-y-8 mb-16">
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            Email made <br />
            <span className="text-gray-400">remarkably simple.</span>
          </h1>
          
          <p className="text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
            Experience a calm, focused inbox designed for speed and clarity. 
            Manage your time and communication in one unified workspace.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <Button size="lg" onClick={onEnter} className="w-full sm:w-auto group">
              Try it for free
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View Documentation
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-xs text-gray-400 pt-8 uppercase tracking-widest font-semibold">
            <div className="flex items-center"><Check size={12} className="mr-1 text-gray-900" /> Free for individuals</div>
            <div className="flex items-center"><Calendar size={12} className="mr-1 text-gray-900" /> Calendar included</div>
            <div className="flex items-center"><Shield size={12} className="mr-1 text-gray-900" /> End-to-end encrypted</div>
          </div>
        </div>

        {/* Product Interface Image (CSS Mockup) */}
        <div className="w-full max-w-6xl relative perspective-1000 group">
            {/* Decorative gradient glow behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>

            {/* The Interface Container */}
            <div className="relative bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden transform rotate-x-6 transition-transform duration-700 ease-out hover:rotate-x-0 hover:scale-[1.01]">
              
              {/* Fake Window Header */}
              <div className="h-10 bg-gray-50 border-b border-gray-100 flex items-center px-4 space-x-2">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                </div>
                <div className="flex-1 text-center text-xs font-medium text-gray-400">Inbox - VME50 Mail</div>
              </div>

              {/* Fake App Content */}
              <div className="flex h-[500px] md:h-[600px]">
                {/* Fake Sidebar */}
                <div className="w-60 bg-gray-50 border-r border-gray-100 p-4 hidden md:flex flex-col space-y-6">
                  {/* New Attention Button Mock */}
                  <div className="h-9 w-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] rounded-md mb-2 opacity-90"></div>
                  
                  <div className="space-y-1">
                    <div className="h-8 w-full bg-gray-200/50 rounded-md"></div>
                    <div className="h-8 w-full rounded-md"></div>
                  </div>
                  <div className="space-y-2">
                     <div className="h-4 w-12 bg-gray-200/50 rounded ml-2"></div>
                     <div className="h-6 w-full bg-white border border-gray-100 shadow-sm rounded-md"></div>
                     <div className="h-6 w-full rounded-md"></div>
                     <div className="h-6 w-full rounded-md"></div>
                  </div>
                </div>

                {/* Fake List */}
                <div className="w-80 border-r border-gray-100 bg-white p-4 hidden lg:flex flex-col space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`p-3 rounded-lg border ${i === 2 ? 'bg-blue-50/30 border-blue-100' : 'bg-white border-gray-100'} space-y-2`}>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                        <div className="h-3 w-20 bg-gray-200 rounded"></div>
                        <div className="flex-1"></div>
                        <div className="h-2 w-8 bg-gray-100 rounded"></div>
                      </div>
                      <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
                      <div className="h-2 w-full bg-gray-100 rounded"></div>
                    </div>
                  ))}
                </div>

                {/* Fake Detail View */}
                <div className="flex-1 bg-white p-8 flex flex-col">
                   <div className="h-8 w-2/3 bg-gray-900 rounded-lg mb-6"></div>
                   <div className="flex items-center space-x-3 mb-8">
                     <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                     <div className="space-y-1">
                        <div className="h-3 w-32 bg-gray-200 rounded"></div>
                        <div className="h-2 w-24 bg-gray-100 rounded"></div>
                     </div>
                   </div>
                   <div className="space-y-3">
                     <div className="h-2 w-full bg-gray-100 rounded"></div>
                     <div className="h-2 w-full bg-gray-100 rounded"></div>
                     <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                     <div className="h-2 w-4/6 bg-gray-100 rounded"></div>
                   </div>
                   <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100 h-32"></div>
                </div>
              </div>

            </div>
        </div>
      </main>
      
      {/* Simple Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        © 2024 VME50 Labs, Inc. All rights reserved.
      </footer>
    </div>
  );
};