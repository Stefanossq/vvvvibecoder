
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuestGenerator } from './components/QuestGenerator';
import { QuestList } from './components/QuestList';
import { Footer } from './components/Footer';
import type { Quest, User, Language, Framework } from './types';
import { generateQuests } from './services/geminiService';

const App: React.FC = () => {
  const [quests, setQuests] = useState<Quest[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentUser] = useState<User>({
    name: 'Vibecoder',
    avatarUrl: 'https://picsum.photos/seed/vibecoder/100/100',
  });

  const handleGenerateQuests = useCallback(async (language: Language, framework: Framework, goal: string) => {
    setIsLoading(true);
    setError(null);
    setQuests([]);
    try {
      const generatedQuests = await generateQuests(language, framework, goal);
      setQuests(generatedQuests);
    } catch (err) {
      console.error(err);
      setError('Failed to generate quests. The AI might be tired, please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 font-sans leading-normal tracking-wider bg-cover">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-gray-900 to-black opacity-80"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header user={currentUser} />
        <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
          <Hero />
          <QuestGenerator onGenerate={handleGenerateQuests} isLoading={isLoading} />
          {error && <div className="text-center my-8 text-red-400 bg-red-900/50 p-4 rounded-lg">{error}</div>}
          <QuestList quests={quests} isLoading={isLoading} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
