export interface Email {
  id: string;
  sender: string;
  senderEmail: string;
  subject: string;
  preview: string;
  body: string;
  timestamp: string;
  read: boolean;
  tags: Tag[];
  avatarColor: string;
}

export type Tag = 'Work' | 'Personal' | 'Important' | 'Finance';

export type Folder = 'inbox' | 'sent' | 'drafts' | 'archive' | 'trash';

export interface User {
  name: string;
  email: string;
  avatarUrl?: string;
}