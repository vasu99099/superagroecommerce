import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '../../ui/input';
import { useTranslation } from 'react-i18next';

interface SearchBarProps {
  isMobile?: boolean;
}

const SearchBar = ({ isMobile = false }: SearchBarProps) => {
  const { t } = useTranslation();
  const placeholder = isMobile 
    ? t('search.mobilePlaceholder') 
    : t('search.desktopPlaceholder');

  const containerClass = isMobile 
    ? "md:hidden pb-3" 
    : "hidden md:flex flex-1 max-w-xl lg:max-w-2xl mx-4 lg:mx-8";

  const iconClass = isMobile 
    ? "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
    : "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400";

  const inputClass = isMobile
    ? "w-full pl-9 pr-4 py-2 text-sm border-2 border-gray-200 focus:border-green-500 rounded-lg"
    : "w-full pl-10 pr-4 py-2 border-2 border-gray-200 focus:border-green-500 rounded-lg";

  return (
    <div className={containerClass}>
      <div className="relative w-full">
        <Search className={iconClass} />
        <Input
          type="text"
          placeholder={placeholder}
          className={inputClass}
        />
      </div>
    </div>
  );
};

export default SearchBar;