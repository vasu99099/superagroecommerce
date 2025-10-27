'use client';
import React from 'react';
import { Leaf } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Logo = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center space-x-2">
      <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
      <div>
        <span className="text-lg sm:text-2xl font-bold text-green-800 block leading-none">
          {t('brand.name')}
        </span>
        <span className="hidden sm:block text-xs text-gray-500">{t('brand.tagline')}</span>
      </div>
    </div>
  );
};

export default Logo;
