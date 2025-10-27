'use client';
import React, { useState } from 'react';
import TopBar from './header/TopBar';
import Logo from './header/Logo';
import SearchBar from './header/SearchBar';
import UserActions from './header/UserActions';
import Navigation from './header/Navigation';
import MobileMenu from './header/MobileMenu';

const AgroHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProductMenu, setShowProductMenu] = useState(false);
  const [cartCount] = useState(3);

  const handleMobileMenuToggle = () => setMobileMenuOpen(!mobileMenuOpen);
  const handleProductMenuEnter = () => setShowProductMenu(true);
  const handleProductMenuLeave = () => setShowProductMenu(false);
  const handleProductMenuToggle = () => setShowProductMenu(!showProductMenu);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <TopBar />

      {/* Main Header */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <Logo />
            <SearchBar />
            <UserActions
              cartCount={cartCount}
              mobileMenuOpen={mobileMenuOpen}
              onMobileMenuToggle={handleMobileMenuToggle}
            />
          </div>
          <SearchBar isMobile />
        </div>
      </div>

      <Navigation
        showProductMenu={showProductMenu}
        onProductMenuEnter={handleProductMenuEnter}
        onProductMenuLeave={handleProductMenuLeave}
      />

      <MobileMenu
        isOpen={mobileMenuOpen}
        showProductMenu={showProductMenu}
        onProductMenuToggle={handleProductMenuToggle}
      />
    </header>
  );
};

export default AgroHeader;
