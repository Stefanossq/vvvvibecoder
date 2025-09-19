
import React from 'react';
import type { User } from '../types';
import { CodeIcon } from './icons/CodeIcon';

interface HeaderProps {
  user: User;
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="py-4 px-4 md:px-8 bg-gray-900/50 backdrop-blur-sm border-b border-indigo-500/30">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <CodeIcon className="w-8 h-8 text-indigo-400" />
          <h1 className="text-2xl font-bold text-white tracking-widest uppercase">
            Vibecoder
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-gray-300">{user.name}</span>
          <img
            src={user.avatarUrl}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-indigo-500"
          />
        </div>
      </div>
    </header>
  );
};
