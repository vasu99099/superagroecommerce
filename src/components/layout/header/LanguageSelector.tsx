'use client';
import React from 'react';
import { Globe } from 'lucide-react';
import { Button } from '../../ui/button';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';

const LanguageSelector = () => {
  const { i18n: i18nHook } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18nHook.language === 'en' ? 'gu' : 'en');
  };

  return (
    <div className="flex items-center space-x-1">
      <Globe className="w-4 h-4 text-gray-500" />
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        className="text-xs px-2 py-1 h-auto">
        {i18nHook.language === 'en' ? 'ગુજરાતી' : 'English'}
      </Button>
    </div>
  );
};

export default LanguageSelector;
