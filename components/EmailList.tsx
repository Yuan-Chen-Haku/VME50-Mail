import React from 'react';
import { Email } from '../types';
import { Search } from 'lucide-react';

interface EmailListProps {
  emails: Email[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export const EmailList: React.FC<EmailListProps> = ({ emails, selectedId, onSelect }) => {
  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200 w-full md:w-80 lg:w-96 flex-shrink-0">
      {/* Header / Search */}
      <div className="h-14 border-b border-gray-100 flex items-center px-4 flex-shrink-0">
        <div className="relative w-full">
            <Search size={14} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
                type="text" 
                placeholder="Search" 
                className="w-full bg-gray-50 hover:bg-gray-100 focus:bg-white border border-transparent focus:border-gray-200 rounded-md py-1.5 pl-8 pr-3 text-sm outline-none transition-all placeholder:text-gray-400"
            />
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto">
        {emails.map((email) => (
          <div
            key={email.id}
            onClick={() => onSelect(email.id)}
            className={`
              cursor-pointer p-4 border-b border-gray-50 transition-colors group relative
              ${selectedId === email.id ? 'bg-blue-50/50' : 'hover:bg-gray-50'}
            `}
          >
            {selectedId === email.id && (
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-500"></div>
            )}
            
            <div className="flex justify-between items-baseline mb-1">
              <span className={`text-sm truncate pr-2 ${!email.read ? 'font-semibold text-gray-900' : 'font-medium text-gray-700'}`}>
                {email.sender}
              </span>
              <span className={`text-xs flex-shrink-0 ${!email.read ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
                {email.timestamp}
              </span>
            </div>
            
            <div className={`text-sm mb-1 truncate ${!email.read ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
              {email.subject}
            </div>
            
            <div className="text-xs text-gray-400 truncate leading-relaxed">
              {email.preview}
            </div>

            {email.tags.length > 0 && (
                <div className="flex gap-1 mt-2">
                    {email.tags.map(tag => (
                        <span key={tag} className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-600 border border-gray-200">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};