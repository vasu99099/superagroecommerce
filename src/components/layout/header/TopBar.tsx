import React from 'react';
import { HEADER_CONSTANTS } from '../../../constants/header';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const TopBar = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-green-600 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-0">
            <span>📞 {t('contact.helpline')}: {HEADER_CONSTANTS.CONTACT.HELPLINE}</span>
            <span className="hidden sm:inline mx-2">|</span>
            <span>✉️ {HEADER_CONSTANTS.CONTACT.EMAIL}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>🚚 {t('contact.freeShipping')}</span>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;