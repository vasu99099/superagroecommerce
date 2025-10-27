'use client';
import React from 'react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { Button } from '../ui/button';
import { LOCATION_CONSTANTS } from '../../constants/location';

const LocationMap = () => {
  const { SHOP } = LOCATION_CONSTANTS;

  const openInGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${SHOP.COORDINATES.LAT},${SHOP.COORDINATES.LNG}`,
      '_blank'
    );
  };

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Store</h2>
          <p className="text-lg text-gray-600">Find us easily and get expert agricultural advice</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={SHOP.GOOGLE_MAPS_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          {/* Store Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{SHOP.NAME}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{SHOP.ADDRESS}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <a href={`tel:${SHOP.PHONE}`} className="text-gray-700 hover:text-green-600">
                    {SHOP.PHONE}
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <a href={`mailto:${SHOP.EMAIL}`} className="text-gray-700 hover:text-green-600">
                    {SHOP.EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                onClick={openInGoogleMaps}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2">
                <Navigation className="w-5 h-5" />
                <span>Get Directions</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
