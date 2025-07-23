export const mockProducts = [
  // AI Models
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Advanced conversational AI that understands context and generates human-like responses for any task.',
    price: '$0-200/mo',
    rating: 4.8,
    reviews: 15420,
    category: 'model' as const,
    provider: 'OpenAI',
    featured: true
  },
  {
    id: '2', 
    name: 'Claude',
    description: 'Constitutional AI assistant excelling at analysis, writing, math, coding, and creative tasks.',
    price: '$0-200/mo',
    rating: 4.7,
    reviews: 8930,
    category: 'model' as const,
    provider: 'Anthropic',
    featured: true
  },
  {
    id: '3',
    name: 'Grok',
    description: 'Real-time AI with wit and humor, trained on X data for current events and unfiltered conversations.',
    price: 'From $300/mo',
    rating: 4.5,
    reviews: 3240,
    category: 'model' as const,
    provider: 'xAI',
    featured: true
  },
  {
    id: '4',
    name: 'GPT-4 Vision',
    description: 'Multimodal AI that can understand and analyze images, documents, and visual content.',
    price: '$20-200/mo',
    rating: 4.9,
    reviews: 7840,
    category: 'model' as const,
    provider: 'OpenAI'
  },
  {
    id: '5',
    name: 'Llama 3',
    description: 'Open-source large language model optimized for performance and cost-effectiveness.',
    price: 'Free-$50/mo',
    rating: 4.4,
    reviews: 2156,
    category: 'model' as const,
    provider: 'Meta'
  },
  
  // AI Agents
  {
    id: '6',
    name: 'Email Assistant Pro',
    description: 'Smart email automation that drafts, schedules, and responds to emails based on your style.',
    price: '$29/mo',
    rating: 4.6,
    reviews: 892,
    category: 'agent' as const,
    provider: 'AutoMail Inc'
  },
  {
    id: '7',
    name: 'Social Media Manager',
    description: 'AI agent that creates, schedules, and optimizes social media content across all platforms.',
    price: '$49/mo',
    rating: 4.5,
    reviews: 1247,
    category: 'agent' as const,
    provider: 'SocialBot'
  },
  {
    id: '8',
    name: 'Customer Support Bot',
    description: 'Intelligent customer service agent that handles inquiries 24/7 with human-like responses.',
    price: '$99/mo',
    rating: 4.8,
    reviews: 567,
    category: 'agent' as const,
    provider: 'SupportAI'
  },
  
  // Automations
  {
    id: '9',
    name: 'Data Pipeline Automation',
    description: 'No-code workflow that automatically processes, cleans, and analyzes your business data.',
    price: '$79/mo',
    rating: 4.7,
    reviews: 334,
    category: 'automation' as const,
    provider: 'n8n'
  },
  {
    id: '10',
    name: 'Lead Generation System',
    description: 'Automated lead discovery, verification, and outreach system that grows your customer base.',
    price: '$149/mo',
    rating: 4.6,
    reviews: 789,
    category: 'automation' as const,
    provider: 'Zapier'
  }
];