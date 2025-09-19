
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 mt-12 text-center text-gray-500 text-sm">
      <div className="container mx-auto">
        <p>&copy; {currentYear} Vibecoder. All rights reserved. Code your vibe.</p>
      </div>
    </footer>
  );
};
