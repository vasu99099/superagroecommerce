import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '../../ui/button';
import { PRODUCT_CATEGORIES, HEADER_CONSTANTS } from '../../../constants/header';

interface MobileMenuProps {
  isOpen: boolean;
  showProductMenu: boolean;
  onProductMenuToggle: () => void;
}

const MobileMenu = ({ isOpen, showProductMenu, onProductMenuToggle }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden border-t bg-white">
      <nav className="px-4 py-4 space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto">
        <a
          href={HEADER_CONSTANTS.NAVIGATION.LINKS[0].href}
          className="block text-gray-700 hover:text-green-600 font-medium py-2 text-base">
          {HEADER_CONSTANTS.NAVIGATION.LINKS[0].name}
        </a>

        {/* Products - Mobile Accordion */}
        <div>
          <button
            onClick={onProductMenuToggle}
            className="flex items-center justify-between w-full text-gray-700 hover:text-green-600 font-medium py-2 text-base">
            <span>Products</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${showProductMenu ? 'rotate-180' : ''}`}
            />
          </button>

          {showProductMenu && (
            <div className="pl-2 mt-2 space-y-3 pb-2">
              {PRODUCT_CATEGORIES.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <a
                    key={index}
                    href="#"
                    className="block p-3 rounded-lg bg-gray-50 hover:bg-green-50 border border-gray-200">
                    <div className="flex items-start space-x-3">
                      <div className={`${category.color} mt-0.5 flex-shrink-0`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">
                          {category.name}
                        </h4>
                        <p className="text-xs text-gray-500 mb-2">{category.description}</p>
                        <div className="space-y-0.5">
                          {category.products.slice(0, 3).map((product, idx) => (
                            <p key={idx} className="text-xs text-gray-400">
                              • {product}
                            </p>
                          ))}
                          {category.products.length > 3 && (
                            <p className="text-xs text-green-600 font-medium mt-1">
                              +{category.products.length - 3} more
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </div>
        {HEADER_CONSTANTS.NAVIGATION.LINKS.slice(1).map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="block text-gray-700 hover:text-green-600 font-medium py-2 text-base">
            {link.name}
          </a>
        ))}

        {/* Special Offers - Mobile */}
        <a
          href="#"
          className="block p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 font-medium text-sm text-center">
          🎉 Special Offers - View Now
        </a>

        {/* Mobile Actions */}
        <div className="pt-4 border-t space-y-2">
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              Login
            </Button>
            <Button className="flex-1 bg-green-600 hover:bg-green-700">Sign Up</Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
