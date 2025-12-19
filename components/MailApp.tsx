import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { EmailList } from './EmailList';
import { EmailDetail } from './EmailDetail';
import { mockEmails } from '../data';
import { Folder, Email } from '../types';

export const MailApp: React.FC = () => {
  const [currentFolder, setCurrentFolder] = useState<Folder>('inbox');
  const [selectedEmailId, setSelectedEmailId] = useState<string | null>(mockEmails[0].id);
  
  const selectedEmail = mockEmails.find(e => e.id === selectedEmailId) || null;

  return (
    <div className="flex h-screen w-screen bg-white overflow-hidden text-gray-900 font-sans">
      <Sidebar 
        currentFolder={currentFolder} 
        onNavigate={setCurrentFolder} 
      />
      
      <main className="flex flex-1 overflow-hidden">
        {/* On mobile, we might want to hide the list if detail is open, but for simplicity we keep the 3-pane layout responsive via hidden classes in components if needed. 
            For now, assuming desktop-first Notion-like layout. */}
        <EmailList 
          emails={mockEmails} 
          selectedId={selectedEmailId} 
          onSelect={setSelectedEmailId} 
        />
        
        <EmailDetail email={selectedEmail} />
      </main>
    </div>
  );
};