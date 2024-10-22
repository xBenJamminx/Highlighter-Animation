import React from 'react';
import { AnimatedUnderline } from './components/AnimatedUnderline';
import { BookHeart, Sparkles } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 flex flex-col items-center justify-start p-4">
      <div className="max-w-4xl w-full space-y-8 text-center pt-16">
        <div className="relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[#6ca0dc] animate-float">
            <Sparkles className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Personalized Stories for
          </h1>
          <div className="flex justify-center items-center gap-4">
            <BookHeart className="w-8 h-8 text-[#6ca0dc]" />
            <AnimatedUnderline
              text="Growth"
              color="#6ca0dc"
              fontSize="48px"
              className="font-bold"
            />
            <BookHeart className="w-8 h-8 text-[#6ca0dc]" />
          </div>
        </div>
        
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-8">
          Embark on a journey of self-discovery through stories that nurture your emotional well-being
        </p>
      </div>
    </div>
  );
}