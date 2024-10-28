export interface Icebreaker {
  id: string;
  question: string;
  category: 'fun' | 'professional' | 'deep' | 'creative';
}

export const icebreakers: Icebreaker[] = [
  {
    id: '1',
    question: "If you could instantly master any skill, what would it be and why?",
    category: 'deep'
  },
  {
    id: '2',
    question: "What's the most interesting documentary you've ever watched?",
    category: 'fun'
  },
  {
    id: '3',
    question: "If you could have dinner with any historical figure, who would it be?",
    category: 'creative'
  },
  {
    id: '4',
    question: "What's the best piece of professional advice you've ever received?",
    category: 'professional'
  },
  {
    id: '5',
    question: "What's a hobby you've always wanted to try but haven't yet?",
    category: 'fun'
  },
  {
    id: '6',
    question: "What's the most beautiful place you've ever visited?",
    category: 'deep'
  },
  {
    id: '7',
    question: "If you could instantly become an expert in one subject, what would it be?",
    category: 'professional'
  },
  {
    id: '8',
    question: "What's a small act of kindness you'll never forget?",
    category: 'deep'
  },
  {
    id: '9',
    question: "If you could trade lives with anyone for a day, who would it be?",
    category: 'creative'
  },
  {
    id: '10',
    question: "What's the most valuable life lesson you learned the hard way?",
    category: 'deep'
  }
];