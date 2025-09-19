
import React from 'react';
import type { Quest } from '../types';
import { QuestItem, QuestSkeleton } from './QuestItem';

interface QuestListProps {
  quests: Quest[];
  isLoading: boolean;
}

export const QuestList: React.FC<QuestListProps> = ({ quests, isLoading }) => {
  if (isLoading) {
    return (
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-center text-indigo-400 mb-8">Crafting your coding journey...</h3>
        <div className="space-y-6 max-w-4xl mx-auto">
          {[...Array(3)].map((_, index) => (
            <QuestSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (quests.length === 0) {
    return null; // Don't show anything if there are no quests and it's not loading
  }

  return (
    <div className="mt-12">
      <h3 className="text-3xl font-bold text-center text-indigo-400 mb-8">Your Custom Quest Log</h3>
      <div className="space-y-6 max-w-4xl mx-auto">
        {quests.map((quest, index) => (
          <QuestItem key={index} quest={quest} index={index} />
        ))}
      </div>
    </div>
  );
};
