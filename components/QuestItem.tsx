
import React, { useState } from 'react';
import type { Quest } from '../types';
import { CodeIcon } from './icons/CodeIcon';

interface QuestItemProps {
  quest: Quest;
  index: number;
}

export const QuestItem: React.FC<QuestItemProps> = ({ quest, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0); // Open the first quest by default

  return (
    <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-lg overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 text-left flex justify-between items-center hover:bg-gray-700/50 focus:outline-none"
      >
        <div className="flex items-center">
          <span className="text-indigo-400 font-bold text-xl mr-4">{index + 1}</span>
          <h4 className="text-lg font-semibold text-white">{quest.title}</h4>
        </div>
        <svg
          className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
        style={{ transitionProperty: 'max-height, padding' }}
      >
        <div className="px-5 pb-5 border-t border-gray-700">
            <p className="text-gray-300 mt-4 whitespace-pre-wrap">{quest.description}</p>
            <div className="mt-4">
              <h5 className="text-md font-semibold text-indigo-300 mb-2">Key Concepts to Vibe With:</h5>
              <div className="flex flex-wrap gap-2">
                {quest.keyConcepts.map((concept, i) => (
                  <span key={i} className="bg-indigo-500/20 text-indigo-300 text-xs font-medium px-2.5 py-1 rounded-full">
                    {concept}
                  </span>
                ))}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export const QuestSkeleton: React.FC = () => (
    <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-5 animate-pulse">
        <div className="flex justify-between items-center">
            <div className="h-6 bg-gray-700 rounded w-3/4"></div>
            <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
        </div>
        <div className="mt-4 space-y-3">
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        </div>
    </div>
);
