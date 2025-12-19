import React from 'react';
import { 
  Inbox, 
  Send, 
  File, 
  Trash2, 
  Archive, 
  Plus, 
  ChevronDown,
  Hash,
  Settings,
  MoreHorizontal,
  Zap
} from 'lucide-react';
import { Folder } from '../types';

interface SidebarProps {
  currentFolder: Folder;
  onNavigate: (folder: Folder) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentFolder, onNavigate }) => {
  const navItems = [
    { id: 'inbox', label: 'Inbox', icon: Inbox, count: 4 },
    { id: 'sent', label: 'Sent', icon: Send },
    { id: 'drafts', label: 'Drafts', icon: File },
    { id: 'archive', label: 'Archive', icon: Archive },
    { id: 'trash', label: 'Trash', icon: Trash2 },
  ];

  const tags = [
    { label: 'Work', color: 'bg-blue-500' },
    { label: 'Personal', color: 'bg-pink-500' },
    { label: 'Finance', color: 'bg-green-500' },
    { label: 'Travel', color: 'bg-yellow-500' },
  ];

  return (
    <div className="w-60 bg-gray-50 h-full flex flex-col border-r border-gray-200 flex-shrink-0">
      {/* Account Switcher */}
      <div className="h-14 flex items-center px-4 border-b border-gray-100 hover:bg-gray-100 cursor-pointer transition-colors">
        <div className="w-6 h-6 rounded bg-gradient-to-tr from-gray-700 to-gray-900 flex items-center justify-center text-white text-xs font-bold mr-3">
          N
        </div>
        <div className="flex-1 font-medium text-sm text-gray-700 truncate">demo@noption.com</div>
        <ChevronDown size={14} className="text-gray-400" />
      </div>

      {/* Main Nav */}
      <div className="flex-1 overflow-y-auto py-4 px-2 space-y-6">
        
        {/* Attention Button - Cyber Style */}
        <div className="px-2">
            <a 
                href="https://vme50gateway.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-white py-2 px-3 rounded-md shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300 border border-cyan-300/50 group text-decoration-none"
            >
                <Zap size={16} className="fill-white group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm tracking-wide uppercase italic">Attention</span>
            </a>
        </div>

        <div>
          <div className="flex items-center justify-between px-2 mb-2">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Favorites</span>
          </div>
          <div className="space-y-0.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id as Folder)}
                className={`w-full flex items-center px-2 py-1.5 rounded-md text-sm transition-colors group ${
                  currentFolder === item.id 
                    ? 'bg-gray-200/60 text-gray-900 font-medium' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon size={16} className={`mr-2.5 ${currentFolder === item.id ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-700'}`} />
                <span className="flex-1 text-left">{item.label}</span>
                {item.count && (
                  <span className="text-xs text-gray-400 font-medium">{item.count}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between px-2 mb-2 group cursor-pointer">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider group-hover:text-gray-600 transition-colors">Tags</span>
            <Plus size={12} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="space-y-0.5">
            {tags.map((tag) => (
              <button
                key={tag.label}
                className="w-full flex items-center px-2 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <Hash size={16} className="mr-2.5 text-gray-400" />
                <span className="flex-1 text-left">{tag.label}</span>
                <div className={`w-1.5 h-1.5 rounded-full ${tag.color}`}></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-3 border-t border-gray-200">
         <button className="flex items-center space-x-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 w-full p-2 rounded-md transition-colors">
            <Settings size={16} />
            <span>Settings</span>
         </button>
      </div>
    </div>
  );
};