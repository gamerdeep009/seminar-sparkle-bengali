import React from 'react';
import { Button } from '@/components/ui/button';

interface LanguageToggleProps {
  currentLanguage: 'en' | 'bn';
  onLanguageChange: (language: 'en' | 'bn') => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLanguage, onLanguageChange }) => {
  return (
    <div className="flex rounded-lg overflow-hidden shadow-card">
      <Button
        variant={currentLanguage === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onLanguageChange('en')}
        className="rounded-none border-r-0 transition-smooth"
      >
        English
      </Button>
      <Button
        variant={currentLanguage === 'bn' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onLanguageChange('bn')}
        className="rounded-none transition-smooth"
      >
        বাংলা
      </Button>
    </div>
  );
};

export default LanguageToggle;