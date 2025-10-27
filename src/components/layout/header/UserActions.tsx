import React from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';

interface UserActionsProps {
  cartCount: number;
  mobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}

const UserActions = ({ cartCount, mobileMenuOpen, onMobileMenuToggle }: UserActionsProps) => {
  return (
    <div className="flex items-center space-x-2 sm:space-x-4">
      {/* Search Icon - Mobile Only */}
      <Button variant="ghost" size="icon" className="md:hidden">
        <Search className="w-5 h-5" />
      </Button>

      {/* Cart */}
      <Button variant="ghost" size="icon" className="relative">
        <ShoppingCart className="w-5 h-5" />
        {cartCount > 0 && (
          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 hover:bg-red-500 text-[10px]">
            {cartCount}
          </Badge>
        )}
      </Button>

      {/* User Account - Desktop Only */}
      <Button variant="ghost" className="hidden lg:flex items-center space-x-1">
        <User className="w-5 h-5" />
        <span className="text-sm">Account</span>
      </Button>

      {/* User Icon - Tablet/Mobile */}
      <Button variant="ghost" size="icon" className="lg:hidden">
        <User className="w-5 h-5" />
      </Button>

      {/* Login/Signup - Desktop Only */}
      <div className="hidden lg:flex items-center space-x-2">
        <Button variant="outline" size="sm">
          Login
        </Button>
        <Button size="sm" className="bg-green-600 hover:bg-green-700">
          Sign Up
        </Button>
      </div>

      {/* Mobile Menu Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={onMobileMenuToggle}>
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>
    </div>
  );
};

export default UserActions;