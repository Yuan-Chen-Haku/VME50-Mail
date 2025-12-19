import { Email } from './types';

export const mockEmails: Email[] = [
  {
    id: '1',
    sender: 'Lisa from Notion',
    senderEmail: 'lisa@makenotion.com',
    subject: 'Welcome to your new workspace',
    preview: 'Here are a few tips to get you started with your new organized life...',
    body: `Hi there,

Welcome to your new workspace! We're thrilled to have you on board. 

Here are a few tips to get you started:
1. Try creating a new page by typing /page.
2. Drag and drop items to reorganize your thoughts.
3. Invite your team to collaborate in real-time.

If you have any questions, feel free to reply to this email.

Best,
Lisa`,
    timestamp: '10:42 AM',
    read: false,
    tags: ['Work', 'Important'],
    avatarColor: 'bg-blue-100 text-blue-600',
  },
  {
    id: '2',
    sender: 'Linear',
    senderEmail: 'notifications@linear.app',
    subject: 'Cycle 24 has started',
    preview: 'The new cycle has automatically started based on your team settings.',
    body: `The new cycle (Cycle 24) has started.
    
Team: Engineering
Duration: 2 weeks
Dates: Oct 23 - Nov 6

View the active cycle board to see assigned tasks.`,
    timestamp: '9:15 AM',
    read: true,
    tags: ['Work'],
    avatarColor: 'bg-purple-100 text-purple-600',
  },
  {
    id: '3',
    sender: 'Stripe',
    senderEmail: 'support@stripe.com',
    subject: 'Your payout of $1,250.00 is on the way',
    preview: 'This payout will arrive in your bank account within 2-3 business days.',
    body: `We've sent a payout of $1,250.00 to your bank account ending in •••• 4242.
    
Expected arrival: Oct 25, 2023.
Reference: #PAY-8823123

You can view details in your dashboard.`,
    timestamp: 'Yesterday',
    read: true,
    tags: ['Finance'],
    avatarColor: 'bg-indigo-100 text-indigo-600',
  },
  {
    id: '4',
    sender: 'Figma',
    senderEmail: 'notifications@figma.com',
    subject: 'James left a comment on "Project X UI"',
    preview: '"I think we should increase the padding on this container..."',
    body: `James wrote:
"I think we should increase the padding on this container. It feels a bit tight on mobile screens."

View the file to reply or resolve this comment.`,
    timestamp: 'Yesterday',
    read: true,
    tags: ['Work'],
    avatarColor: 'bg-orange-100 text-orange-600',
  },
  {
    id: '5',
    sender: 'Mom',
    senderEmail: 'mom@gmail.com',
    subject: 'Sunday dinner?',
    preview: 'Are you coming over this weekend? Dad is making his famous lasagna.',
    body: `Hi sweetie,
    
Are you free this Sunday? Dad is planning to make lasagna and we'd love to see you. 
Let me know if you can make it!

Love,
Mom`,
    timestamp: 'Oct 21',
    read: true,
    tags: ['Personal'],
    avatarColor: 'bg-pink-100 text-pink-600',
  },
  {
    id: '6',
    sender: 'Newsletter',
    senderEmail: 'news@dailytech.com',
    subject: 'The future of AI in web development',
    preview: 'Today we explore how LLMs are changing the way we write code...',
    body: `Weekly Tech Digest.
    
1. AI in 2024: What to expect.
2. React 19 features leaked?
3. The rise of server-side rendering (again).

Read the full article on our website.`,
    timestamp: 'Oct 20',
    read: true,
    tags: [],
    avatarColor: 'bg-gray-100 text-gray-600',
  },
];