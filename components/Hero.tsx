
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

export const Hero: React.FC = () => {
  return (
    <div className="text-center my-8 md:my-16">
      <div className="inline-flex items-center justify-center bg-indigo-500/20 text-indigo-300 rounded-full px-4 py-1 mb-4 text-sm">
        <SparklesIcon className="w-4 h-4 mr-2" />
        Powered by Generative AI
      </div>
      <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
        Unlock Your<span className="text-indigo-400"> Coding Vibe</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
        Stop the boring tutorials. Start your coding journey with personalized quests generated just for you. Choose your tech, define your goal, and let our AI mentor guide your way.
      </p>
    </div>
  );
};
