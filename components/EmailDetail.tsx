import React from 'react';
import { Email } from '../types';
import { 
  Star, 
  Reply, 
  MoreHorizontal, 
  Archive, 
  Trash2,
  Printer,
  Forward,
  Smile
} from 'lucide-react';
import { Button } from './ui/Button';

interface EmailDetailProps {
  email: Email | null;
}

export const EmailDetail: React.FC<EmailDetailProps> = ({ email }) => {
  if (!email) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-white text-gray-400">
        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
             <div className="w-8 h-8 rounded-md border-2 border-gray-200"></div>
        </div>
        <p>No email selected</p>
        <span className="text-xs mt-2">Press <kbd className="font-sans px-1 py-0.5 bg-gray-100 border border-gray-200 rounded text-gray-500">space</kbd> to archive</span>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-white overflow-hidden">
      {/* Toolbar */}
      <div className="h-14 border-b border-gray-100 flex items-center justify-between px-6 flex-shrink-0">
        <div className="flex items-center space-x-1">
           <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors" title="Archive">
             <Archive size={18} />
           </button>
           <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete">
             <Trash2 size={18} />
           </button>
           <div className="w-px h-4 bg-gray-200 mx-2"></div>
           <button className="p-2 text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 rounded-md transition-colors" title="Star">
             <Star size={18} />
           </button>
        </div>
        <div className="flex items-center space-x-1">
           <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
             <Printer size={18} />
           </button>
           <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
             <MoreHorizontal size={18} />
           </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-start justify-between mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 leading-tight">{email.subject}</h1>
                    <div className="flex items-center space-x-2">
                        {email.tags.map(tag => (
                             <span key={tag} className="px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                                {tag}
                             </span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${email.avatarColor}`}>
                            {email.sender.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <div className="flex items-center space-x-2">
                                <span className="font-semibold text-gray-900">{email.sender}</span>
                                <span className="text-gray-400 text-sm">&lt;{email.senderEmail}&gt;</span>
                            </div>
                            <div className="text-xs text-gray-500">
                                to me <span className="mx-1">•</span> {email.timestamp}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="prose prose-gray max-w-none text-gray-800 leading-relaxed whitespace-pre-line">
                {email.body}
            </div>

            {/* Reply Box */}
            <div className="mt-12 border border-gray-200 rounded-lg p-4 shadow-sm bg-gray-50/50">
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-gray-900 transition-colors">
                        <Reply size={16} /> <span>Reply</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-gray-900 transition-colors">
                        <Forward size={16} /> <span>Forward</span>
                    </button>
                </div>
                <div className="relative">
                    <textarea 
                        className="w-full bg-white border border-gray-200 rounded-md p-3 text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all resize-none h-24"
                        placeholder="Write a reply..."
                    ></textarea>
                    <div className="absolute bottom-2 right-2 flex space-x-2">
                        <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-100">
                            <Smile size={16} />
                        </button>
                        <Button size="sm">Send</Button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};