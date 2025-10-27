import React from 'react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { PRODUCT_CATEGORIES, BADGES, HEADER_CONSTANTS } from '../../../constants/header';

interface MegaMenuProps {
  isVisible: boolean;
}

const MegaMenu = ({ isVisible }: MegaMenuProps) => {
  if (!isVisible) return null;

  return (
    <div className={`absolute left-0 top-full mt-0 ${HEADER_CONSTANTS.MEGA_MENU.WIDTH} bg-white shadow-2xl rounded-b-lg border border-gray-200 animate-in fade-in slide-in-from-top-2 duration-200`}>
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {HEADER_CONSTANTS.MEGA_MENU.TITLE}
          </h3>
          <p className="text-sm text-gray-500">
            {HEADER_CONSTANTS.MEGA_MENU.SUBTITLE}
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {PRODUCT_CATEGORIES.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <a
                key={index}
                href="#"
                className="group p-4 rounded-lg transition-all duration-200 border border-transparent">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className={category.color}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-gray-900">{category.name}</h4>
                  </div>
                  <div className="space-y-1">
                    {category.products.map((product, idx) => (
                      <p
                        key={idx}
                        className="text-xs text-gray-400 hover:text-green-600 cursor-pointer transition-colors">
                        {product}
                      </p>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {BADGES.map((badge, index) => (
              <Badge key={index} className={`${badge.className} hover:${badge.className}`}>
                {badge.text}
              </Badge>
            ))}
          </div>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            View All Products →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;