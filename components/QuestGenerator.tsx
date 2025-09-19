
import React, { useState, useMemo } from 'react';
import { Language, Framework } from '../types';
import { LANGUAGES, FRAMEWORKS } from '../constants';
import { SparklesIcon } from './icons/SparklesIcon';

interface QuestGeneratorProps {
  onGenerate: (language: Language, framework: Framework, goal: string) => void;
  isLoading: boolean;
}

export const QuestGenerator: React.FC<QuestGeneratorProps> = ({ onGenerate, isLoading }) => {
  const [language, setLanguage] = useState<Language>(Language.JavaScript);
  const [framework, setFramework] = useState<Framework>(Framework.React);
  const [goal, setGoal] = useState<string>('');

  const availableFrameworks = useMemo(() => FRAMEWORKS[language] || [Framework.None], [language]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as Language;
    setLanguage(newLang);
    const newFrameworks = FRAMEWORKS[newLang];
    if (newFrameworks && newFrameworks.length > 0) {
      setFramework(newFrameworks[0]);
    } else {
      setFramework(Framework.None);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (goal.trim()) {
      onGenerate(language, framework, goal);
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-indigo-500/30 shadow-2xl shadow-indigo-900/50 max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="language" className="block text-sm font-medium text-indigo-300 mb-2">
              Choose your Language
            </label>
            <select
              id="language"
              value={language}
              onChange={handleLanguageChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 text-white focus:ring-indigo-500 focus:border-indigo-500 transition"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="framework" className="block text-sm font-medium text-indigo-300 mb-2">
              Choose your Framework/Library
            </label>
            <select
              id="framework"
              value={framework}
              onChange={(e) => setFramework(e.target.value as Framework)}
              disabled={availableFrameworks.length <= 1 && availableFrameworks[0] === Framework.None}
              className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 text-white focus:ring-indigo-500 focus:border-indigo-500 transition disabled:opacity-50"
            >
              {availableFrameworks.map((fw) => (
                <option key={fw} value={fw}>
                  {fw}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="goal" className="block text-sm font-medium text-indigo-300 mb-2">
            What's your coding goal?
          </label>
          <input
            type="text"
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="e.g., 'Build a cool portfolio website' or 'Learn data analysis basics'"
            className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 text-white focus:ring-indigo-500 focus:border-indigo-500 transition placeholder-gray-500"
            required
          />
        </div>
        
        <div className="text-center">
          <button
            type="submit"
            disabled={isLoading || !goal.trim()}
            className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 disabled:bg-indigo-800 disabled:cursor-not-allowed disabled:scale-100"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating Vibe...
              </>
            ) : (
              <>
                <SparklesIcon className="w-5 h-5 mr-2" />
                Generate Quests
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
