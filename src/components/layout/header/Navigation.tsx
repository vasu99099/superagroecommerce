import { ChevronDown } from 'lucide-react';
import { Badge } from '../../ui/badge';
import { HEADER_CONSTANTS } from '../../../constants/header';
import MegaMenu from './MegaMenu';

interface NavigationProps {
  showProductMenu: boolean;
  onProductMenuEnter: () => void;
  onProductMenuLeave: () => void;
}

const Navigation = ({
  showProductMenu,
  onProductMenuEnter,
  onProductMenuLeave
}: NavigationProps) => {
  return (
    <div className="hidden lg:block bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center space-x-8 py-3">
          <a
            href={HEADER_CONSTANTS.NAVIGATION.LINKS[0].href}
            className="text-gray-700 hover:text-green-600 font-medium transition-colors text-sm">
            {HEADER_CONSTANTS.NAVIGATION.LINKS[0].name}
          </a>

          {/* Products with Mega Menu */}
          <div
            className="relative"
            onMouseEnter={onProductMenuEnter}
            onMouseLeave={onProductMenuLeave}>
            <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600 font-medium transition-colors text-sm group">
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showProductMenu ? 'rotate-180' : ''}`}
              />
            </button>
            <MegaMenu isVisible={showProductMenu} />
          </div>

          {HEADER_CONSTANTS.NAVIGATION.LINKS.slice(1).map((link, index) => (
            <a
              key={index + 1}
              href={link.href}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors text-sm">
              {link.name}
            </a>
          ))}
          {/* Special Offers Badge */}
          <div className="ml-auto">
            <Badge className="bg-red-500 hover:bg-red-500 text-white animate-pulse">
              🎉 Special Offers
            </Badge>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
